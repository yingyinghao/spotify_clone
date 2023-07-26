import React, {useState, useEffect}from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player(access_token, trackUri) {
  const [play, setPlay] = useState(false)

  useEffect (() => setPlay(true), [trackUri])



  if (!access_token) return null
  return (
  <SpotifyPlayer
  token={access_token}
  showSaveIcon
  callback={state => {
    if(!state.isPlaying) setPlay(false)
  }}
  play={true}
  uris={trackUri ? {trackUri} : []}
  />
  )
}
