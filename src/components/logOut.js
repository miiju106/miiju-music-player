import React from 'react'
import "./logOut.css";
// import LogoutIcon from '@mui/icons-material/Logout';

const LogOut = ({spotifyToken,setSpotifyToken}) => {

    const removeToken = () =>{
        setSpotifyToken(window.localStorage.removeItem("token"))
        
      }
  return (
    <div className="logout-icon" >
        <button className='btn-logOut' onClick={removeToken}>LogOut</button>
     
     
      </div>
  )
}

export default LogOut