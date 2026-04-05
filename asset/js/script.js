
const url = "https://api.open-meteo.com/v1/forecast?latitude=-33.45&longitude=-70.66&current=temperature_2m,windspeed_10m";
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento").textContent = data.current.windspeed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });
  
  const url2 = "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=temperature_2m,wind_speed_10m&timezone=Europe/Madrid"
  
  fetch(url2)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp2").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento2").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });
  const url3 = "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,wind_speed_10m"
  fetch(url3)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp3").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento3").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });

 const url4 = "https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.61568&current=temperature_2m,wind_speed_10m"
  fetch(url4)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp4").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento4").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });

  const url5 = "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,wind_speed_10m"
  fetch(url5)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp5").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento5").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });
 const url6 = "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m,wind_speed_10m"
  fetch(url6)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp6").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento6").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });

  const url7 = "https://api.open-meteo.com/v1/forecast?latitude=39.9075&longitude=116.3972&current=temperature_2m,wind_speed_10m"
  fetch(url7)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp7").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento7").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });
  const url8 = "https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,wind_speed_10m"
  fetch(url8)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp8").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento8").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });
 
  const url9 = "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,wind_speed_10m"
  fetch(url9)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp9").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento9").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });

  const url10 = "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m,wind_speed_10m"
  fetch(url10)
  .then(response => response.json())
  .then(data => {
    // Insertamos los datos en el HTML
    document.getElementById("temp10").textContent = data.current.temperature_2m + "°C";
    document.getElementById("viento10").textContent = data.current.wind_speed_10m + "km/h";
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("clima").textContent = "Error al cargar el clima.";
  });