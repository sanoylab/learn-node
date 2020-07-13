const http =  require('http')
const url = 'http://api.weatherstack.com/current?units=m&access_key=5ded8a7717f775725e94001ec1f536dd&query=new york'

const request = http.request(url, (response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        data = chunk.toString()        
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log(error)
})
request.end()

