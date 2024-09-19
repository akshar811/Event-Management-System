
const Event = require("../models/Event_Schema");

const eventPage = async (req, res) => {
  res.render("event");
};

const creatEvent = async (req, res) => {
  const { title, description, date, location, image ,  maxAttendees } = req.body;
 
    const event = new Event({
      title,
      description,
      date,
      location,
      maxAttendees,
      image: req.file.originalname ,
      createdBy :  req.body.userID,
      attendees : req.body.userID
    });
    await event.save();
    res.redirect("/Event/AllData");

};

// search and filter

const allData = async (req,res)=>{

    const { date, location, eventType } = req.query;  // Get query parameters

    let filter = {};
  
    // Add filters if they exist
    if (date) filter.date = { $gte: new Date(date) };  // Filter by upcoming date
    if (location) filter.location = location;
  
    const data = await Event.find(filter);  // Apply the filters
    res.render("Home", { data });

}


//// RSVP to event

const rsvpdata = async (req,res)=>{
    const event = await Event.findById(req.params.id);
  if (event.attendees.length >= event.maxAttendees) return res.send('Event is full.');
  
  event.attendees.push(req.body.userID);
  await event.save();
  res.redirect('/Event/AllData');
}

// delete


const deletedata = async (req, res) => {
    let { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect("/Event/AllData");
  };


  // edit 

  const editdata = async (req, res) => {
    let { id } = req.params;
    const event = await Event.findById(id);
  
    res.render("edit", { event });
  };


  
  const updatedata = async (req, res) => {
    let { id } = req.params;
    let listing = await Event.findByIdAndUpdate(id, req.body);
    console.log(listing);
    
    res.redirect(`/Event/AllData`);
  };


module.exports = { eventPage, creatEvent , allData , rsvpdata  , deletedata  , editdata , updatedata};



