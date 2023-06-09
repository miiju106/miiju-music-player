import React from 'react'
import ProgressBar from "./progressBar"
import PlayControls from "./playControls"

const NowPlaying = ({currentTrack}) => {
  return (
    <div className='now-play-cont'>
      <ProgressBar/>
      <div className='play-duration'>
        <p>0:00</p>
        <p>0:30</p>
        </div>
        <PlayControls currentTrack={currentTrack}/>
      </div>
  )
}

export default NowPlaying