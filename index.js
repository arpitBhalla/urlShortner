const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const shortUrlRouter=require('./routes/short')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send("sdg")
})

app.post('/shortUrl', shortUrlRouter)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})