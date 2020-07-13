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