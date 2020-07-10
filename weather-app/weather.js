
const request = require('postman-request')
const chalk = require('chalk')

const searchLocation = (location)=>{
        console.log(chalk.black.bgGreen(` ----  SEARCHING WEATHER FOR ${location.toUpperCase()} ---- `))
        request({url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoiZXhwZXJ0c2Fub3kiLCJhIjoiY2s4OWNvYWszMDJ1dTNtbGZ5Mzc0eW13ZiJ9.mLxV7ML8FAXESGJGh3EXpQ&limit=1', json: true}, 
        (err, response)=>{
        if(err) {
            console.log(chalk.bgRed('Unable to connect to the location api'))
        } else if(response.error){
            console.log(chalk.bgRed('Unable to read the location'))
        } else {
            const latlong = response.body.features[0].center.reverse().toString()
            //console.log(latlong)   
    
            request({url: 'http://api.weatherstack.com/current?units=m&access_key=5ded8a7717f775725e94001ec1f536dd&query='+latlong, json: true}, 
            (err, res)=>{
                if(err) {
                    console.log(chalk.bgRed('Unable to connect to weather api'))
                } else if(res.error){
                    console.log(chalk.bgRed('Unable to read the weather'))
                }
                else {
                    console.log(chalk.black.bgGreen(` ${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degress out there. It feels like ${res.body.current.feelslike} degress. `))
                }   
                
            })

        }
    })
}


module.exports = {searchLocation}