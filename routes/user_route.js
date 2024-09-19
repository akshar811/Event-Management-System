const { Router } = require("express");
const { signups, signup, loginpage, login, homepage } = require("../controllers/User_controller");
const { Auth } = require("../middleware/Auth");


const Route = Router();

Route.get("/signup",signups)
Route.post("/signup",signup)
Route.get("/login",loginpage)
Route.post("/login",login)

module.exports = Route;



