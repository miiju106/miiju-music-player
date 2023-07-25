import React from 'react'
import "./songQueue.css"

const SongQueue = ({tracks, setCurrentIndex, currentIndex, cart}) => {
  console.log(cart)

  // console.log(tracks)
  // console.log(currentIndex)
  return (
    <div className='track-list-card'>
      <p>Favourites</p>
      <div >
        {cart?.map((track, index)=>(
          <div key={track.id} className="track-list-item" onClick={()=>setCurrentIndex(index)}>
            {console.log(track)}
            {/* {console.log(track.track.id)} */}
            {/* {console.log(index)} */}
            <p className='track-list-name'>{track.name}</p>
            <p className='track-list-duration'>0:30</p>
          </div>
        ))}
      </div>
      </div>
  )
}

export default SongQueue