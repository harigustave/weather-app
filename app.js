const geocode=require('./utils/geocode')
const forecast=require('./utils/weather')

const location_input=process.argv[2]

if(!location_input){
    return console.log("Location not provided.")
}

geocode(location_input, (error, data)=>{
    if(error){
        return console.log(error)
    }

    forecast(data.City, (error,forecast_data)=>{
        if(error){
            return console.log(error)
        }
        console.log('City:', data.City)
        console.log('Temp(°C):', forecast_data.TempCelcius)
        console.log('Weather Details:',forecast_data.Details)
    })
})



