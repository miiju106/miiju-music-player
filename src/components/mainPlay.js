import React from "react";
import "./mainPlay.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./search";
import MainSongQueue from "./mainSongQueue";
import clientApi from "./spotifyApi";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MainPlay = ({
  tracks,
  currentIndex,
  setCurrentIndex,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  cart,
  setCart
}) => {
  
  const [wordFiltered, setWordFiltered] = useState([]);

 

  

  // const id = tracks?.forEach((track, index)=>{
  //   console.log(track.track.id)
  //   return track.track.id
  //   })

  // console.log(currentTrack.id);
  // console.log(location);
  // console.log(playlist)

  // const handleClick = (item) => {
  //   let present = false;
  //   cart.forEach((product) => {

  //     if (item.id == product.id)
  //     present = true;
  //   });
  //   if (present)
  //   return;

  //   setCart([...cart, item]);

  //    };

  
  

  const handleClick = (item) => {
    const checkItemIndex = (cart, item) => {
      let cartArray;

      if (cart && cart.length != 0) {
        cart?.map((product, index) => {
          if (item.id === product.id) {
            console.log(item.id, product.id);
            console.log(index);
            cartArray = index;
            //  return;
          }
        });
      }
      return cartArray;
    };
    console.log(checkItemIndex(cart, item));

    if (checkItemIndex(cart, item) != undefined) {
      const newCart = cart?.filter(
        (ferm, index) => index != checkItemIndex(cart, item)
      );
      setCart(newCart);
    } else {
      setCart([...cart, item]);
      
    }
  };

  console.log(cart);
  // console.log(cart.length);
  // console.log(state);
  // console.log(clickfavourite)

  tracks?.sort((a, b) => {
    let fa = a.track.name.toLowerCase();
    let fb = b.track.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (

    <div className="main-play">
      <Search wordFiltered={wordFiltered} setWordFiltered={setWordFiltered} searchTracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
      {wordFiltered.length == 0 && (
        <div className="playlist-main">
        <div className="playlist-head head-head">
          <p className="first-head">TITLE</p>

          <p className="second-head">ALBUM</p>
          <p className="third-head">DATE RELEASE</p>
          <p className="fourth-head">TIME</p>
        </div>

        {tracks?.map((track, index) => (
          <div className="playlist-body">
           

            <div className="title-div" onClick={() => setCurrentIndex(index)}>
              <div className="div-img">
                <img
                  src={track.track.album?.images[0]?.url}
                  alt=""
                  className="title-img"
                />
              </div>
              <div className="title-subdiv">
                <p className="track-name">{track.track?.name}</p>
                <p>{track.track.album?.artists[0].name}</p>
              </div>
              <div className="title-play">
                <PlayCircleIcon style={{ fontSize: "25px" }} />
              </div>
              
            </div>
            <div className="firstDiv-name">
              <p className="track-name">{track.track.album?.name}</p>
              {cart.includes(track.track) ? (
                <div className= "btn-fav active" key={track.track.id} onClick={() => handleClick(track.track)}>
                  <FavoriteIcon className="fav-icon"/>
              </div>
              ):(
                <div className= "btn-fav" key={track.track.id} onClick={() => handleClick(track.track)}>
                  <FavoriteBorderIcon className="fav-icon" />
              </div>
              )}
              
            </div>
            <div className="secondDiv-name">
              <p className="track-name">{track.track.album?.release_date}</p>
            </div>
            <div className=" third-div third-third">
              <p className="track-name">0:30</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default MainPlay;
