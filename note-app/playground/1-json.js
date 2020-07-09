const fs = require('fs')
const path = require('path')

/*
const book = {
    title: 'Family',
    author: 'Yonas'
}
*/


/*

const jsonBook = JSON.stringify(book);

fs.writeFile(path.join(__dirname,  '1-json.json'), jsonBook, (err)=>{
    if(err) throw err
    console.log('Json file is created')
})

*/

//READING THE JSON
/*
fs.readFile(path.join(__dirname, '1-json.json'),(err, data)=>{
    if(err) throw err;
    console.log(JSON.parse(data.toString()))
    console.log(data.toString())
    console.log(JSON.parse(data))
})

*/

fs.readFile(path.join(__dirname,'1-json.json'), (err, data)=>{
    if(err) throw err;    
    const user = JSON.parse(data);
    user.name = 'Yonas';
    user.age = 35;
    user.planet = 'Earth';
    fs.writeFile(path.join(__dirname, '1-json.json'), JSON.stringify(user), (err)=>{
        if(err) throw err;
        console.log('User information is updated.')
    });
});



