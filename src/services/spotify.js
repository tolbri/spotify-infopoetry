const Spotify = require('spotify-web-api-js')
const spotify = new Spotify()

const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:8080/";
const clientID = "a07a86420a194d2ea5166024859ea716";

const scopes = [
    "user-read-playback-position",
    "user-read-email",
    "user-library-modify",
    "playlist-modify-public",
    "ugc-image-upload",
    "user-follow-modify",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "playlist-modify-private",
    "user-follow-read",
    "user-read-playback-state",
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative"
];

const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


function getAccessToken() {
    if (!window.location.hash) return
    const splittedURL = window.location.href.split('access_token=')
    if (splittedURL.length <= 1) return // should have at least two parts, URL + token so that the token exists
    const accessToken = splittedURL[splittedURL.length - 1] // last item
    return accessToken
}


export {
    spotify,
    loginURL,
    getAccessToken
}