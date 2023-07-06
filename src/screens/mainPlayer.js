import React from "react";
import clientApi from "../components/spotifyApi";
import { useState, useEffect } from "react";
import Search from "../components/search";
import "./library.css";
import "./mainPlayer.css";
import { useNavigate } from "react-router-dom";
import MainPlaylist from "../components/mainPlaylist";
import MainPlaylistTrack from "../components/mainPlaylistTrack";

const MainPlayer = () => {
  const [mainPlaylist, setMainPlaylist] = useState(null);
  const [currentMainPlaylist, setCurrentMainPlaylist] = useState({});
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  
  // This is the logic to arrange the playlists alphabetically;
  mainPlaylist?.sort((a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });



  // useEffect(() => {
  //   clientApi
  //     .get("search?q=" + search + "&type=artist")
  //     .then((resp) => {
  //       console.log(resp);
  //      ;
  //       // setOrderedPlaylist(sortPlayLists);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  console.log(mainPlaylist);
  console.log(currentMainPlaylist);

  useEffect(() => {
    clientApi
      .get("me/playlists")
      .then((resp) => {
        console.log(resp);
        setMainPlaylist(resp.data.items);
        setCurrentMainPlaylist(resp.data.items[playlistIndex]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [playlistIndex,]);


  // useEffect(()=>{
  //   setCurrentMainPlaylist(mainPlaylist[playlistIndex])

  // }, [playlistIndex, mainPlaylist])

  useEffect(() => {
    clientApi
      .get(`playlists/${currentMainPlaylist.id}/tracks`)
      .then((resp) => {
        // console.log(resp)
        console.log(resp.data.items);
        setPlaylistTracks(resp.data.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [currentMainPlaylist]);

  console.log(currentMainPlaylist.id);
  console.log(playlistTracks);

  

  // useEffect(()=>{
  //   setCurrentMainPlaylist(mainPlaylist[playlistIndex])

  // },[playlistIndex, mainPlaylist])

  return (
    <div className="mainPlayer-screen">
      <Search />
      {currentMainPlaylist && (
        <MainPlaylist
          mainPlaylist={mainPlaylist}
          currentMainPlaylist={currentMainPlaylist}
          playlistIndex={playlistIndex}
        setPlaylistIndex={setPlaylistIndex}
        />
      )}
      <MainPlaylistTrack
        playlistTracks={playlistTracks}
        mainPlaylist={mainPlaylist}
        currentMainPlaylist={currentMainPlaylist}
        
      />
    </div>
  );
};

export default MainPlayer;
