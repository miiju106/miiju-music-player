import React from "react";
import clientApi from "../components/spotifyApi";
import { useState, useEffect } from "react";
import "./library.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import Search from "../components/search";

const Library = () => {
  const [playlist, setPlaylist] = useState(null);
  const [allTracks, setAllTracks] = useState(null)
  // const [orderedPlaylist, setOrderedPlaylist] = useState(null);

  // This is the logic to arrange the playlists alphabetically;
  playlist?.sort((a, b) => {
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

  // const theIds = [] 
  //  playlist?.forEach((playlists, index)=>{
  //   // console.log(playlists.id)
  //    theIds?.push(playlists.id)
    
  //   })
    
    
  //   const playlistId = theIds.join(',')
  //   console.log(playlistId)


  useEffect(() => {
    clientApi
      .get("me/playlists")
      .then((resp) => {
        console.log(resp);
        setPlaylist(resp.data.items);
        // setOrderedPlaylist(sortPlayLists);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  


  console.log(playlist);
   
  // console.log(playlist.id);
  // console.log(sortPlayLists)

  const navigate = useNavigate();

  const playPlaylist = (idName, songName) => {
    navigate(`/player/${songName}`, { state: { id: idName, song: songName } });
  };

  return (
    <div className="inner-screen">
      <Search/>
      
      {playlist?.map((playlists) => (
        <div
          className="library-card"
          key={playlists.id}
          onClick={() => playPlaylist(playlists.id, playlists.name)}
        >
          <img src={playlists.images[0].url} alt="" className="library-img" />
          <p className="library-name">{playlists.name}</p>
          <p className="song-total">{playlists.tracks.total} Songs</p>
          <div className="library-play">
            <PlayCircleIcon style={{ fontSize: "35px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Library;
