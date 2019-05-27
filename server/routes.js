const express = require('express')
const router = express.Router()
const request = require('request')

router.get("/api/getWeather", (req, res) => printWeather(req, res))

module.exports = router

const printWeather = (req, res) => {
    let options = {
        uri: "https://api2.sktelecom.com/weather/current/minutely?lat=36.1234&lon=127.1234",
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'appKey': '8290775c-9cc8-4d95-a6d8-19a3805407ff'
        },
        json:true

    }
    let result = request(options)
}