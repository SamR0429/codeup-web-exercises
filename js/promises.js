const getPerson = (id = 1) => {
    const url = `https://swapi.dev/api/people/${id}/`
    const options = {
        method: 'GET',
        headers: {
            "content-type": "application/json",
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error =>{
            console.log(error.message)
        })
    // .then ((data)=>{
    //     // console.log(data);
    //     return data;
    //
    // });

}

const getFilm = (url) => {
    const filmurl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(filmurl, options)
        .then((response) => {
            return response.json();
        })
        //this line is for showing an error that pops up showing what went wrong so we can see what it was actually that did it
        .catch(error => {
            console.log(error.message);
        });
    //the bottom line is redundant after we put the return next to the fetch in order to not be stuck in return hell
    // .then((film) => {
    //     console.log(film);
    // });
}

const getVehicle = (url) =>{
    const vehicleUrl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(vehicleUrl, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error.message);
        });
}
const getStarship = (url) => {
    const starshipUrl = url;
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(starshipUrl, options)
        .then((response) =>{
            return response.json();
        })
        .catch(error =>{
            console.log(error.message);
        })
}

(() => { // IIFE (Immediately Invoked Function Expression)
    // const url = 'https://swapi.dev/api/people/1/'
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         "content-type": "application/json"
    //     }
    // }
    // fetch(url, options)
    //     .then((response)=> {
    //         return response.json();
    //     })
    //     .then ((data)=>{
    //         console.log(data);
    //     });

    getPerson(1).then((person) => {
        console.log(person);
        //     const url = person.films[0];
        //     const options = {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         }
        //     }
        //     fetch(url, options)
        //         .then((response)=>{
        //             return response.json();
        //         })
        //         .then((film)=>{
        //             console.log(film);
        //         });
        getFilm(person.films[0]).then(film => {
            console.log(film);
            getStarship(person.starships[0]).then(starship =>{
                console.log(starship);
                getVehicle(person.vehicles[0]).then(vehicle =>{
                    console.log(vehicle);
                })
            })
        })
    });


})();
