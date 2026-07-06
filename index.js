function getweather() {
  const cityRef = document.getElementById("cityname");
  const city = cityRef.value;

  if (!city.trim()) {
    alert("Please enter a city name!");
    return;
  }

  console.log(city);

  const weatherInfo = document.getElementById("weatherresult");
  weatherInfo.innerText = "Loading weather data... please wait...";

  const weatherRes = fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`,
  );

  weatherRes
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.current);
      
      // Modern template structure jahan details alag alag boxes (.detail-box) mein ayengi
      weatherInfo.innerHTML = `
        <div class="main-weather-info">
          <h2 style="color: #006064; text-transform: capitalize; font-size: 26px; margin-bottom: 5px;">${city}</h2>
          <div style="font-size: 40px; font-weight: 800; color: #00bcd4; margin: 10px 0;">
            ${data.current.temp_c}°C
          </div>
        </div>
        
        <div class="weather-details">
          <div class="detail-box"><strong>Humidity</strong><span>${data.current.humidity}%</span></div>
          <div class="detail-box"><strong>Wind Speed</strong><span>${data.current.wind_kph} km/h</span></div>
          <div class="detail-box"><strong>Pressure</strong><span>${data.current.pressure_mb} mb</span></div>
          <div class="detail-box"><strong>Feels Like</strong><span>${data.current.feelslike_c}°C</span></div>
          <div class="detail-box"><strong>Gust</strong><span>${data.current.gust_kph} kph</span></div>
          <div class="detail-box"><strong>Heat Index</strong><span>${data.current.heatindex_c}°C</span></div>
          <div class="detail-box"><strong>Dewpoint</strong><span>${data.current.dewpoint_c}°C</span></div>
          <div class="detail-box"><strong>Wind Chill</strong><span>${data.current.windchill_c}°C</span></div>
        </div>
      `;
    })
    .catch((err) => {
      console.log(err);
      weatherInfo.innerText =
        "Error: Could not fetch weather data. Please check city name.";
    });
}