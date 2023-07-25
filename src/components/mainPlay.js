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
  isPlaying,
  setIsPlaying,
  cart,
  setCart
}) => {
  
  const [playActive, setPlayActive] = useState(0);

  const location = useLocation();

  // const whenPlayed = isPlaying ? "playlist-body active" : "playlist-body";

  // const [present, setPresent] = useState(false)

  // let present = false;

  // const clickfavourite = playActive ? "btn-fav active" : "btn-fav"

  // const[allTracks, setAllTracks] = useState(null)

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

  // const handleClick = (item) => {

  //   const arr = cart.find((product) => item.id == product.id)

  //   if (!arr) {
  //     setCart([...cart, item]);
  //   }

  //    };

  //   const handleClick = (item) =>{

  //     const checkItemIndex = cart?.map((product, index)=>{
  //       if(item.id === product.id){
  //         return index;
  //       }
  //        return;
  //     })
  //     console.log(checkItemIndex)
  //   if(checkItemIndex){
  //     const newCart = cart?.pop(checkItemIndex)
  //     setCart(cart=> {
  //       cart.splice(checkItemIndex, 1)
  //       // return cart;
  //       })
  //  }else{
  //   setCart([...cart, item])
  //  }

  //   }

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
      // setPlayActive(item.id)
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
      {/* <Search/> */}
      <div className="playlist-main">
        <div className="playlist-head">
          <p className="first-head">TITLE</p>

          <p className="second-head">ALBUM</p>
          <p className="third-head">DATE RELEASE</p>
          <p>TIME</p>
        </div>

        {tracks?.map((track, index) => (
          <div className="playlist-body">
            {/* {console.log(currentTrack)} */}

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
              {/* className={clickfavourite} */}
            </div>
            <div className="firstDiv-name">
              <p className="track-name">{track.track.album?.name}</p>
              <div className={cart.includes(track.track) ? "btn-fav active":"btn-fav"} key={track.track.id} onClick={() => handleClick(track.track)}>
                  <FavoriteIcon />
              </div>
            </div>
            <div className="secondDiv-name">
              <p className="track-name">{track.track.album?.release_date}</p>
            </div>
            <div className=" third-div">
              <p className="track-name">0:30</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPlay;
