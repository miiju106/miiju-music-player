import React from "react";
// import { Line } from "rc-progress";
import "./playControls.css";
import Slider from '@mui/material/Slider'

const VolumeBar = ({ volume, setVolume }) => {

  console.log(volume)
  return (
    <div className="vol-bar">
      {/* <Line
        percent={volume * 100}
        isPlaying={true}
        strokeColor="#0B163D"
        strokeWidth={4}
        trailWidth={5}
      /> */}
      {/* <input
        type="range"
        isPlaying={true}
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      /> */}
      <Slider
      //  className="slider-cont"
      //  isPlaying={true}
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(e) => setVolume((e.target.value))}
        sx={{
          color:"#0B163D",
          height:5,
          '& .MuiSlider-thumb': {
            display:"none",
        }
        
      }}
          
      />
    </div>
  );
};

export default VolumeBar;
