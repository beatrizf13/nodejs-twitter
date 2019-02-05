const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://beatrizf13:beatrizf13@ds221405.mlab.com:21405/nodejs-twitter",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  return res.send({ title: "nodejs-twitter" });
});

app.use(express.json());
app.use(require("./routes"));

app.listen(3000, () => {
  console.log("server on port 3000");
});
