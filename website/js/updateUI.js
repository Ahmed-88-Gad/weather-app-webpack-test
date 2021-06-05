// async function updateUI(Surl)
// {
//   let respons = await fetch(Surl);
//   try
//   {
//     let newData = await respons.json();
//     console.log(newData);
//     let date = newData.date;
//     let temp = newData.temp;
//     let feelings = newData.content;
//     console.log(date);
//     console.log(temp);
//     console.log(feelings);
//     // document.getElementById('date').innerHTML = `Today: ${date}`;
//     // document.getElementById('temp').innerHTML = `temperatuer :${temp}`;
//     // document.getElementById('content').innerHTML = `${feelings}`;
//     return newData;

//   }
//   catch(error){console.log('error',error);}
// }
// exports.updateUI=updateUI;