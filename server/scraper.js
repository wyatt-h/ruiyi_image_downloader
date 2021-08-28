const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

function get_images() {
  return new Promise(async (resolve, reject) => {
    try {
      const url =
        "http://qdjz.lexuewang.cn:8002/";
      const username = "241837";
      const password = "123456";
      const browser = await puppeteer.launch({
        headless: false,
      });
      const page = await browser.newPage();
      await page.goto(url);
      await page.type("#txtUserName", username);
      await page.type("#pws", password);
      await Promise.all([
        page.waitForNavigation(),
        page.click("#btnLogin"),
      ]);
      await page.waitForSelector(
        "body > div.mainHd > div"
      );
      await page.click("body > div.mainHd > div");
      await page.waitForSelector(
        "body > div.mainNav_box.mainNav_box_left > div > ul > li:nth-child(3) > a"
      );
      await page.click(
        "body > div.mainNav_box.mainNav_box_left > div > ul > li:nth-child(3) > a"
      );
      await page.waitForSelector(
        'iframe[src^="stuerrorbook"]'
      );

      const target_file_path =
        await page.evaluate(() => {
          src = document
            .querySelector("#iframeId")
            .getAttribute("src");
          return src;
        });
      old_url = await page.url();
      url_list = old_url.split("/");
      url_list.pop();
      url_list.push(target_file_path);
      new_url = url_list.join("/");
      await page.goto(new_url);
      images = [];
      await page.waitForSelector("li.list-item");
      btn_avail = false;
      flag = true;
      //test code
      x = 0;
      // while (x < 60) {
      //   x++;
      while (!btn_avail) {
        await page.waitForFunction(
          () =>
            !document.querySelector(
              ".el-loading-mask"
            )
        );
        bodyHTML = await page.evaluate(
          () => document.body.outerHTML
        );
        // console.log(bodyHTML);
        const $ = cheerio.load(bodyHTML);
        if (flag) {
          page_number = $(".number")
            .last()
            .text();
          console.log(page_number);
          flag = false;
        }
        imgs = await $("li.list-item").each(
          (index, ele) => {
            iurl = $(ele).find("img").attr("src");
            info = $(ele)
              .find("div.tips")
              .children();
            iname = info.first().text();
            itime = info
              .first()
              .next()
              .text()
              .split(" ")[0]
              .split("/")
              .join("-");
            itag = info
              .last()
              .text()
              .split("：")[1];
            image = {
              name: iname,
              url: iurl,
              date: itime,
              tag: itag,
            };
            images.push(image);
          }
        );
        btn_avail = !!$("button.btn-next").attr(
          "disabled"
        );
        await page.click("button.btn-next");
      }
      resolve(images);

      await browser.close();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports.get_images = get_images;
