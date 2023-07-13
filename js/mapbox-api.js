$(() => {

    //global var
    const map = initializeMap();
    const marker = createMarker();
    const popUp = createPopUp()


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

    //this brings you to paris
    function goToParis() {
        geocode('Paris', MAPBOX_TOKEN).then((data) =>{
            console.log(data);
            map.setCenter(data);
        })
    }

    //reverses geocode
    function findAndPrintAddress(){
        const coords =map.getCenter();
        console.log(coords);
        reverseGeocode(coords, MAPBOX_TOKEN).then((data)=>{
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }


    function markAlamo(){
        geocode('The alamo,san antonio', MAPBOX_TOKEN).then((data) =>{
            const alamoPopUp = new mapboxgl.Popup()
                .setHTML(`<p>remember the alamo</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopUp);
            alamoPopUp.addTo(map);
        })
    }

    //events
    document.querySelector('#geocode-button').addEventListener('click', goToParis)
document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress)
document.querySelector('#mark-alamo').addEventListener('click', markAlamo)
    //runs when program loads
    map.setZoom(10);
    marker.setPopup(popUp)

});