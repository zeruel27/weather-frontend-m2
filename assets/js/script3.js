const data3= [

{
    id: 1,
    title:"Mar",
    icon:"☁️",
    text:"29",
    text2:"10",
    text3:"nublado",
    lat:51.5085,
    lon:-0.1257,


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
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
    
}
]

const container3 = document.getElementById("container3")

const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[2]);
      for (let i = 0; i < pagina.length; i++) {


container3.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${data3[i].title}</h5>
            <p class="card-text icon-lg">${data3[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${pagina[2].daily.temperature_2m_max[i]}°<span class="fs-6">/${pagina[2].daily.temperature_2m_min[i]}°</span></p>
            <p class="card-text small">${data3[i].text3}</p>
          </div>
        </div>
      </div>

`
}
    });
