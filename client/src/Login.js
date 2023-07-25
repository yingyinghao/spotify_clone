import React from 'react'

import {Container} from 'react-bootstrap'


const AUTH_URL = "hhtp://accounts.spotify.com/authorize?client_id=69a151701abb4b7a8ca74139ede6e72a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state"



export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
    </Container>



    )
}
