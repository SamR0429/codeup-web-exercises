$(() => {






    ////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const map = initializeMap();
    // Base URL for forecast API


// this works but dont mess with it until monday
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    // Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    const ALAMO_COORDINATES = ['29.4260', '-98.4861'];

    // TODO: log URL

    console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

    const URL = getWeatherURL(...ALAMO_COORDINATES);

    // TODO: log full response from API

    $.ajax(URL).done(data => {
        console.log(data);
    }).fail(console.error);






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
    /* Simple way to create URL for request based on coordinates */


    /* function to activate map */
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.491142, 29.424349]
        }
        return new mapboxgl.Map(mapOptions);
    }




///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////
    map.setZoom(10);
});