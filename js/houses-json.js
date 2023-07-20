//map
(() => {
    const url = 'data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);


            //working with houses array
            // housesTwoBedsPlus =[];
            // for(let house of houses){
            //     const numOfBeds = parseFloat(house.beds);
            //     if(numOfBeds >=2){
            //         housesTwoBedsPlus.push(house);
            //     }
            // }
            // console.log(housesTwoBedsPlus);

            //this is using the filter method
            const housesTwoBedsPlus = houses.filter(house =>{
                return parseFloat(house.beds) >= 2;
            })
            console.log(housesTwoBedsPlus);

            //another way to do the filter method but with multiple variables
            // let housesTwoBedsPlus = houses.filter(house =>{
            //     const numOfBeds =parseFloat(house.beds);
            //     const numOfBaths = parseFloat(house.baths)
            //     return numOfBeds >= 5 && numOfBaths >= 3;
            // });
            // console.log(housesTwoBedsPlus);

            //this is the map method
            // let housesPriceRange = houses.map(house =>{
            //     const priceRange = 200_000;
            //     const canBuy = parseFloat(house.price) > priceRange ? 'nope' : 'yes';
            //     const newValue = `
            //     Address: ${house.address}
            //     Can i afford it:${canBuy}
            //     `
            //     return newValue;
            // });
            // for(let house of housesPriceRange){
            //     console.log(house);
            // }

            //this is reduce
            // const largestPrice = houses.reduce(/* function parameter*/(accumulator, house, index) => {
            //         let price = parseFloat(house.price);
            //         if (price > accumulator) {
            //             accumulator = price;
            //         }
            //         return accumulator;
            //     },
            //     /*this is the initial value of the accumulator */0);
            // console.log(largestPrice);
            //
            // const cheapestPrice = houses.reduce(/* function parameter*/(accumulator, house, index) => {
            //         let price = parseFloat(house.price);
            //         if (price < accumulator) {
            //             accumulator = price;
            //         }
            //         return accumulator;
            //     },
            //     /*this is the initial value of the accumulator */parseFloat(houses[0].price));
            // console.log(cheapestPrice);
            //
            // const dashboardObject = houses.reduce((accumulator, house, index) => {
            //     accumulator++
            //     let price = parseFloat(house.price);
            //     if (price > accumulator.mostExpensive) {
            //         accumulator.mostExpensive = price;
            //     }
            //     if (price < accumulator.cheapestHouse) {
            //         accumulator.cheapestHouse = price;
            //     }
            //     accumulator.totalMarketValue += price;
            // },{
            //     totalHouse : 0,
            //     mostExpensive: 0,
            //     cheapestHouse: parseFloat(houses[0].price),
            //
            // });
            // console.log(dashboardObject);
        });
})();