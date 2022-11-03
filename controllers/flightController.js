const {Flight} = require('../models/flight');
const { randomBytes } = require('crypto');


const getAllFlights = (req, res) => {
    res.status(200).send(Flight);
}

const getSingleFlight = (req, res) => {
    const id = req.params.id;
    if(Flight.length > 0) {
        Flight.forEach(flight => {
            if(flight.id === id){
                res.status(200).send(flight);
            }
        });
    } else {
        res.status(200).send({success: true, message: "Flight not found"});
    }
}

const updateFlight = (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < Flight.length; i++) {
        if(Flight[i].id === id){
            Flight[i].title = req.body.title ? req.body.title : Flight[i].title;
            Flight[i].time = req.body.time ? req.body.time : Flight[i].time;
            Flight[i].price = req.body.price ? req.body.price : Flight[i].price;
            Flight[i].date = req.body.date ? req.body.date : Flight[i].date;
        }
    }
    res.status(200).send({success: true, message: "Flight updated sucessfully"});
}

const bookFlight = (req, res) => {
    const id = randomBytes(5).toString('hex');
    const data = {
        "id": id,
        "title": req.body.title,
        "time": req.body.time,
        "price": req.body.price,
        "date": req.body.date
    }
    Flight.push(data);
    res.status(201).send({success: true, message: "Flight booked successfully"});
}

const deleteFlight = (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < Flight.length; i++) {
    if(Flight[i].id === id){
        Flight.splice(i, 1);
    }
  }
  res.status(200).send({success: true, message: `Flight deleted successfully`})
}




module.exports = {
    getAllFlights,
    getSingleFlight,
    bookFlight,
    updateFlight,
    deleteFlight
}


