const data6= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
<<<<<<< HEAD
    text:"29",
    text2:"10",
    text3:"Muy soleado"

=======
    text:"20",
    text2:"8",
    text3:"Muy soleado"


>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
},{
    id: 2,
    title:"Mié",
    icon:"☀️",
<<<<<<< HEAD
    text:"27",
    text2:"10",
=======
    text:"19",
    text2:"9",
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
<<<<<<< HEAD
    text:"27",
    text2:"9",
=======
    text:"21",
    text2:"14",
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
    text3:"Soleado"
    
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
<<<<<<< HEAD
    text:"26",
=======
    text:"23",
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 5,
    title:"Sab",
    icon:"⛅",
<<<<<<< HEAD
    text:"23",
    text2:"10",
=======
    text:"28",
    text2:"15",
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
    text3:"Nublado",
    
    
}
]


const container6 = document.getElementById("container6")

<<<<<<< HEAD
const url = `https://api.open-meteo.com/v1/forecast?latitude=52.5244,39.9075,40.7143,35.6895,48.8534&longitude=13.4105,116.3972,-74.006,139.6917,2.3488&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;

   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[0]);
      for (let i = 0; i < pagina.length; i++) {
=======
for (let i = 0; i < data6.length; i++){
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748


container6.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
<<<<<<< HEAD
            <h5 class="card-title">${pagina[0].daily.time[i]}</h5>
            <p class="card-text icon-lg">${data6[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${pagina[0].daily.temperature_2m_max[i]}°<span class="fs-6">/${pagina[0].daily.temperature_2m_min[i]}°</span></p>
=======
            <h5 class="card-title">${data6[i].title}</h5>
            <p class="card-text icon-lg">${data6[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data6[i].text}°<span class="fs-6">/${data6[i].text2}°</span></p>
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
            <p class="card-text small">${data6[i].text3}</p>
          </div>
        </div>
      </div>

`

}

<<<<<<< HEAD
    }); 
=======


>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748




