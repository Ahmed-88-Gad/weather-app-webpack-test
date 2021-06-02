/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// PERSONAL API KEY FOR OPENWEATHER API
let apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=c2ac8cebe9a2e0c7ec663f00467a6445';


// GET THE BUTTON
let generator = document.getElementById('generate');

// GET FEELING TEXT 
let feel = document.getElementById('feelings').value;

generator.addEventListener('click',run);
// MAIN FUNCTION
function run()
  {
    // GET ZIP CODE
    let zip = document.getElementById('zip').value;
    let fullApiURL = apiURL+zip+apiKey;
    let serverURL = '/add';
    console.log(serverURL);
    if (!zip)
      {
        alert('PLEASE ENTER ZIP CODE FIRST')
      }
    else
      {
        console.log(zip);
        console.log(fullApiURL);
        getApiData(fullApiURL)
        .then((data)=>{console.log(data);})
        .then(function(){
            let dataObject = {date:d,temp:data.main.temp,content:feel}
            console.log(dataObject);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        //postData(serverURL,);
        // updateUI();
      }
}

async function getApiData(url)
{
  fetch(url)
    .then(function(respons){
      let data = respons.json();
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.log('Fetch problem: ' + error.message);
    })
}

//async function postData()