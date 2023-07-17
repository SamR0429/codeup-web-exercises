$(() => {

////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    const SAN_ANTONIO_COORDINATES = ['29.4252', '-98.4946'];
    // Base URL for forecast API
    const URL = getWeatherURL(...SAN_ANTONIO_COORDINATES);
    const map = initializeMap();
// this works but dont mess with it until monday


    // Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    // TODO: log URL

    console.log(getWeatherURL(SAN_ANTONIO_COORDINATES[0], SAN_ANTONIO_COORDINATES[1]));

    // TODO: log full response from API

    $.ajax(URL).done(data => {
        console.log(data);
    }).fail(console.error);

    $.ajax(getWeatherURL(...SAN_ANTONIO_COORDINATES))
        .done((data) => {

            data.list.forEach((day, index) => {
                if (index % 8 === 0) {
                    console.log(day.main.humidity);
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

    /* function to activate map */
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.4926, 29.4252],
            attributionControl: false
        }
        // map.addControl(new mapboxgl.AttributionControl(), 'top-left');
        //the code above is for postioning the mapbox on the page, wont work properly ask steve or someone
        return new mapboxgl.Map(mapOptions);

    }

    // function cToF(celsius) {
    //     let cTemp = celsius;
    //     let cToFahr = cTemp * 9 / 5 + 32;
    //     let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    //     console.log(message);
    // }

    // this is to test the function above, it was working but need to have it work for convert what the ajax object is displaying: cToF(60); . ask about the units: imperial mean ? is that for
const span = document.querySelector('#insertWeather');

    $.ajax(URL).done(data => {
        console.log(data);
        renderAllWeathers(data)
    }).fail(console.error);


    function renderAllWeathers(lists) {
        lists.forEach(list => {
            const createdCard = document.createElement('ul');
            createdCard.innerHTML = (`
                 <li class="date">${list[0].sys.dt_text}</li>
                 <li class="min-max">${list[1].main.temp_min}</li>
                 <li class="conditions">${list.weather[0].description}</li>
                 <li class="humidity">${list[1].main.humidity}</li>
                 <li class="wind">${list[0].wind.speed}</li>
                 <li class="pressure">${list[0].main.pressure}</li>
            `)
            span.appendChild(createdCard);
        })
    }

///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////
    map.setZoom(10);


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

//<p>The temperature is 25&deg;F.</p>       this is for the html to display the little degree

//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// ask about this  `${OPEN_WEATHER_URL}?q={city name}&appid=${OPEN_WEATHER_URL}`;

//would you use reverse geocode for the pin drop ? the tie that somehow to another action taking those coordinates and feeding them into the getWeatherUrl function

//need a marker for the dropping pin function?