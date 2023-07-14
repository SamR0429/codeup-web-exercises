$(() => {

//     //global var
    const map = initializeMap();
    const marker = createMarker();
    const popUp = createPopUp();

    const marker2 = createMarker2();


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

    //this creates a marker for codeup?
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

//this is a marker for the 54th
    function createMarker2() {
        return new mapboxgl.Marker()
            .setLngLat([-98.478700, 29.516279])
            .addTo(map);
    }





    // function that creates a popup
    function createPopUp() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
            <div>
            <h1>Codeup</h1>
            <p>This is where I go to school!</p>
            <img src="../img/codeup.jpg" style="height: 8rem;">
            </div>
            `)
    }

    // function createPopUp() {
    //     return new mapboxgl.Popup()
    //         .setLngLat([-98.478700, 29.516279])
    //         .setHTML(`
    //         <div>
    //         <h1>54th</h1>
    //         <p>fave</p>
    //         </div>
    //         `)
    // }


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
                .setHTML(`
                 <p>remember the alamo</p>
                 <img src="../img/alamo.jpg" style="height: 5rem;">
            `);
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
                .setHTML(`
                    <p><strong>My favorite restaurant!</strong> I like it because my good friend introduced me to it and to me it's a upgraded Chili's. It has everything anyone could want. One-stop shop.</p>

                    <img src="../img/54th.jpg" style="height: 9rem;">
                    <img src="../img/54th2.jpg" style="height: 9rem;">
        `);
            const foodMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(rPopUp);
            rPopUp.addTo(map);
        })
    }

    function markMaggianos() {
        geocode('17603 I-10, San Antonio, TX 78257', MAPBOX_TOKEN).then((data) => {
            const rPopUp = new mapboxgl.Popup()
                .setHTML(`
                    <p><strong>My favorite restaurant again!</strong> I like this place cause I tried it for the first time with my fiancé in Houston on vacation. We like it cause it's a fancy Olive Garden but you can tell they actually make it and it's not microwaved food.</p>
                    <img src="../img/maggianos.jpg" style="height:11rem;">
                    <img src="../img/maggianos2.jpg" style="height:9rem;">
            `);
            const foodMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(rPopUp);
            rPopUp.addTo(map);
        })
    }

    function markTexasRoadHouse() {
        geocode('16915 San Pedro Ave, Hollywood Park, TX 78232', MAPBOX_TOKEN).then((data) => {
            const rPopUp = new mapboxgl.Popup()
                .setHTML(`
                    <p><strong>My favorite restaurant again again!</strong> I like this place because they make the best stakes ever and have the most awesome-ist sides. Everything tastes so good! Especially the rolls!</p>
                    <img src="../img/rolls.jpg" style="height:10rem;">
                    <img src="../img/steak.jpg" style="height:10rem;">
            `);
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
    document.querySelector('#mark-maggianos').addEventListener('click', markMaggianos)
    document.querySelector('#mark-texas-road-house').addEventListener('click', markTexasRoadHouse)
    document.querySelector('#zoom5').addEventListener('click', function () {
        map.setZoom(5)
    })
    document.querySelector('#zoom10').addEventListener('click', function () {
        map.setZoom(10)
    })
    document.querySelector('#zoom15').addEventListener('click', function () {
        map.setZoom(15)
    })
    document.querySelector('#zoom20').addEventListener('click', function () {
        map.setZoom(20)
    })
    //runs when program loads
    map.setZoom(10);
    marker.setPopup(popUp)

    // marker.setPopup(popUp2)

});


