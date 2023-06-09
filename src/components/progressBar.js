import React from 'react'
import {Line} from "rc-progress"
import "./nowPlaying.css";

const ProgressBar = () => {
  return (
    <div>
      <div className="bar-cont">
        <Line 
        percent="20"
        strokeColor="#0B163D"
        strokeWidth={0.7}
        trailWidth={2}
        />
        </div>
      </div>
  )
}

export default ProgressBar