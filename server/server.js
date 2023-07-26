const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("hi")
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '69a151701abb4b7a8ca74139ede6e72a',
    clientSecret: '2243910908384d4aa2253510cf742a15',
    refreshToken,
});


spotifyApi.
refreshAccessToken()
.then(data => {
  res.json({
    accessToken: data.body.accessToken,
    expiresIn: data.body.expiresIn,
  });
})
.catch(err => {
  console.error(err);
  res.sendStatus(400);
});
});



app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '69a151701abb4b7a8ca74139ede6e72a',
    clientSecret: '2243910908384d4aa2253510cf742a15'
  });


  spotifyApi
  .authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  })
  .catch(error => {
    console.log(error);
    res.sendStatus(400);
  });
});


app.listen(3001);