
const yargs = require('yargs')

const weather = require('./weather')

const address =  process.argv[2]
address == undefined ? console.log('Please provide address'): weather.geoCode(address, weather.getWeatherInformation)
/*
yargs.command({
    command: 'location', 
    describe: 'Add location to get the weather information',
    builder: {
        name: {
            describe: 'Location name',
            demandOption: true,
            type: 'string'
        }
       
    },
    handler(argv){       
      weather.geoCode(argv.name, weather.getWeatherInformation)
    }
    
})




yargs.parse();

*/



