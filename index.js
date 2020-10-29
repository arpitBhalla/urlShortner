const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/shortUrl");
const auth = require("./middleWare/auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth);
app.use("/", route);

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/urlShortner";
const MONGOOSE_OPTION = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(MONGO, MONGOOSE_OPTION, (err) => {
  if (err) console.log("Error while connecting to MongoDB, Err:", err);
  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
  });
});
