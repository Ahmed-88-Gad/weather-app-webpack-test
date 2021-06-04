/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ (d.getMonth()+1) + '.'+ d.getFullYear();

// PERSONAL API KEY FOR OPENWEATHER API
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
const apiKey = '&appid=c2ac8cebe9a2e0c7ec663f00467a6445';


let feel = document.getElementById('feelings').value;

// GET THE BUTTON
let generator = document.getElementById('generate');



generator.addEventListener('click',run);
// MAIN FUNCTION
function run()
  {
    // GET ZIP CODE
    let zip = document.getElementById('zip').value;
    // GET FEELING TEXT
    let feel = document.getElementById('feelings').value;
    // COMPINE API URL 
    let fullApiURL = apiURL+zip+apiKey;
    // SETING THE SERVER URL
    let serverURLpost = '/add';
    let serverURLget = 'all';
    
    if (!zip)
      {
        alert('PLEASE ENTER ZIP CODE FIRST')
      }
    else
      {
        console.log(zip);
        console.log(fullApiURL);
        console.log(feel);
        console.log(serverURLpost);
        getApiData(fullApiURL)
          .then(function(data){
            console.log(data);
            let dataObject = {
              date :newDate,
              temp:data.main.temp,
              content:'I feel '+feel
              };
              console.log(dataObject);
          postData(serverURLpost,dataObject);
          updateUI(serverURLget)
          .then(function(newData){
            console.log(newData);
            let date = newData.date;
            let temp = newData.temp;
            let feelings = newData.content;
            console.log(date);
            console.log(temp);
            console.log(feelings);
            document.getElementById('date').innerHTML = `Today: ${date}`;
            document.getElementById('temp').innerHTML = `temperatuer today: ${temp}  c`;
            document.getElementById('content').innerHTML = `${feelings}`;
          });
      });
      }
}

async function getApiData(url)
{
  let respons = await fetch(url);
  try
  {
  let data = await respons.json();
  console.log(data);
  return data;
  }
  catch(error){console.log('error',error);}
}

async function postData(Surl,DO)
{
  console.log(Surl);
  console.log(DO);
  let respons = await fetch(Surl,
    {
      method:'post',
      credentials:'same-origin',
      headers:
        {
          'content-type': 'application/json'
        },
      body:JSON.stringify(DO) //CREAT JSON STRING FROM A JAVASCRIPT OBJECT.
    });
}

async function updateUI(Surl)
{
  let respons = await fetch(Surl);
  try
  {
    let newData = await respons.json();
    console.log(newData);
    let date = newData.date;
    let temp = newData.temp;
    let feelings = newData.content;
    console.log(date);
    console.log(temp);
    console.log(feelings);
    // document.getElementById('date').innerHTML = `Today: ${date}`;
    // document.getElementById('temp').innerHTML = `temperatuer :${temp}`;
    // document.getElementById('content').innerHTML = `${feelings}`;
    return newData;

  }
  catch(error){console.log('error',error);}
}
// export {app}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// import {app} from "./website/app.js"
const app =__webpack_require__(1)
console.log('hi i am here');
})();

/******/ })()
;