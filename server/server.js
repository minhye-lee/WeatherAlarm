const express = require('express')
const path = require('path')
const routes = require('./routes.js')
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/', routes)

app.use (express.static(path.join(__dirname, '..', 'public/')))
// const uri = 'https://api2.sktelecom.com/weather/current/minutely?&city=인천&county=남동구&village=간석동'
// const res2 = encodeURI(uri)
// let options = {
//
//     uri: res2,
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'Content-Type: application/json;charset=utf-8 Type: String',
//         'appKey': '8290775c-9cc8-4d95-a6d8-19a3805407ff',
//     },
//     json:true
//
// };
//
// request(options, (err, res, body) => {
//     console.log(body)
// })



app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});