import React from 'react'
import "./songQueue.css"

const SongQueue = ({tracks, setCurrentIndex, currentIndex}) => {

  console.log(tracks)
  console.log(currentIndex)
  return (
    <div className='track-list-card'>
      <p>Up Next</p>
      <div >
        {tracks?.map((track, index)=>(
          <div key={track.track.id} className="track-list-item" onClick={()=>setCurrentIndex(index)}>
            {console.log(track)}
            {/* {console.log(track.track.id)} */}
            {/* {console.log(index)} */}
            <p className='track-list-name'>{track.track.name}</p>
            <p className='track-list-duration'>0:30</p>
          </div>
        ))}
      </div>
      </div>
  )
}

export default SongQueue