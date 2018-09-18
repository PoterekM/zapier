
let UserGists = username => {
    console.log('I am currently fetching', username);

    fetch(`https://api.github.com/users/${username}/gists`)
        .then(response => response.json())
        .then(json => console.log(json));
    // accept a username √
    // retrieve public gists for that user √
    //
};

export default UserGists;