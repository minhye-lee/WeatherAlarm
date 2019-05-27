const express = require('express')
const router = express.Router()

router.get("/api/getWeather", (req, res) => printWeather(req, res))

module.exports = router

const printWeather = (req, res) => {
    res.send('hihihi')
}