$(() => {

////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const map = initializeMap();
    const div = document.querySelector('#insertWeather');
    // const searchBox =document.querySelector('#search-bar');


///////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////
    //function to with url
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    //function to activate the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.4926, 29.4252],
        }
        return new mapboxgl.Map(mapOptions);
    }

    //creation of draggable marker
    let draggableMarker = new mapboxgl.Marker({
        "color": 'red',
        draggable: true
    })
        .setLngLat([-98.4926, 29.4252])
        .addTo(map);

    //function to render weather
    function renderAllWeathers(list) {

        const createdCard = document.createElement('ul');
        // createdCard.innerHTML= '';
        div.classList.add('sam-card');
        createdCard.innerHTML = (`
                <li class="date">${list.dt_txt}</li>
                 <br>
                 <li class="min-temp">LOW: ${list.main.temp_min}&deg;F</li>
                 <hr>
                 <li class="max-temp">HIGH: ${list.main.temp_max}&deg;F</li>
                 <hr>
                 <li class="conditions">Conditions: ${list.weather[0].description}</li>
                 <hr>
                 <li class="humidity">Humidity: ${list.main.humidity} %</li>
                 <hr>
                 <li class="wind">Wind: ${list.wind.speed} MPH</li>
                 <hr>
                 <li class="pressure">Pressure: ${list.main.pressure} hPa</li>
                 <br>
            `)
        div.appendChild(createdCard);
        //take and replace not make new cards
    }

    //for the draggable marker location rendering
    function onDragEnd() {
        let coords = draggableMarker.getLngLat();
        getWeatherData(coords.lat, coords.lng);
    }

    //function to get weather for each day
    function getWeatherData(lng,lat) {

        $.ajax(getWeatherURL(lng, lat))
            .done((data) => {

                data.list.forEach((day, index) => {
                    if (index % 8 === 0) {
                        console.log(day.main.humidity);
                        console.log(day.main.temp_min);
                        console.log(day.main.temp_max);
                        renderAllWeathers(day);
                    }
                });

                $.ajax(getWeatherURL(lng, lat))
                    .done(data => {
                        console.log(data);
                        const minMaxTemps = returnMinMaxTemps(data);
                        minMaxTemps.forEach(minMaxTemp => {
                            console.log(minMaxTemp);
                        });
                    })
                    .fail(console.error);
            })
    }


    //input of lat and long by user
    // function getLatLng(lng, lat) {
    //     const URL = getWeatherURL([lng, lat]);
    //     $.ajax(URL)
    //         .done(data => {
    //             console.log(data);
    //             renderAllWeathers(data);
    //         })
    //         .fail(console.error)
    // }
///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////
    let coords = draggableMarker.getLngLat();
    getWeatherData(coords.lat, coords.lng);

    // draggableMarker.on("dragend", function () {
    //     let coords = draggableMarker.getLngLat();
    //     getWeatherData(coords.lat, coords.lng);
    // })

    draggableMarker.on("dragend", onDragEnd);

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