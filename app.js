const express = require("express")
const nodemon = require("nodemon")
const bodyP = require("body-parser")
const axios = require("axios")
const mongoose = require("mongoose")
require("dotenv").config();
// const moment = require("moment")
const app = express()

// app.use(express.static("public"));
app.use(bodyP.urlencoded({
  extended: true
}));

////// 👇 this is for stocks (open, close, volume etc. )    ///////////////////

// let stock = axios.get(`https://api.polygon.io/v1/open-close/AAPL/2021-12-10?adjusted=true&apiKey=${process.env.APIKEY}`)
// .then(response => console.log(response.data))

/////// 👇 this is for stocks market holidays //////////////
// let holidays = axios.get(`https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${process.env.APIKEY}`).then(res => console.log(res.data))

/////////// 👇 this is for options (open, close, volume etc.) /////////////////////////
// let options = axios.get(`https://api.polygon.io/v1/open-close/O:TSLA210903C00700000/2021-07-22?adjusted=true&apiKey=${process.env.APIKEY}`)
// .then(response => console.log(response.data))

app.get("/", (req, res) => {
  axios.get(`https://api.polygon.io/v1/open-close/O:TSLA210903C00700000/2021-07-22?adjusted=true&apiKey=${process.env.APIKEY}`)
  .then(response => res.send(response.data)).then(response => console.log(response.data))
})
app.get("/holiday", (req, res) => {
  axios.get(`https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${process.env.APIKEY}`).then(reos => res.send(reos.data))
})
app.get("/stock", (req, res) => {
  axios.get(`https://api.polygon.io/v1/open-close/AAPL/2021-12-10?adjusted=true&apiKey=${process.env.APIKEY}`)
  .then(response => res.send(response.data))
})
app.listen("3000")
