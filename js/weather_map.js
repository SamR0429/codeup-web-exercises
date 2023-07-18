$(() => {

////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    const SAN_ANTONIO_COORDINATES = ['29.4252', '-98.4946'];
    // Base URL for forecast API
    const URL = getWeatherURL(...SAN_ANTONIO_COORDINATES);
    const map = initializeMap();
    const marker = createMarker();
    const popUp = createPopUp();
    const span = document.querySelector('#insertWeather');
    const searchBox =document.querySelector('#search');
    // Simple way to create URL for request based on coordinates


//ask steve about this on monday
    // function fetchData(url) {
    //     $.ajax(url)
    //         .done(data => {
    //             console.log(data);
    //         })
    //         .fail(console.error);
    // }
    // fetchData('https://api.openweathermap.org/data/2.5/forecast');

///////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////
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

    let draggableMarker = new mapboxgl.Marker({
        "color": '#FF0000',
        draggable: true
    })
        .setLngLat([-98.4700, 29.5336])
        .addTo(map);


    // this is to test the function above, it was working but need to have it work for convert what the ajax object is displaying: cToF(60); . ask about the units: imperial mean ? is that for


    // $.ajax(URL).done(data => {
    //     console.log(data);
    //     renderAllWeathers(data.list)
    // }).fail(console.error);

    //function to render weather
    function renderAllWeathers(list) {
        // lists.forEach(list => {
        const createdCard = document.createElement('ul');
        createdCard.classList.add('sam-card');
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
        span.appendChild(createdCard);
        // })
    }

    //created blue marker
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4926, 29.4252])
            .addTo(map);
    }

    //creation of draggable marker
    // function createDraggableMarker() {
    //     const draggableMarker = new mapboxgl.Marker({
    //         color: '#FF0000',
    //         draggable: true
    //     })
    //         .setLngLat([-98.4700, 29.5336])
    //         .addTo(map);
    // }

    //created blue popup
    function createPopUp() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4926, 29.4252])
            .setHTML(`
            <div>
            <h1>Grab & drag my friend!</h1>
            <p>He is ready to go explore new places! His bags are packed, and he's ready to go already at the airport!</p>
            </div>
            `)
    }

    //input of lat and long by user
    function getLatLng(lng, lat) {
        const URL = getWeatherURL([lng, lat]);
        $.ajax(URL)
            .done(data => {
                console.log(data);
                renderAllWeathers(data);
            })
            .fail(console.error)
    }

    function searchUserInput(map, searchBox){

    }

///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////
    draggableMarker.on("dragend", function () {
        console.log(draggableMarker.getLngLat());
    })

///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////
    map.setZoom(10);
    marker.setPopup(popUp);
    // createDraggableMarker();
///////////////////////////////////////////////////////////////////////////////////
// This is for testing
///////////////////////////////////////////////////////////////////////////////////

    // TODO: log URL

    console.log(getWeatherURL(SAN_ANTONIO_COORDINATES[0], SAN_ANTONIO_COORDINATES[1]));

    // TODO: log full response from API

    $.ajax(URL).done(data => {
        console.log(data);
    }).fail(console.error);



    // Extract this out into its own function
    // That accepts longitude and latitude parameters
    // use that lon and lat in getWeatherURL instead of ...SAN_ANTONIO_COORDINATES

    $.ajax(getWeatherURL(...SAN_ANTONIO_COORDINATES))
        .done((data) => {

            data.list.forEach((day, index) => {
                if (index % 8 === 0) {
                    console.log(day.main.humidity);
                    console.log(day.main.temp_min);
                    console.log(day.main.temp_max);
                    renderAllWeathers(day);
                }
            });

            $.ajax(getWeatherURL(...SAN_ANTONIO_COORDINATES))
                .done(data => {
                    console.log(data);
                    const minMaxTemps = returnMinMaxTemps(data);
                    minMaxTemps.forEach(minMaxTemp => {
                        console.log(minMaxTemp);
                    });
                })
                .fail(console.error);
        })
    // End of the function we will extract


});

//     function getWeatherData() {
//         $.ajax(getWeatherURL(...SA_COORDINATES))
//             .done((data) => {
//                 data.list.forEach((day, index) => {
//                     if (index % 8 === 0) {
//                         console.log(day.main.humidity);
//                     }
//                 });
//
//                 $.ajax(getWeatherURL(...SA_COORDINATES))
//                     .done(data => {
//                         console.log(data);
//                         const minMaxTemps = returnMinMaxTemps(data);
//                         minMaxTemps.forEach(minMaxTemp => {
//                             console.log(minMaxTemp);
//                         });
//                     })
//                     .fail(console.error);
//             })
//             .fail(console.error);
//     }
//
// // Call the function to execute the code
//     getWeatherData();


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// ask about this  `${OPEN_WEATHER_URL}?q={city name}&appid=${OPEN_WEATHER_URL}`;

//would you use reverse geocode for the pin drop ? the tie that somehow to another action taking those coordinates and feeding them into the getWeatherUrl function

//write a function to take lat and long and render html, the link it to draggable marker