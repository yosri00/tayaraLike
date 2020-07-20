//imports
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/dist"));
const port = process.env.PORT || 3000;
// INITIATE DATABASE DONT TOUCH
mongoose.connect("mongodb://localhost/tayaraLike", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATA BASE CONNECTED");
});
const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  categories: String,
  img: String,
  description: String,
  price: Number,
});
const User = mongoose.model("User", userSchema);

//ROUTERS

app.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.send("USER INSERTED TO THE DATABASEEEEEEEEE");
  });
});

//INITIATE SEREVR
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
