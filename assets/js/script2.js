const data2= [

{
    id: 1,
    title:"Mar",
    icon:"☀️",
<<<<<<< HEAD
    text:"29",
    text2:"10",
    text3:"Despejado",
    lat: 40.4165,
    lon: -3.7026,

=======
    text:"23",
    text2:"10",
    text3:"Despejado"
 
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
},{
    id: 2,
    title:"Mié",
    icon:"☀️",
<<<<<<< HEAD
    text:"27",
    text2:"10",
    text3:"Soleado",
     
=======
    text:"25",
    text2:"12",
    text3:"Soleado"
    
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
},
{
    id: 3,
    title:"Jue",
    icon:"☀️",
<<<<<<< HEAD
    text:"27",
    text2:"9",
    text3:"Soleado",

=======
    text:"29",
    text2:"15",
    text3:"Soleado"
    
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
},
{
    id: 4,
    title:"Vie",
    icon:"☀️",
<<<<<<< HEAD
    text:"26",
    text2:"12",
    text3:"Soleado",
   
=======
    text:"31",
    text2:"16",
    text3:"Soleado"
    
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
},
{
    id: 5,
    title:"Sab",
<<<<<<< HEAD
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
=======
    icon:"☀️",
    text:"32",
    text2:"16",
    text3:"Soleado",
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
    
    
}
]


const container2 = document.getElementById("container2")
<<<<<<< HEAD
const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[1]);
      for (let i = 0; i < pagina.length; i++) {


=======

for (let i = 0; i < data2.length; i++){
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748


container2.innerHTML += `
   
   <div class="col-6 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
<<<<<<< HEAD
            <h5 class="card-title">${pagina[1].daily.time[i]}</h5>
            <p class="card-text icon-lg">${data2[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${pagina[1].daily.temperature_2m_max[i]}°<span class="fs-6">/${pagina[1].daily.temperature_2m_min[i]}°</span></p>
=======
            <h5 class="card-title">${data2[i].title}</h5>
            <p class="card-text icon-lg">${data2[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${data2[i].text}°<span class="fs-6">/${data2[i].text2}°</span></p>
>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748
            <p class="card-text small">${data2[i].text3}</p>
          </div>
        </div>
      </div>

`

}
<<<<<<< HEAD
    });
=======


>>>>>>> 7c9d7d13b9e4142262fdaa482f0053745aba8748




