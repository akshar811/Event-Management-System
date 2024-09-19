const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const { eventPage, creatEvent, allData, rsvpdata, deletedata, editdata, updatedata } = require("../controllers/Event_controller");
const { Auth } = require("../middleware/Auth");

const EventRoute = Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + path.extname(file.originalname)),
});
const upload = multer({ storage });



EventRoute.get("/Eventpage", Auth, eventPage);
EventRoute.post("/createEvent", upload.single("image"), Auth, creatEvent);
EventRoute.get("/AllData",Auth,allData);

EventRoute.post("/RSPV/:id", Auth, rsvpdata);

EventRoute.delete("/:id",Auth,deletedata);

EventRoute.get("/:id/edit",Auth,editdata);

EventRoute.patch("/:id/",Auth,updatedata);


module.exports = EventRoute;

