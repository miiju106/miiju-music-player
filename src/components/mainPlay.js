import React from 'react'
import "./mainPlay.css";
import { useState, useEffect } from "react";
import Search from "./search"
import MainSongQueue from "./mainSongQueue"
import clientApi from "./spotifyApi";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const MainPlay = ({tracks, currentIndex, setCurrentIndex,}) => {

  // const[allTracks, setAllTracks] = useState(null)

  // const id = tracks?.forEach((track, index)=>{
  //   console.log(track.track.id)
  //   return track.track.id
  //   })

  //   console.log(id)


  
  
  // console.log(allTracks)
  // console.log(playlist)
  return (
    <div className='main-play'>
      {/* <Search/> */}
      <div className='playlist-main'>
      <div className='playlist-head'>
        <p className='first-head'>TITLE</p>
       
        <p>ALBUM</p>
        <p>DATE RELEASE</p>
        <p>TIME</p>
        
        
      </div>
      
        {tracks?.map((track, index)=>(
          
          
<div className='playlist-body' onClick={()=>setCurrentIndex(index)}>
  
{console.log(track)}

<div className='title-div'>
   <div className='div-img'><img src={track.track.album?.images[0]?.url} alt="" className='title-img'/></div>
  <div className='title-subdiv'>    
   <p className='track-name'>{track.track?.name}</p>
   <p>{track.track.album?.artists[0].name}</p> 
   
   
   </div>
   <div className="title-play">
            <PlayCircleIcon style={{ fontSize: "25px" }} />
          </div>
   
</div>
<div><p className='track-name'>{track.track.album?.name}</p></div> 
<div><p className='track-name'>{track.track.album?.release_date}</p></div> 
<div><p className='track-name'>0:30</p></div>




 
</div>

        ))}
      
      </div>
      </div>
  )
}

export default MainPlay