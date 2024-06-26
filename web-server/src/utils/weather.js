const request=require('request')

const fetch_weather=(address, callback)=>{
    const weather_url='http://api.openweathermap.org/data/2.5/forecast?&q='+encodeURIComponent(address)+'&appid=c711fc8dd07409d39658340a5cdbc8c8&units=metric'
    request({url:weather_url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather API', undefined)
        }else if(response.body['message']==='city not found'){
            callback('City not found. Try another search', undefined)
        }else{
            const rain_probability=(response.body.list[0].pop)*100
            callback(undefined, 
                {   Date: response.body.list[0].dt_txt,
                    City: response.body.city.name+", "+response.body.city.country,
                    TempCelcius: response.body.list[0].main.temp,
                    Details: response.body.list[0].weather[0].description+ '. There is '+Math.round(rain_probability)+'% chance of rain'
                })
        }
    })
}


module.exports=fetch_weather