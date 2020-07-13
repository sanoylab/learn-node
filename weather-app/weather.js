
const request = require('postman-request')
const chalk = require('chalk')

const geoCode = (address,populateWeather)=>{

        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXhwZXJ0c2Fub3kiLCJhIjoiY2s4OWNvYWszMDJ1dTNtbGZ5Mzc0eW13ZiJ9.mLxV7ML8FAXESGJGh3EXpQ&limit=1'
        console.log(chalk.black.bgGreen(` ----  SEARCHING WEATHER FOR ${address.toUpperCase()} ---- `))
        request({url: url, json: true}, (err, response)=>{
        if(err) {
            populateWeather(chalk.bgRed('Unable to connect to the location service'))
        } else if(response.body.features.length===0){
            populateWeather(chalk.bgRed('Unable to read the location'))
        } else {
            const latlong = response.body.features[0].center.reverse().toString()
            const placeName = response.body.features[0].place_name;
            populateWeather(undefined, {
                latlong,
                placeName
            })
        }
    })
}

const getWeatherInformation = (error, {latlong, placeName})=>{
    if(error){
        console.log(error)
    } else{
        const url = 'http://api.weatherstack.com/current?units=m&access_key=5ded8a7717f775725e94001ec1f536dd&query='+latlong
        request({url: url, json: true}, (err, res)=>{
            if(err) {
                console.log(chalk.bgRed('Unable to connect to weather service'))
            } else if(res.error){
                console.log(chalk.bgRed('Unable to read the weather'))
            }
            else {
                console.log(chalk.black.bgGreen(` ${placeName} - ${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degress out there. It feels like ${res.body.current.feelslike} degress. `))
            }   
            
        })

    }

}


module.exports = {geoCode, getWeatherInformation}