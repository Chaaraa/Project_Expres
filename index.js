const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const mongoClient = require ('mongodb').MongoClient
const config = require ('config')


// mongoose.connect('mongodb://localhost/weather')

const cors = require ('cors')
const PORT = 5000
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,origin,accept');
    next();
})
let db;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


// async function start(){
//     try{
//         await mongoose.connect('mongodb+srv://alina:12345@cluster0.tertj.mongodb.net/todos',{
//             useNewUrlParser: true,
//             useFindAndModify: false
//         })
//         app.listen(PORT, () => {
//             console.log (`Server can been started on port ${PORT}...`)
//         })
//     }catch(e){
//         console.log(e)
//     }
// }
//
// start()

// const vinnytsia = [
//     {
//         "temp":271.04,
//         "humidity":59,
//         "timezone":7200,
//         "name":"Vinnytsia",
//     }
// ]
// const london = [
//     {
//
//         "temp": 280.32,
//         "humidity": 81,
//         "timezone":0,
//         "name": "London",
//
//     }
// ]
// const paris = [
//     {
//         "temp":286.05,
//         "humidity":76,
//         "timezone":3600,
//         "name":"Paris",
//
//     }
// ]
// app.get('/Vinnytsia',(req,res)=>res.json(vinnytsia))
// app.get('/London',(req,res)=>res.json(london))
// app.get('/Paris',(req,res)=>res.json(paris))

app.listen(PORT, ()=> {
    console.log("Server has been started...")
})

app.get("/paris", function(req, res){
    app.post('/paris',function (res,req){
        const paris =[];
        db.collection('paris').insert(paris,function (err,res){
            if(err){
                console.log(err)
                return res.sendStatus(500)
            }
            res.send(paris)
        })
    })
    mongoClient.connect('mongodb+srv://alina:12345@cluster0.tertj.mongodb.net',function (err,database){
        if(err){
            return console.log(err)
        }
        db = database
        app.locals.collection = database.db("weather").collection("paris");
        const collection = app.locals.collection;
        collection.find().toArray(function(err, docs){
            if(err) return console.log(err);
            res.send(docs)
        });
    })
});

app.get("/london", function(req, res){
    app.post('/london',function (res,req){
        const london =[];
        db.collection('london').insert(london,function (err,res){
            if(err){
                console.log(err)
                return res.sendStatus(500)
            }
            res.send(london)
        })
    })
    mongoClient.connect('mongodb+srv://alina:12345@cluster0.tertj.mongodb.net',function (err,database){
        if(err){
            return console.log(err)
        }
        db = database
        app.locals.collection = database.db("weather").collection("london");
        const collection = app.locals.collection;
        collection.find().toArray(function(err, docs){
            if(err) return console.log(err);
            res.send(docs)
        });
    })
});

app.get("/vinnytsia", function(req, res){
    app.post('/vinnytsia',function (res,req){
        const vinnytsia =[];
        db.collection('vinnytsia').insert(vinnytsia,function (err,res){
            if(err){
                console.log(err)
                return res.sendStatus(500)
            }
            res.send(vinnytsia)
        })
    })
    mongoClient.connect('mongodb+srv://alina:12345@cluster0.tertj.mongodb.net',function (err,database){
        if(err){
            return console.log(err)
        }
        db = database
        app.locals.collection = database.db("weather").collection("vinnytsia");
        const collection = app.locals.collection;
        collection.find().toArray(function(err, docs){
            if(err) return console.log(err);
            res.send(docs)
        });
    })
});
