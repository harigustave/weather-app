const request=require('request')

const geocode=(address, callback)=>{
    const location_url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGlndXN0YXZlMTIzIiwiYSI6ImNscnJ0ZDR2bTBkd2MybHBrbTNjZjlzZHcifQ.WPbLnISyfAJW-tidLdghuA&limit=1'
    request({url:location_url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location. Try another search',undefined)
        }
        else{
            const location_data=response.body.features;
            callback(undefined,{
                City: location_data[0].place_name,
                Longitude: location_data[0].center[0],
                Latitude: location_data[0].center[1] 
            })
        }
    })
}


module.exports= geocode