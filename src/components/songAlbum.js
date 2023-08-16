import React from 'react'
import "./songAlbum.css";


const SongAlbum = ({album}) => {
  const artistNames = []
  album?.artists?.forEach((element)=>{
    artistNames?.push(element.name)
  })
  // console.log(artistNames)
  return (
    <div className='album-card'>
      <img
        src={album?.images[0]?.url}
        alt=""
        className='library-img'
      />
      <div className='album-title'><h3 >{`${album?.name}-${artistNames?.join(",")}`}</h3></div>
      
      <p className='album-track-title'>{`${album?.name} is an/a ${album?.album_type} by ${artistNames?.join(",")} with ${album?.total_tracks} tracks`}</p>
      <p className='album-date-title'>{`Release date ${album?.release_date}`}</p>
      </div>
  )
}

export default SongAlbum