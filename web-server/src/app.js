const express =  require('express')

const app = express()
const PORT = 3000

app.get('', (req, res)=>{
    res.send('<h1>Hello Yonas</h1><br> Dont worry you can make it!')
})

app.listen(PORT, ()=>{
    console.log('Server started on port 3000')
})