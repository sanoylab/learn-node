const request = require('postman-request')

const forcast = (latlong, placeName, callback)=>{
  
        const url = 'http://api.weatherstack.com/current?units=m&access_key=5ded8a7717f775725e94001ec1f536dd&query='+latlong
        request({url: url, json: true}, (err, res)=>{
            
            if(err) {
                callback('Unable to connect to weather service')
            } else if(res.error){
                callback('Unable to read the weather')
            }
            else {
                callback(undefined,{
                    temprature : res.body.current.temperature,
                    description: res.body.current.weather_descriptions[0],
                    feelsLike: res.body.current.feelslike,
                    weatherIcon: res.body.current.weather_icons,
                    humidity: res.body.current.humidity,
                    location: placeName

                }) 
            }   
            
        })

    

}

module.exports = forcast