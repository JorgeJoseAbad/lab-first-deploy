const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: process.env.API_KEY});
});

module.exports = siteController;
