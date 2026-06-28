const data2= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
    text:"29",
    text2:"10",
    text3:"Despejado",
    lat: 40.4165,
    lon: -3.7026,

},{
    id: 2,
    title:"Mié",
    icon:"☀️",
    text:"27",
    text2:"10",
    text3:"Soleado",
     
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
    text:"27",
    text2:"9",
    text3:"Soleado",

},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
    text:"26",
    text2:"12",
    text3:"Soleado",
   
},
{
    id: 5,
    title:"Sab",
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
    
    
}
];

const weatherCodes = {
  0: "Despejado ☀️",
  1: "Principalmente despejado 🌤️",
  2: "Parcialmente nublado ☁️",
  3: "Nublado ☁️",
  45: "Niebla 🌫️",
  48: "Niebla con helada ❄️",
  51: "Llovizna ligera 🌧️",
  53: "Llovizna 🌧️",
  55: "Llovizna densa 🌧️",
  56: "Llovizna helada ligera ❄️",
  57: "Llovizna helada densa ❄️",
  61: "Lluvia ligera 🌧️",
  63: "Lluvia 🌧️",
  65: "Lluvia densa 🌧️",
  66: "Lluvia helada ligera ❄️",
  67: "Lluvia helada densa ❄️",
  71: "Precipitación de nieve ligera ❄️",
  73: "Precipitación de nieve ❄️",
  75: "Precipitación de nieve densa ❄️",
  77: "Granizo 🌪️",
};

const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];


const container2 = document.getElementById("container2")
const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[1]);
      for (let i = 0; i < pagina.length; i++) {

      const fecha = new Date(pagina[1].daily.time[i]);
      const diaSemana = diasSemana[fecha.getDay()];

      let numeroRedondo = Math.round(pagina[1].daily.temperature_2m_max[i]);
      let numeroRedondo2 = Math.round(pagina[1].daily.temperature_2m_min[i]);



container2.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${diaSemana}</h5>
            <p class="card-text icon-lg">${data2[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${numeroRedondo}°<span class="fs-6">/${numeroRedondo2}°</span></p>
            <p class="card-text small">${weatherCodes[pagina[1].daily.weather_code[i]]}</p>
          </div>
        </div>
      </div>

`

}
    });




