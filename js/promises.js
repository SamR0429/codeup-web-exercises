
const getPerson =(id = 1) =>{
    const url = `https://swapi.dev/api/people/${id}/`
    const options = {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response)=> {
            return response.json();
        })
        // .then ((data)=>{
        //     // console.log(data);
        //     return data;
        //
        // });

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
getPerson(4);
//not accessible here
})();