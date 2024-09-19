const express = require("express");
const path = require('path');
const cookies = require("cookie-parser");
const connect = require("./config/db");
const Route = require("./routes/user_route");
const EventRoute = require("./routes/event_route");
const methodOverride = require("method-override");

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookies());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/user",Route);
app.use("/Event",EventRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`listening on port ${process.env.PORT}`);
});
