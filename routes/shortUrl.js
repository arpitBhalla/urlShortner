const express = require("express");
const router = express.Router();
const Url = require("../models/url");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let data = await Url.find({ short: id });
  if (data.length) {
    res.redirect(data[0].url);
  }
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  if (!url || !url.trim())
    return res.json({
      error: "Url is required",
    });
  let regex = /(https|http)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (!regex.test(url))
    return res.json({
      error: "Url is invalid",
    });
  const newUrl = new Url({
    url,
  });
  await newUrl.save();
  return res.json({
    short: newUrl.short,
    url: ["http:/", req.headers.host, newUrl.short].join("/"),
  });
});

module.exports = router;
