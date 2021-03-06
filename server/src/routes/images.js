const express = require("express");
const router = express.Router();
const scraper = require("../scraper");
const db = require("../db");
const { response } = require("express");
const testEnvironmentVariable = require("../settings");

//@route    GET api/images
//@desc     get all images
//@access   Public
router.get(
  "/",
  // paginatedResults("SELECT * FROM images"),
  (req, res) => {
    // res.json(res.paginatedResults);
    // db
    //   .query("SELECT * FROM images")
    //   .then((response) => {
    //     res.json(response.rows);
    //   })
    //   .catch((err) =>
    //     res.status(500).json(err.message)
    //   );
    res.status(200).json({ message: "today is a gooooood day" });
  }
);

//@route    GET api/images/refresh
//@desc     refresh the image in the database
//@access   Public
router.get("/refresh", (req, res) => {
  scraper.get_images().then((images) => {
    db.query("DELETE FROM images")
      .then(() => {
        images.forEach((image) => {
          pool
            .query(
              "INSERT INTO images (name, url, tag, date) VALUES ($1, $2, $3, $4)",
              [image.name, image.url, image.tag, image.date]
            )
            .catch((err) => res.status(501).json({ info: "Some Errors" }));
        });
        res.status(200).json({
          info: "Successfully Refreshed...",
        });
      })
      .catch((err) => res.status(501).send(err));
  });
});

// this function is used to paginate the images served
function paginatedResults(query) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    db.query(query)
      .then((response) => {
        if (endIndex < response.rows.length)
          results.next = {
            page: page + 1,
            limit: limit,
          };

        if (startIndex > 0) {
          results.prev = {
            page: page - 1,
            limit: limit,
          };
        }
        results.results = response.rows.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  };
}

export default router;
