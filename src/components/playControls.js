import React from 'react'
import "./playControls.css";
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';

const PlayControls = ({currentTrack}) => {
  const currentArtist= []
  currentTrack?.album?.artists?.forEach((element)=>{
    currentArtist?.push(element.name)
  })

  console.log(currentTrack)
  console.log(currentArtist)

  return (
    <div className='play-control-cont'>
        <div className='play-control-name'>
          <img src={currentTrack?.album?.images[0]?.url} alt="" className="control-img" />
          <div className='control-name-detail'>
            <p className="control-song-title">{currentTrack?.name}</p>
            <p className="control-artist-title">{currentArtist?.join("|")}</p>
            </div>
          </div>
        <div className="play-control-icons">
            <SkipPreviousRoundedIcon style={{ fontSize: "40px"}} className='prev-icon'/>
            <PauseCircleFilledRoundedIcon style={{ fontSize: "65px", }} className="play-pause-icon"/>
            <SkipNextRoundedIcon style={{ fontSize: "40px",  }} className='prev-icon'/>
            

            </div>
        <div>VolContainer</div>
    </div>
  )
}

export default PlayControls