import React from 'react'
import "./mainPlaylist.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackwardIos';


const MainPlaylist = ({mainPlaylist, currentMainPlaylist, playlistIndex, setPlaylistIndex }) => {

  

  const nextPlaylist = () =>{
    if(playlistIndex < mainPlaylist.length - 1){
      setPlaylistIndex(playlistIndex + 1)
    }else{
      setPlaylistIndex(0)
    }
  }
  
  const prevPlaylist = () =>{
    if(playlistIndex - 1 < 0){
      setPlaylistIndex(mainPlaylist.length - 1)
    }else{
      setPlaylistIndex(playlistIndex - 1)
    }
  }

  
//  console.log(currentMainPlaylist?.images[0])
    return (
    <div className='mainPlay-div'>

      <div className='main-Play-subdiv'>
        
       
        {/* {currentMainPlaylist?.images.length !==0 && <img src={currentMainPlaylist?.images[0].url} alt="playlist-img" className="mainPlay-img" />} */}
        {/* <img src={currentMainPlaylist?.images.length !==0 && currentMainPlaylist?.images[0].url} alt="playlist-img" className="mainPlay-img" /> */}
        { currentMainPlaylist && currentMainPlaylist?.images && <img src={currentMainPlaylist?.images[0].url} alt="playlist-img" className="mainPlay-img" />}
        {/* <img src={currentMainPlaylist?.images && currentMainPlaylist?.images[0].url} alt="playlist-img" className="mainPlay-img" /> */}
        <div className='mainPlay-subdiv'>
        <p>PLAYLIST</p>
          <h2>{currentMainPlaylist?.name}</h2>
        <span>{currentMainPlaylist?.owner?.display_name}* </span>
        <span>{currentMainPlaylist?.tracks?.total} songs</span>
        </div>
        </div>  
        <div className='all-next'>
        <div className='next-div' onClick={prevPlaylist}>
        <ArrowBackIosIcon style={{ fontSize: "15px" }}/>
        
        </div>
        <div className='next-div' onClick={nextPlaylist}>
       
        <ArrowForwardIosIcon style={{ fontSize: "15px" }}/>  
        </div>
        </div>
        
       
        </div>
  )
}

export default MainPlaylist