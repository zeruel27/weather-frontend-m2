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

const container = document.getElementById("container");

const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina);
      for (let i = 0; i < pagina.length; i++) {
      

const container = document.getElementById("container")

container.innerHTML += `
       <div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
          <a href="${data[i].url}">
         <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina" id="miboton">
          </a>
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half">${pagina[i].current.temperature_2m}&deg;C</h1>
            <h2 class="bi bi-wind">${pagina[i].current.wind_speed_10m}km/h</h2>
            </p>
          </div>
        </div>
      </div>
   
`;
}

    });




const container2 = document.getElementById("container2");

const url2 =  `https://api.open-meteo.com/v1/forecast?latitude=52.5244,39.9075,40.7143,35.6895,48.8534&longitude=13.4105,116.3972,-74.006,139.6917,2.3488&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;
 
fetch(url2)
    .then((response2) => response2.json())
    .then((pagina2) => {
      console.log(pagina2);
      for (let i = 0; i < pagina2.length; i++) {
  
  
  
  container2.innerHTML += `
       <div class="col-12 col-md-2">
        <div class="container--card h-100 text-white bg-primary mb-3" style="max-width: 18rem">
        <a href="${data2[i].url}">
         <img src="./assets/img/screenxubo-sun-23076.gif" class="card-img-top" alt="Ir a pagina" id="miboton">
        </a>
         <div class="card-body">
            <h5 class="card-title">${data2[i].title}</h5>
            <p class="card-text">
            <h1 class="bi bi-thermometer-half">${pagina2[i].current.temperature_2m}&deg;C</h1>
            <h2 class="bi bi-wind">${pagina2[i].current.wind_speed_10m}km/h</h2>
            </p>
          </div>
        </div>
    </div>

`;
}
    });


document.getElementById("miboton").addEventListener("click", function () {
  window.location.href = "detalles.html";
});
