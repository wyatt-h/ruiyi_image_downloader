const express = require("express");
const router = express.Router();
const scraper = require("../../scraper");

// Image model
const Image = require("../../models/Image");

//@route    GET api/images
//@desc     get all images
//@access   Public
router.get("/", (req, res) => {
  scraper
    .get_images()
    .then((images) => res.json(images));
});

module.exports = router;
