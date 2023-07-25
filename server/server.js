const express = require('express');
const spotifywebapi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
  const spotify = spotifywebapi({
    redirectUri: 'http://localhost:3000',
    clientId: '69a151701abb4b7a8ca74139ede6e72a',
    clientSecret: '2243910908384d4aa2253510cf742a15'
  });

});