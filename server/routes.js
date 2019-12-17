const express = require('express')
const router = express.Router()
const request = require('request')
var count = 0
router.post("/api/getInfomation", (req, res) => getInfomation(req, res))

module.exports = router

const getInfomation = async (req, res) => {
    const city = req.body.city
    const county = req.body.county
    const village = req.body.village

    const api_weather_request = await requestWeather(city, county, village)
    console.log(count)
    count += 1

    const weather_to_JSON = JSON.parse(api_weather_request)
    const weather = weather_to_JSON["weather"]["minutely"][0]

    const temperature = weather["temperature"]
    const rain = weather["rain"]["sinceOntime"]
    const wind = weather["wind"]["wspd"]
    res.send({
        temperature : temperature,
        rain : rain,
        wind : wind,
    })
}

const requestWeather = (city, county, village) => new Promise((resolve => {
    const uri = encodeURI(`https://api2.sktelecom.com/weather/current/minutely?city=${city}&county=${county}&village=${village}`)
    const options = {
        uri: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'appKey': ''
        },
    }
    request(options, (err, res, body) => {
        if (err)
            console.log(err)
        else {
            const jsonData = JSON.parse(body)
            console.log(jsonData)
            resolve(body)
        }
    })
}))
