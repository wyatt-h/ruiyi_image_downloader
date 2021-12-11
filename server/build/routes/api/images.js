"use strict";

var express = require("express");

var router = express.Router();

var scraper = require("../../scraper");

var db = require("../../db");

var _require = require("express"),
    response = _require.response;

var testEnvironmentVariable = require("../../settings"); //@route    GET api/images
//@desc     get all images
//@access   Public


router.get("/", // paginatedResults("SELECT * FROM images"),
function (req, res) {
  // res.json(res.paginatedResults);
  // db
  //   .query("SELECT * FROM images")
  //   .then((response) => {
  //     res.json(response.rows);
  //   })
  //   .catch((err) =>
  //     res.status(500).json(err.message)
  //   );
  res.status(200).json({
    message: "today is a good day"
  });
}); //@route    GET api/images/refresh
//@desc     refresh the image in the database
//@access   Public

router.get("/refresh", function (req, res) {
  scraper.get_images().then(function (images) {
    db.query("DELETE FROM images").then(function () {
      images.forEach(function (image) {
        pool.query("INSERT INTO images (name, url, tag, date) VALUES ($1, $2, $3, $4)", [image.name, image.url, image.tag, image.date])["catch"](function (err) {
          return res.status(501).json({
            info: "Some Errors"
          });
        });
      });
      res.status(200).json({
        info: "Successfully Refreshed..."
      });
    })["catch"](function (err) {
      return res.status(501).send(err);
    });
  });
}); // this function is used to paginate the images served

function paginatedResults(query) {
  return function (req, res, next) {
    var page = parseInt(req.query.page);
    var limit = parseInt(req.query.limit);
    var startIndex = (page - 1) * limit;
    var endIndex = page * limit;
    var results = {};
    db.query(query).then(function (response) {
      if (endIndex < response.rows.length) results.next = {
        page: page + 1,
        limit: limit
      };

      if (startIndex > 0) {
        results.prev = {
          page: page - 1,
          limit: limit
        };
      }

      results.results = response.rows.slice(startIndex, endIndex);
      res.paginatedResults = results;
      next();
    })["catch"](function (err) {
      res.status(500).json(err.message);
    });
  };
}

module.exports = router;