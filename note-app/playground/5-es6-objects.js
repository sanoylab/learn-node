const name = 'Yonas'

const userAge = 35


const user = {
    name,
    age: userAge,
    location: 'London, ON'
}
const product = {
    label: 'Read notebook',
    price: 3,
    stock: 30,
    salePrice: undefined
}

const {price} = product
console.log(price+1)


const express = require('express')

const app = express()
const PORT = 3000
app.get('/',(req, res)=>{
  res.send('Hello world')
})

app.listen(PORT, ()=>{
    console.log('Server is up and running..')
})