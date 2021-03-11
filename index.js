const express = require('express')

const cors = require ('cors')
const PORT = 5050
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,origin,accept');
    next();
})
const vinnytsia = [
    {
        "temp":271.04,
        "humidity":59,
        "timezone":7200,
        "name":"Vinnytsia",
    }
]
const london = [
    {

        "temp": 280.32,
        "humidity": 81,
        "timezone":0,
        "name": "London",

    }
]
const paris = [
    {
        "temp":286.05,
        "humidity":76,
        "timezone":3600,
        "name":"Paris",

    }
]
app.get('/Vinnytsia',(req,res)=>res.json(vinnytsia))
app.get('/London',(req,res)=>res.json(london))
app.get('/Paris',(req,res)=>res.json(paris))



app.listen(PORT, () => {
    console.log (`Server can been started on port ${PORT}...`)
})