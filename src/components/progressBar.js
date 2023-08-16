import React from "react";
// import { Line } from "rc-progress";
import Slider from '@mui/material/Slider'
import "./nowPlaying.css";

const ProgressBar = ({ isPlaying, currentPercentage,duration, trackProgress, playback, setPlayback, setTrackProgress }) => {

  // console.log(playback)
  return (
    <div>
      <div className="bar-cont">
        {/* <Line
          percent={currentPercentage}
          
          isPlaying={true}
          strokeColor="#0B163D"
          strokeWidth={0.7}
          trailWidth={2}
                         
        /> */}
        {/* <input
        type="range"
        className="input-cont"
        min={0}
        max={duration}
        value={trackProgress}
        onChange={(e) => setTrackProgress(e.target.value )}
      /> */}
        <Slider
      //  className="slider-cont"
      //  isPlaying={true}
        min={0}
        
        max={duration}
        value={trackProgress}
        onChange={(e) => setTrackProgress(e.target.value )}
        sx={{
          color:"#0B163D",
          height:8,
          '& .MuiSlider-thumb:hover': {
            width: 20,
            height: 20,
            
        }
        
      }}
      
     
          
      />
      </div>
    </div>
  );
};

export default ProgressBar;
