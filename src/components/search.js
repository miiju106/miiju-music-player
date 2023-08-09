import React from "react";
import TextField from "@mui/material/TextField";
import "./mainPlay.css";
import { useState, useEffect} from "react";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Search = ({
  searchTracks,
  wordFiltered,
  setWordFiltered,
  currentIndex,
  setCurrentIndex,
  setCurrentTrack,
  currentTrack,
}) => {
  // const {searchTracks, currentIndex, setCurrentIndex, currentTrack} =

  const [wordSearch, setWordSearch] = useState("");
  

  useEffect(()=>{
    setCurrentTrack(wordFiltered[currentIndex]?.track)

  },[currentIndex, wordFiltered]) 

  

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    console.log(searchWord);
    setWordSearch(searchWord);
    const filteredWord = searchTracks?.filter((list) =>
      list.track.name.toLowerCase().includes(wordSearch.toLowerCase())
    );
    

    if (searchWord == "") {
      setWordFiltered([]);
    } else {
      setWordFiltered(filteredWord);
    }
  };
  return (
    <>
      <TextField
        id="search-bar"
        className="text search-text"
        variant="outlined"
        placeholder="Search name of song"
        size="small"
        onChange={handleSearch}
      />


      {wordFiltered.map((list, index) => (
        
        <div className="playlist-body">
          
          <div className="title-div" onClick={() => setCurrentIndex(index)}>
              <div className="div-img">
                <img
                  src={list.track.album?.images[0]?.url}
                  alt=""
                  className="title-img"
                />
              </div>
              <div className="title-subdiv">
                <p className="track-name">{list.track?.name}</p>
              </div>
              <div className="title-play">
                {/* <PlayCircleIcon style={{ fontSize: "25px" }} /> */}
              </div>
              
            </div>

        </div>
      ))}
    </>
  );
};

export default Search;
