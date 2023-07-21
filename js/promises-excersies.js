
    const getEvents = (userName) => {
        const url = `https://api.github.com/users/${userName}/events`
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `token ${keys.github}`
            }
        }
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }



(() => {
    getEvents('SamR0429').then(events => {
        console.log(events);
        const pushEvents = events.filter(event => {
            return event.type === "PushEvent";
        });
        console.log(pushEvents[0].created_at);
    })


})();
