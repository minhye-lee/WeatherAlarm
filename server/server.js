const express = require('express')
const path = require('path')
const os = require("os")
const request = require('request')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, '..', 'public/')))

// if you need api routes add them here
app.get("/api/getUsername", function(req, res, next){
    res.send({ username: os.userInfo().username });
});

let options = {
    uri: "https://api2.sktelecom.com/weather/current/minutely?lat=36.1234&lon=127.1234",
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'appKey': '8290775c-9cc8-4d95-a6d8-19a3805407ff'
    },
    json:true

};

request(options, (err, res, body) => {
    console.log(body.weather["minutely"])
})

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});