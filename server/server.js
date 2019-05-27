const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

const routes = require('./routes.js')
app.use('/', routes)

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const os = require("os");
app.get("/api/getUsername", function(req, res, next){
    res.send({ username: os.userInfo().username });
});

app.use(express.static(path.join(__dirname, '..', 'public/')))




app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});