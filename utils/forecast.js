//http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query=http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query=37.8267,-122.4233&units=f&units=f'

const request = require("request")
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast=(latitude,longitude,callback)=>
{
    const url = 'http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query=http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query='+latitude+','+longitude
    // add &units=f to get the temperature in fahrenheit
    
    request({url,json: true},(error,{body}) => {
        if(error)
            {
                callback('Unable to connect to location services!',undefined)
            }
            else if(body.error)
            {
                callback('unable to find location . Try another search',undefined)
            }
            else
            {
                callback(undefined,body.current.weather_descriptions[0] + ' .It is currently '+ body.current.temperature + ' out it feels like ' +body.current.feelslike + ' degrees out ')
            }
    })
}


module.exports = forecast