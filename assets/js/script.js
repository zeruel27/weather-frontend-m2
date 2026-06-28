const data = [
  {
    id: 1,
    title: "Santiago",
    text: "19",
    text2: "2",
    url: "detalles.html",
    
  },
  {
    id: 2,
    title: "Madrid",
    text: "12",
    text2: "3",
    url: "detalles 2.html",

  },
  {
    id: 3,
    title: "Londres",
    text: "2",
    text2: "8",
    url: "detalles 3.html",
   
  },
  {
    id: 4,
    title: "Moscu",
    text: "2",
    text2: "6",

  },
  {
    id: 5,
    title: "Buenos aires",
    text: "18",
    text2: "9",
    
  },
];


const data2= [
{
    id: 6,
    title:"Berlin",
    text:"19",
    text2:"10",
    url:"detalles 6.html",
    
    
},

{
    id: 7,
    title:"Beijing",
    text:"18",
    text2:"3",
    url:"detalles 7.html",
    
    
},

{
    id: 8,
    title:"Nueva york",
    text:"31",
    text2:"17",
    
    
    
},

{
    id: 9,
    title:"Tokyo",
    text:"17",
    text2:"4",
    
    
},

{
    id: 10,
    title:"Paris",
    text:"14",
    text2:"6",
    
    
},
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
  77: "Granizo 🌪️"
};

const container = document.getElementById("container");

const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina);
      for (let i = 0; i < pagina.length; i++) {
      
let numeroRedondo=Math.round(pagina[i].current.temperature_2m);
let numeroRedondo2=Math.round(pagina[i].current.wind_speed_10m);


container.innerHTML += `
       <div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
          <a href="${data[i].url}">
         <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina">
          </a>
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half card--text">${numeroRedondo}&deg;C</h1>
            <h2 class="bi bi-wind card--text">${numeroRedondo2}km/h</h2>
             <p class="badge-box">
              <span class="badge bg-info">${weatherCodes[pagina[i].current.weather_code]}</span>
             </p>
            </p>
          </div>
        </div>
      </div>
   
`;
}

    });




const container2 = document.getElementById("container2");

const url2 =  `https://api.open-meteo.com/v1/forecast?latitude=52.5244,39.9075,40.7143,35.6895,48.8534&longitude=13.4105,116.3972,-74.006,139.6917,2.3488&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m,wind_speed_10m&timezone=auto`;
 
fetch(url2)
    .then((response2) => response2.json())
    .then((pagina2) => {
      console.log(pagina2);
      for (let i = 0; i < pagina2.length; i++) {
  
  let numeroRedondo=Math.round(pagina2[i].current.temperature_2m);
let numeroRedondo2=Math.round(pagina2[i].current.wind_speed_10m);
  
  container2.innerHTML += `
       <div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
        <a href="${data2[i].url}">
         <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina" id="miboton">
        </a>
         <div class="card-body">
            <h5 class="card-title">${data2[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half card--text">${numeroRedondo}&deg;C</h1>
            <h2 class="bi bi-wind card--text">${numeroRedondo2}km/h</h2>
              <p>
              <span class="badge bg-info">${weatherCodes[pagina2[i].current.weather_code]}</span>
            </p>
          </div>
        </div>
    </div>

`;
}
    });
