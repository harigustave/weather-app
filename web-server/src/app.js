const path=require('path')
const express = require('express')
const hbs=require('hbs')

const app = express()
const port = 4000

const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index', {
        title:'Home Page',
        name:'Gustave Harintwali'
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title:'About Us',
        name:'Gustave Harintwali'
    })
})

app.get('/weather', (req,res)=>{
    res.render('weather',{
        title:'Current Weather',
        name:'Gustave Harintwali'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Gustave Harintwali'
    })
})

app.listen(port, ()=>{
    console.log(`Server Listen To Port ${port}`)
})