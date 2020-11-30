/*const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query=http://api.weatherstack.com/current?access_key=ee288203c58297e8640119e41bb4e20f&query=37.8267,-122.4233&units=f&units=f'
// customize the units by adding a new query units = f
request({url : url, json : true},(error,response)=>{
   // const data = JSON.parse(response.body)
    //console.log(data.current)
   // console.log(response.body.current)

   if(error){
       console.log('unable to connect to weather service')
   }
   else if(!response.body)
   {
       console.log('unable to find location')
   }

   else{
    console.log(response.body.current.weather_descriptions[0] + ' .It is currently '+ response.body.current.temperature + ' out it feels like ' +response.body.current.feelslike + ' degrees out ')

   }

})


const url_geocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVla3NoYXIiLCJhIjoiY2tncXhlY29wMDA5NjJ4cnM4ODN2dWk0byJ9.xBFYRnpJKfIKBaDQVqPFMw&limit=1'
request({
    url: url_geocoding, json:true
},
(error,response)=>{
    if(error){
        console.log('unable to connect to geocoding website')
    }
    else if(!response.body.features)
    {
        console.log('unable to find location')
    }
    else{
const lat=response.body.features[0].center[1]
const lon = response.body.features[0].center[0]
console.log(lat,lon)
    }

}
)*/

const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")



const address = process.argv[2]
if(!address)
{
    console.log("please provide the address .")
}
else
{
geocode(address,(error,{location , longitude, latitude} = {}) => {
    if(error){
        return console.log(error)
  }

    else
    {
        /*console.log("error : ",error)
        console.log("Data : ", data)*/
        forecast(latitude,longitude, (forecast_error, forecast_data) => {
        if(forecast_error)
        {
            return console.log(forecast_error)
        }
        console.log(location)
        console.log(forecast_data)
        console.log(latitude + " " + longitude)
      })
    }
})

}

