const express = require('express')
const router = express.Router()
const request = require('request')

router.post("/api/getWeather", (req, res) => getWeather(req, res))

module.exports = router

const requestWeather = (city, county, village) => new Promise((resolve => {
    const uri = encodeURI(`https://api2.sktelecom.com/weather/current/minutely?city=${city}&county=${county}&village=${village}`)
    const options = {
        uri: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'appKey': '8290775c-9cc8-4d95-a6d8-19a3805407ff'
        },
    }
    request(options, (err, res, body) => {
        if (err)
            console.log(err)
        else {
            console.log('request')
            console.log(body)
            resolve(body)
        }
    })
}))

const getWeather = async (req, res) => {
    const city = req.body.city
    const county = req.body.county
    const village = req.body.village
    const api_result = await requestWeather(city, county, village)
    const weather = JSON.parse(api_result)
    console.log('req.body', req.body)
    res.send({result : weather.weather.minutely[0]})
}
