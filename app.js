// const request=require('request');
const geocode=require('./utils/geocode')


// const weather_url ="http://api.openweathermap.org/data/2.5/forecast?q=Kampala&appid=c711fc8dd07409d39658340a5cdbc8c8&units=metric";
// const location_url= "https://api.mapbox.com/geocoding/v5/mapbox.places/Kigali.json?access_token=pk.eyJ1IjoiaGlndXN0YXZlMTIzIiwiYSI6ImNscnJ0ZDR2bTBkd2MybHBrbTNjZjlzZHcifQ.WPbLnISyfAJW-tidLdghuA&limit=1"

// request({url:weather_url, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else{
//         const items=response.body.list;
//         console.log("Current Weather in "+response.body.city.name+", "+response.body.city.country)
//         console.log("*****************************")
//         console.log("Temperature(celcius): "+items[0].main.temp)
//         console.log("Rain: "+items[0].weather[0].description)
//     }
// })

// request({url: location_url, json:true}, (error, response)=>{
//     const location_data=response.body.features;
//     console.log("City:"+location_data[0].text);
//     console.log("Longitude:"+location_data[0].center[0]+" \nLatitude:"+location_data[0].center[1]);
// })


geocode('Boston', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})