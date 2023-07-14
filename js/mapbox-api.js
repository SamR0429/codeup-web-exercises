$(() => {

    //global var
    const map = initializeMap();
    const marker = createMarker();
    const marker2 = createMarker2();
    const popUp = createPopUp();
    const popUp2 = createPopUp2();
    //function

    // this initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOptions);
    }

    //this creates a marker
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

//this is a marker for the 54th
function createMarker2(){
        return new mapboxgl.Marker()
            .setLngLat([-98.478700, 29.516279])
            .addTo(map);
}











    //function that creates a popup
    function createPopUp() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
            <div>
            <h1>Codeup</h1>
            <p>we can put anything</p>
            </div>
            `)
    }

    function createPopUp2(){
        return new mapboxgl.Popup()
            .setLngLat([-98.478700, 29.516279])
            .setHTML(`
            <div>
            <h1>54th</h1>
            <p>fave</p>
            </div>
            `)
    }










    //this brings you to paris
    function goToParis() {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    //reverses geocode
    function findAndPrintAddress() {
        const coords = map.getCenter();
        console.log(coords);
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }


    function markAlamo() {
        geocode('The alamo,san antonio', MAPBOX_TOKEN).then((data) => {
            const alamoPopUp = new mapboxgl.Popup()
                .setHTML(`<p>remember the alamo</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopUp);
            alamoPopUp.addTo(map);
        })
    }


    //this is for 54th geocode button
    function markFood() {
        geocode('954 E Rector St, San Antonio, TX 78216', MAPBOX_TOKEN).then((data) => {
            const rPopUp = new mapboxgl.Popup()
                .setHTML(`<p>My favorite restaurant</p>`);
            const foodMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(rPopUp);
            rPopUp.addTo(map);
        })
    }



    //events
    document.querySelector('#geocode-button').addEventListener('click', goToParis)
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)
    document.querySelector('#mark-restaurant').addEventListener('click', markFood)
    document.querySelector('#zoom5').addEventListener('click', function(){map.setZoom(5)})
    document.querySelector('#zoom15').addEventListener('click', function(){map.setZoom(15)})
    document.querySelector('#zoom20').addEventListener('click', function(){map.setZoom(20)})
    //runs when program loads
    map.setZoom(10);
    marker.setPopup(popUp)

    // marker.setPopup(popUp2)

});