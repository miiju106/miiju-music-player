import { useEffect, useState } from "react";
import "./App.css";
import LogIn from "./components/logIn";
import LogOut from "./components/logOut";
import { setClientToken } from "./components/spotifyApi";
// import clientApi from "./components/spotifyApi";
import Sidebar from "./components/sidebar";
import Library from "./screens/library"
import Feed from "./screens/feed"
import Trending from "./screens/trending"
import Player from "./screens/player"
import MainPlayer from "./screens/mainPlayer"
import Favourites from "./screens/favourites"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {
    const _token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!_token && hash) {
      const accessToken = hash.split("&")[0].split("=")[1];
      // console.log(accessToken);
      window.localStorage.setItem("token", accessToken);
      // console.log(hash)
      setSpotifyToken(accessToken);
      setClientToken(accessToken);
    } else {
      setSpotifyToken(_token);
      setClientToken(_token);
    }
  }, []);

  // console.log(spotifyToken);

  return !spotifyToken ? (
    <LogIn />
  ) : (
    <Router>
      <div className="main-screen">
      <Sidebar />
      <LogOut spotifyToken={spotifyToken} setSpotifyToken={setSpotifyToken}/>
      <Routes>
        <Route exact path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<MainPlayer />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
