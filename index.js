const express = require('express')

const PORT = process.env.PORT ?? 5050
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const vinnytsia = [
    {
        temp: 100,
        hund: 6,
        sunrise: 6000,
    }
]
const london = [
    {
        temp: 100,
        hund: 63,
        sunrise: 5000,
    }
]
const paris = [
    {
        temp: 100,
        hund: 62,
        sunrise: 7000,
    }
]
app.get('/vinnytsia',(req,res)=>res.json(vinnytsia))
app.get('/london',(req,res)=>res.json(london))
app.get('/paris',(req,res)=>res.json(paris))

app.listen(PORT, () => {
    console.log (`Server can been started on port ${PORT}...`)
})