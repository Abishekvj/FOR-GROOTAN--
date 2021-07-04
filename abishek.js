const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
var cors = require('cors')



// create express app
const app = express();
app.use(cors({origin: 'http://127.0.0.1'}));
var data;

try {
  data = fs.readFileSync('person.json', 'utf8')
  //onsole.log(data)
} catch (err) {
  console.error(err)
}

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/info', (req, res) => {
    console.log(data)
    res.json({"data":data});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});