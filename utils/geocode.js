const request = require("request")
const geocode=(address,callback)=>{
    const url_geocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGVla3NoYXIiLCJhIjoiY2tncXhlY29wMDA5NjJ4cnM4ODN2dWk0byJ9.xBFYRnpJKfIKBaDQVqPFMw&limit=1'
    request({url:url_geocoding,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.features.length === 0)
        {
            callback('unable to find location . Try another search',undefined)
        }
        else
        {
            callback(undefined,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name

            })
        }
    }
    )
}



module.exports= geocode