const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const hbs = require("hbs");
const User = require("./mongodb");
const templatePath = path.join(__dirname, "../templates");
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send("User not found");
    }

    if (user.password === req.body.password) {
      res.render("index");
    } else {
      res.send("Wrong password");
    }
  } catch (err) {
    res.send("An error occurred");
  }
});
app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };
  await User.insertMany([data]);
  res.render("login");
});
app.listen(3000, () => {
  console.log("port connected");
});
