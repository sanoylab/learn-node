
const yargs = require('yargs')

const weather = require('./weather.js')

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
      weather.searchLocation(argv.name)
    }
    
})




yargs.parse();





