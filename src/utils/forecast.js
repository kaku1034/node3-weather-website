const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a26ee778e3ffc700b15f5c9d04536397&query=${latitude},${longitude}&units=f`
    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather server', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currentry ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast