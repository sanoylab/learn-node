const express =  require('express')

const app = express()

app.get('', (req, res)=>{
    res.send('<h1>Hello Yonas</h1><br> Dont worry you can make it!')
})

app.listen(4000, ()=>{
    console.log('Server started on port 3000')
})