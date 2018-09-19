
let UserGists = username => {    
    fetch(`https://api.github.com/users/${username}/gists`)
        .then(response => response.json())
        .then(json => console.log(json));
        console.log('I am currently fetching', username);
};

export { UserGists };