"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var puppeteer = require("puppeteer");

var cheerio = require("cheerio");

function get_images() {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var url, username, password, browser, page, target_file_path, _loop;

      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              url = "http://qdjz.lexuewang.cn:8002/";
              username = "241837";
              password = "123456";
              _context2.next = 6;
              return puppeteer.launch({
                headless: false
              });

            case 6:
              browser = _context2.sent;
              _context2.next = 9;
              return browser.newPage();

            case 9:
              page = _context2.sent;
              _context2.next = 12;
              return page["goto"](url);

            case 12:
              _context2.next = 14;
              return page.type("#txtUserName", username);

            case 14:
              _context2.next = 16;
              return page.type("#pws", password);

            case 16:
              _context2.next = 18;
              return Promise.all([page.waitForNavigation(), page.click("#btnLogin")]);

            case 18:
              _context2.next = 20;
              return page.waitForSelector("body > div.mainHd > div");

            case 20:
              _context2.next = 22;
              return page.click("body > div.mainHd > div");

            case 22:
              _context2.next = 24;
              return page.waitForSelector("body > div.mainNav_box.mainNav_box_left > div > ul > li:nth-child(3) > a");

            case 24:
              _context2.next = 26;
              return page.click("body > div.mainNav_box.mainNav_box_left > div > ul > li:nth-child(3) > a");

            case 26:
              _context2.next = 28;
              return page.waitForSelector('iframe[src^="stuerrorbook"]');

            case 28:
              _context2.next = 30;
              return page.evaluate(function () {
                src = document.querySelector("#iframeId").getAttribute("src");
                return src;
              });

            case 30:
              target_file_path = _context2.sent;
              _context2.next = 33;
              return page.url();

            case 33:
              old_url = _context2.sent;
              url_list = old_url.split("/");
              url_list.pop();
              url_list.push(target_file_path);
              new_url = url_list.join("/");
              _context2.next = 40;
              return page["goto"](new_url);

            case 40:
              images = [];
              _context2.next = 43;
              return page.waitForSelector("li.list-item");

            case 43:
              btn_avail = false;
              flag = true; //test code

              x = 0; // while (x < 60) {
              //   x++;

              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var $;
                return regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return page.waitForFunction(function () {
                          return !document.querySelector(".el-loading-mask");
                        });

                      case 2:
                        _context.next = 4;
                        return page.evaluate(function () {
                          return document.body.outerHTML;
                        });

                      case 4:
                        bodyHTML = _context.sent;
                        // console.log(bodyHTML);
                        $ = cheerio.load(bodyHTML);

                        if (flag) {
                          page_number = $(".number").last().text();
                          console.log(page_number);
                          flag = false;
                        }

                        _context.next = 9;
                        return $("li.list-item").each(function (index, ele) {
                          iurl = $(ele).find("img").attr("src");
                          info = $(ele).find("div.tips").children();
                          iname = info.first().text();
                          itime = info.first().next().text().split(" ")[0].split("/").join("-");
                          itag = info.last().text().split("：")[1];
                          image = {
                            name: iname,
                            url: iurl,
                            date: itime,
                            tag: itag
                          };
                          images.push(image);
                        });

                      case 9:
                        imgs = _context.sent;
                        btn_avail = !!$("button.btn-next").attr("disabled");
                        _context.next = 13;
                        return page.click("button.btn-next");

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _loop);
              });

            case 47:
              if (btn_avail) {
                _context2.next = 51;
                break;
              }

              return _context2.delegateYield(_loop(), "t0", 49);

            case 49:
              _context2.next = 47;
              break;

            case 51:
              resolve(images);
              _context2.next = 54;
              return browser.close();

            case 54:
              _context2.next = 59;
              break;

            case 56:
              _context2.prev = 56;
              _context2.t1 = _context2["catch"](0);
              reject(_context2.t1);

            case 59:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[0, 56]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

module.exports.get_images = get_images;