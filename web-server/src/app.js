const express =  require('express')
const path =  require('path')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 3000


//Define path for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Welcome to Weather App',
        author: 'Yonas Yeneneh'
    })
})
app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
         author: 'Yonas Yeneneh'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        body: 'This is a text for the help page'
    })
})

app.get('*', (req, res)=>{
    res.render('404')
})
/*
app.get('/', (req, res)=>{ 
   res.send('<h1>Home</h1>')
})
app.get('/help', (req, res)=>{
    res.send('<h1>Help</h1>')
})
app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>')
})

*/
app.get('/json', (req, res)=>{
    res.send([{
        name: 'Yonas', 
        age: 35,
        children: 2,
        married: 1
    }, {
        name: 'Lideya', 
        age: 28,
        children: 2,
        married: 1
    }])
})

app.get('/weather', (req, res)=>{
    res.send([{
        location: 'New York', 
        forcast: 27
    },{
        location: 'London, ON', 
        forcast: 29
    }])
})




app.listen(PORT, ()=>{
    console.log('Server started on port 3000')
})