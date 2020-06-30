const express = require('express');
const router = express.Router()
const sendRes = require('../util/respose')
const db = require('../models/url')
router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "src") + "/index.html")
})

router.get("/list", (req, res) => {
    res.header("content-type:text")
    db.find({}, (err, doc) => {
        if (err)
            return sendRes(res, err)
        sendRes(res, null, { total: doc.length, urls: doc })
    })

})
router.get("/:id", (req, res) => {
    const { id } = req.params
    console.log(id)
    db.find({ short: id }, (err, doc) => {
        if (err)
            return sendRes(res, err)
        if (doc.length == 1) {
            res.redirect(doc[0].url)
        }
        else {
            return res.sendFile(__dirname.replace("routes", "src") + "/404.html")

        }
    })
})
module.exports = router