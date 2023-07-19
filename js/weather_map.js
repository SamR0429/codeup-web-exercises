$(() => {

////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const map = initializeMap();
    const div = document.querySelector('#insertWeather');
    const searchBox = document.querySelector('#search-bar');


///////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////
    //function to with url
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    //function to activate the map
    // function initializeMap() {
    //     mapboxgl.accessToken = MAPBOX_TOKEN;
    //
    //     const mapOptions = {
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/navigation-night-v1',
    //         zoom: 10,
    //         center: [-98.4926, 29.4252],
    //     }
    //     const marker = new mapboxgl.Marker({
    //         color: 'red',
    //         draggable: true
    //     })
    //         .setLngLat([-98.4926, 29.4252])
    //         .addTo(map);
    //
    //     return new mapboxgl.Map(mapOptions);
    // }

    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.4926, 29.4252],
        };

        const map = new mapboxgl.Map(mapOptions); // Create the map instance

        const marker = new mapboxgl.Marker({
            color: 'red',
            draggable: true
        })
            .setLngLat([-98.4926, 29.4252])
            .addTo(map);

        marker.on('dragend');
        return map;
    }



const generateWeather = $.ajax(getWeatherURL(29.4252,-98.4926 )).done(data =>{
    console.log(data)
$('#insertWeather').html('');

    for(let i=0; i < data.list.length; i += 8){
        const weatherCard = $('<div></div>')
        weatherCard.html(`
    <div class="sam-card">
                     <p class="date">${data.list[i].dt_txt.split(' ')[0]}</p>
                     <br>
                     <p class="min-temp">LOW: ${data.list[i].main.temp_min}&deg;F</p>
                     <hr>
                     <p class="max-temp">HIGH: ${data.list[i].main.temp_max}&deg;F</p>
                     <hr>
                     <p class="conditions">Conditions: ${data.list[i].weather[0].description}</p>
                     <hr>
                     <p class="humidity">Humidity: ${data.list[i].main.humidity} %</p>
                     <hr>
                     <p class="wind">Wind: ${data.list[i].wind.speed} MPH</p>
                     <hr>
                     <p class="pressure">Pressure: ${data.list[i].main.pressure} hPa</p>
                     <br>
                </div>
               
`)
        console.log(weatherCard);
        $('#insertWeather').append(weatherCard);
    }
})
    //you cant use a for of loop

    // //function to render weather
    // function renderAllWeathers(list) {
    //     // const createdCard = document.createElement('ul');
    //     // div.classList.add('sam-card');
    //     // code to stop duplicating cards
    //     // const parentCard = document.getElementById('insertWeather');
    //     // parentCard.innerHTML = '';
    //
    //     let html = `
    //

    //         `
    //     return html;
    //     // div.appendChild(createdCard);
    //     //take and replace not make new cards
    // }
    //
    // //for the draggable marker location rendering
    // function onDragEnd() {
    //     let coords = draggableMarker.getLngLat();
    //     getWeatherData(coords.lat, coords.lng);
    // }
    //

///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////
//     let coords = draggableMarker.getLngLat();
//     getWeatherData(coords.lat, coords.lng);
//
//     draggableMarker.on("dragend", function () {
//         let coords = draggableMarker.getLngLat();
//         getWeatherData(coords.lat, coords.lng);
//     })
//
//     draggableMarker.on("dragend", onDragEnd);

///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////
    map.setZoom(10);

///////////////////////////////////////////////////////////////////////////////////
// This is for testing
///////////////////////////////////////////////////////////////////////////////////


});


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// ask about this  `${OPEN_WEATHER_URL}?q={city name}&appid=${OPEN_WEATHER_URL}`;

//would you use reverse geocode for the pin drop ? the tie that somehow to another action taking those coordinates and feeding them into the getWeatherUrl function

//write a function to take lat and long and render html, the link it to draggable marker