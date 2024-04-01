const path=require('path')
const express = require('express')
const hbs=require('hbs')
const forecast=require('./utils/weather')

const app = express()
const port = process.env.PORT || 4000    //Heroku process will provide a dynamic port OR use 4000 if not

const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index', {
        title:'WeatherBooth',
        name:'Gustave Harintwali'
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title:'WeatherBooth',
        name:'Gustave Harintwali'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'WeatherBooth',
        content:'Contact US',
        name:'Gustave Harintwali'
    })
})

//This endpoint is the one to be consumed by the form in js/app.js
app.get('/weather', (req,res)=>{

    if(!req.query.address){
            return res.send({
                error: 'You must provide a city to search'
                })
        }

    forecast(req.query.address, (error,forecast_data)=>{
        if(error){
            return res.send({
                error
            })
        }

        res.send({
            'Date': forecast_data.Date,
            'Address':forecast_data.City,
            'WeatherDetails': forecast_data.TempCelcius+'°C, '+forecast_data.Details
        })
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        title:'WeatherBooth',
        content:'404 Page Not Found',
        name:'Gustave Harintwali'
    })
})

app.listen(port, ()=>{
    console.log(`Server Listen To Port ${port}`)
})