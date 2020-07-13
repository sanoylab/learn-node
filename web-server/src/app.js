const express =  require('express')
const path =  require('path')

const app = express()
const PORT = 3000
const publicDirectory = path.join(__dirname, '../public')


app.use(express.static(publicDirectory))
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