const express = require('express');
const router = express.Router()
const sendRes = require('../util/respose')
const db = require('../models/url')
const { v1 } = require('uuid')

const UID = (max = 6) => v1().replace(/-/g, "").substr(0, max)

router.post("/", (req, res, next) => {
    const { headers } = req
    const API = headers['x-api-key']
    if (!API)
        return sendRes(res, "API Required")
    const { url, max, custom } = req.body || {}
    if (!url)
       return sendRes(res, "Url Required")
    let shortLink = custom || UID(max || 6)
    db.find({ short: shortLink }, (err, doc) => {
        let message = null;
        if (max < 5)
            message = "Link can not less than 5 characters"
        if (err)
            return sendRes(res, err)
        if (doc.length)
            shortLink = UID(max || 6), message = "Custom Link was not available"

        db.create({
            url,
            short: shortLink,
            createdAt: new Date().getTime()
        }).then(doc => {
            sendRes(res, null, {
                shorted: doc.short,
                message
            })
        }).catch(err => {
            sendRes(res, err.message)
        })
    })

    return 0;
})

module.exports = router