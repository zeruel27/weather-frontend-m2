const data1= [

{
    id: 1,
    title:"Dom",
    icon:"☀️",
    text:"29",
    text2:"10",
    text3:"Despejado",
    lat: -33.4569,
    lon: -70.6483,
},{
    id: 2,
    title:"Lun",
    icon:"☀️",
    text:"27",
    text2:"10",
    text3:"Soleado",
    
},
{
    id: 3,
    title:"Mar",
    icon:"☀️",
    text:"27",
    text2:"9",
    text3:"Soleado",
    
   

},
{
    id: 4,
    title:"Mié",
    icon:"☀️",
    text:"26",
    text2:"12",
    text3:"Soleado",
   
   
},
{
    id: 5,
    title:"jue",
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
  
    
},
{
    id: 6,
    title:"vier",
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
    
},
{
    id: 7,
    title:"Sab",
    icon:"⛅",
    text:"23",
    text2:"10",
    text3:"Nublado",
    
  
    
}


]


const container1 = document.getElementById("container1")

const url = `https://api.open-meteo.com/v1/forecast?latitude=-33.4569,40.4165,51.5085,55.752,-34.6131&longitude=-70.6483,-3.7026,-0.1257,37.6178,-58.3772&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,wind_speed_10m&timezone=auto`;
   fetch(url)
    .then((response) => response.json())
    .then((pagina) => {
      console.log(pagina[0]);
      for (let i = 0; i < pagina.length; i++) {
      
 

container1.innerHTML += `
   
   <div class="col-10 col-md-4 col-lg-2">
        <div class="card weather-card text-center h-100 shadow-sm">
          <div class="card-body btn-primary">
            <h5 class="card-title">${pagina[0].daily.time[i]}</h5>
            <p class="card-text icon-lg">${data1[i].icon}</p>
            <p class="card-text fs-4 fw-bold">${pagina[0].daily.temperature_2m_max[i]}°<span class="fs-6">/${pagina[0].daily.temperature_2m_min[0]}°</span></p>
            <p class="card-text small">${data1[i].text3}</p>
          </div>
        </div>
      </div>

`

}
    });
