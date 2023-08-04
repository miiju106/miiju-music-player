import React from 'react'
import "./songQueue.css"

const SongQueue = ({tracks, setCurrentIndex, currentIndex, cart}) => {
  console.log(cart)

  // console.log(tracks)
  // console.log(currentIndex)
  return (
    <div className='track-list-card'>
      <p className='p-tracklist'>Favourites</p>
      {cart.length !== 0 ? (
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
      ):(<p className='track-list-name'>No Favourites Added</p>)}
      </div>
  )
}

export default SongQueue