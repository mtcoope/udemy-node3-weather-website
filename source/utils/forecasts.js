
const request = require('request')

const forecasts = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/f23c14f59ec7ee5661b5985fb2e6e45d/' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('No location found!')
        } else {
            const responseMessage = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + 
            body.currently.precipProbability + '% change of rain' + '. The high for today is ' + body.daily.data[0].temperatureHigh + 
            '. The low is ' + body.daily.data[0].temperatureLow + '.'
            callback(undefined, responseMessage)
        }
    })
}

module.exports = forecasts