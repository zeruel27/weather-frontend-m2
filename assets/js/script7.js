const data7= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
    text:"29",
    text2:"10",
    text3:"Muy soleado"

},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"27",
    text2:"10",
    text3:"Soleado"
    
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"27",
    text2:"9",
    text3:"Soleado"
    
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
    text:"26",
    text2:"12",
    text3:"Soleado"
    
},
{
    id: 5,
    title:"Sab",
    icon:"☀️",
    text:"23",
    text2:"10",
    text3:"despejado",
    
    
}
]


const container7 = document.getElementById("container7")

const url = `https://api.open-meteo.com/v1/forecast?latitude=52.5244,39.9075,40.7143,35.6895,48.8534&longitude=13.4105,116.3972,-74.006,139.6917,2.3488&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;

   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[1]);
      for (let i = 0; i < pagina.length; i++) {



container7.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${pagina[1].daily.time[i]}</h5>
            <p class="card-text icon-lg">${data7[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${pagina[1].daily.temperature_2m_max[i]}°<span class="fs-6">/${pagina[1].daily.temperature_2m_min[i]}°</span></p>
            <p class="card-text small">${data7[i].text3}</p>
          </div>
        </div>
      </div>

`

}

     }); 





