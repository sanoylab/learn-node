console.log('client javascript file loaded')

const form = document.querySelector('form');
const address = document.querySelector('input')

const locationName = document.querySelector('#locationName')
const temparature = document.querySelector('#temprature')
const feelslike =  document.querySelector('#feelslike')
const imageIcon = document.querySelector('#imgIcon')
const searchResult = document.querySelector('.info')

const currentLocation = document.querySelector('#currentBtn')

currentLocation.addEventListener('click', (e)=>{
    e.preventDefault();
    getLocation();
})

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
      const latitude = position.coords.latitude 
      const longitude = position.coords.longitude;
      featchData(longitude+","+latitude)
  }



searchResult.style.display = 'none'
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = address.value;
   
    featchData(location)

   
})


const featchData = (location)=>{
    console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            } else{
                searchResult.style.display = 'block'
                imageIcon.src=data.weatherIcon
                locationName.textContent = data.location
                temparature.textContent = `${data.temprature}˚ ${data.forcast}.`
                feelslike.textContent = `Feels Like: ${data.feelsLike}˚ Humidity: ${data.humidity}˚`

                fetch('https://api.unsplash.com/search/photos?client_id=ilTEI9kIDd6WytvhfVlaV_COEUcbJnxDh0kOQBJV_c8&page=1&query='+location).then((response)=>{
                    response.json().then((data)=>{
                        console.log(data.results[0].urls.full)
                        let backImage = data.results[0].urls.regular
                        document.body.style.backgroundImage = `url('${backImage}')`;
                        document.body.style.backgroundColor = "#f3f3f3";
                        document.body.style.backgroundSize = "100% 100%"
                        document.body.style.backgroundRepeat = "no-repeat"

                    })
                })
    
            }
            
        })
    })
}

