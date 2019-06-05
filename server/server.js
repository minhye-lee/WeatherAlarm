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

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});