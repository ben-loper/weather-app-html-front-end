document.addEventListener('DOMContentLoaded', () => {
	let sbmtBtn = document.getElementById('sbmt-btn');

	sbmtBtn.addEventListener('click', function(event) {
		event.preventDefault();
		getWeatherForecast();
	});
});

function getWeatherForecast() {
	let inputNode = document.getElementById('location');
	let location = inputNode.value;

	let weatherResultDiv = document.getElementById('weather-result');
	weatherResultDiv.style.display = 'none';

	fetch(`http://localhost:8080/weather/todaysForecast?location=${location}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(weatherForecast) {
			document.getElementById('icon').innerText = weatherForecast.icon;
			document.getElementById('location-name').innerText = weatherForecast.locationName;
			document.getElementById('temperature').innerText = weatherForecast.temperature + ' F';
			document.getElementById('nearest-storm-bearing').innerText = weatherForecast.nearestStormBearing;
			document.getElementById('nearest-storm-distance').innerText =
				weatherForecast.nearestStormDistance + ' miles';
			document.getElementById('summary').innerText = weatherForecast.summary;
			document.getElementById('wind-gust').innerText = weatherForecast.windGust;
			document.getElementById('wind-speed').innerText = weatherForecast.windSpeed + ' mph';

			weatherResultDiv.style.display = 'block';
		});
}
