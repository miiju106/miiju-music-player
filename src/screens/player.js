
import {useState, useEffect} from "react"
import { useLocation} from "react-router-dom";
import "./player.css";
import SongAlbum from "../components/songAlbum";
import SongQueue from "../components/songQueue";
import NowPlaying from "../components/nowPlaying";
import MainPlay from "../components/mainPlay";
import clientApi from "../components/spotifyApi";

const Player = () => {
  const location = useLocation();
  // console.log(location);
  // console.log(location.state.id);
  const mySong = location.state.song;
  // console.log(location.state.song);

  

 


  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    if(location.state){
      clientApi
      .get(`playlists/${location.state.id}/tracks`)
      .then((resp) => {
        // console.log(resp)
        setTracks(resp.data.items)
        setCurrentTrack(resp.data.items[0].track)
       })
      .catch((err) => {
        // console.log(err.message);
      });
    }
    
  }, [location.state]);

  useEffect(()=>{
    setCurrentTrack(tracks[currentIndex]?.track)

  },[currentIndex, tracks])
  
// console.log(currentTrack)
// console.log(tracks)
// console.log(currentIndex)


  return (
    <div className="player-screen">
      <div className="player-firstdiv" >
        <MainPlay cart={cart} setCart={setCart} isPlaying={isPlaying} setIsPlaying={setIsPlaying} tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
        <div className="player-seconddiv">
          <SongAlbum album={currentTrack?.album}/>
          <SongQueue cart={cart} tracks={tracks} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
        </div>
      </div>
      {/* <h2>
        Welcome to <span className="mySong-name">{mySong}</span> lists
      </h2> */}
      <NowPlaying isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentTrack={currentTrack} tracks={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
    </div>
  );
};

export default Player;
