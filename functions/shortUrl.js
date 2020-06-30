const db = require('../models/url')
const { v1 } = require('uuid')

const UID = (max = 6) => v1().replace(/-/g, "").substr(0, max)

exports.handler = (event,context,sendRes) => {
    const { url, max, custom } = event.body || {}
    let shortLink = custom || UID(max || 6)
    db.find({ short: shortLink }, (err, doc) => {
        let message = null;
        if (max < 5)
            message = "Link can not less than 5 characters"
        if (err)
            return sendRes(err,{})
        if (doc.length)
            shortLink = UID(max || 6), message = "Custom Link was not available"

        db.create({
            url,
            short: shortLink,
            createdAt: new Date().getTime()
        }).then(doc => {
            sendRes(null, {
                shorted: doc.short,
                message
            })
        }).catch(err => {
            sendRes(err,{})
        })
    })

    return 0;
}