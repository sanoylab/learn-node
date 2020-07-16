const request = require('postman-request')

const geocode = (address, forcastData)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXhwZXJ0c2Fub3kiLCJhIjoiY2s4OWNvYWszMDJ1dTNtbGZ5Mzc0eW13ZiJ9.mLxV7ML8FAXESGJGh3EXpQ&limit=1'
     
    request({url: url, json: true}, (err, response)=>{
    if(err) {
        forcastData('Unable to connect to the location service')
    } else if(response.body.features.length===0){
        forcastData('Unable to read the location')
    } else {
        const latlong = response.body.features[0].center.reverse().toString()
        const placeName = response.body.features[0].place_name;
      
        forcastData(undefined, {
            latlong,
            placeName
        })
    }
})


}

module.exports = geocode