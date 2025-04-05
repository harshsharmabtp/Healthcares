const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const viewpath = path.join(__dirname,'views')
const partialspath = path.join(viewpath,'partials')
require('dotenv').config()
require('./utils/db')
const cors = require('cors');
const router = require('./Router/route');


app.use(cors());
app.use(express.json())
app.use(router)

app.set('view engine','hbs')
app.set('views',viewpath)

hbs.registerPartials(partialspath)

app.use(express.static(viewpath))


app.get('/',(req,res)=>{

    res.render('register')
})

app.get('/home',(req,res)=>{

    res.render('home')
})

app.get('/about',(req,res)=>{

    res.render('about')
})

app.get('/services',(req,res)=>{
    
    res.render('services')
})

app.get('/appointment',(req,res)=>{

    res.render('appointment')
})

const PORT = 3000

app.listen(PORT,(req,res)=>{

    console.log(`Server Is Running At Port = ${PORT}`)
})


