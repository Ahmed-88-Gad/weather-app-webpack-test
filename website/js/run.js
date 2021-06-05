// const getApiData=require("./getApiData.js");
// const postData=require("./postData.js");
// const updateUI=require("./updateUI.js");
// MAIN FUNCTION
// function run()
//   {
//     // GET ZIP CODE
//     let zip = document.getElementById('zip').value;
//     // GET FEELING TEXT
//     let feel = document.getElementById('feelings').value;
//     // COMPINE API URL 
//     let fullApiURL = apiURL+zip+apiKey;
//     // SETING THE SERVER URL
//     let serverURLpost = '/add';
//     let serverURLget = 'all';
    
//     if (!zip)
//       {
//         alert('PLEASE ENTER ZIP CODE FIRST')
//       }
//     else
//       {
//         console.log(zip);
//         console.log(fullApiURL);
//         console.log(feel);
//         console.log(serverURLpost);
//         getApiData(fullApiURL)
//           .then(function(data){
//             console.log(data);
//             let dataObject = {
//               date :newDate,
//               temp:data.main.temp,
//               content:'I feel '+feel
//               };
//               console.log(dataObject);
//           postData(serverURLpost,dataObject);
//           updateUI(serverURLget)
//           .then(function(newData){
//             console.log(newData);
//             let date = newData.date;
//             let temp = newData.temp;
//             let feelings = newData.content;
//             console.log(date);
//             console.log(temp);
//             console.log(feelings);
//             document.getElementById('date').innerHTML = `Today: ${date}`;
//             document.getElementById('temp').innerHTML = `temperatuer today: ${temp}  c`;
//             document.getElementById('content').innerHTML = `${feelings}`;
//           });
//       });
//       }
// }
// exports.run=run;