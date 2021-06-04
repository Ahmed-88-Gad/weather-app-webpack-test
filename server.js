var path = require('path')
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

// DEPENDENCIES
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// PORT NUMBER
const port = 8888;

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const server = app.listen(port, listening);
//const server = app.listen(port,()=>{console.log(`running on localhost:${port}`)});

// CALLBACK TO TEST THAT THE SERVER IS RUNNING
function listening(){
  console.log(`running on localhost: ${port}`);
  console.log("running.....");
}
//START ROUTES
app.get('/', function (req, res) {
  res.sendFile('D:/Computer Science/0web-projects/weather-app-webpack-test/dist/weather-app-bundle.html')
})
// GET method route
app.get('/all',function(req,res)
  {
    res.send(projectData);  
    projectData={}
  });

// POST method route
app.post('/add', function (req, res) {
  console.log(req.body);
  //newEntry = {
    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.content = req.body.content;
});
  //}
//projectData.push(newEntry);
//});
