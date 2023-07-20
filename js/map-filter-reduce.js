const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//
// const atLeast3Langs = [];
// for (let user of users) {
//     const numOfLangs = user.languages;
//     if (numOfLangs >= 3) {
//         atLeast3Langs.push(user);
//     }
// }
// console.log(atLeast3Langs);


//1). couldnt get it to work
// const atLeast3Langs = users.filter(user =>{
//     return parseFloat(user.languages) >= 3;
// })
const atLeast3Langs = users.filter(user => user.languages >= 3);

console.log(atLeast3Langs);
console.log(atLeast3Langs);




const totalYearsExperience = users.reduce((accumulator, user, index) =>{
    const yearsArray = [];
    let yearsOfExperience = user.yearsOfExperience;
    for(let i = 0; i < users.length; i++){
        yearsOfExperience++
    }
    return yearsArray;
});
console.log(totalYearsExperience);