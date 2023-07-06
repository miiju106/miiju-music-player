import React from "react";
import "./playControls.css";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeBar from "./volumeBar";

const PlayControls = ({
  currentTrack,
  setIsPlaying,
  isPlaying,
  handlePrev,
  handleNext,
  volume,
  setVolume,
}) => {
  const currentArtist = [];
  currentTrack?.album?.artists?.forEach((element) => {
    currentArtist?.push(element.name);
  });

  console.log(currentTrack);
  console.log(currentArtist);

  return (
    <div className="play-control-cont">
      <div className="play-control-name">
        <img
          src={currentTrack?.album?.images[0]?.url}
          alt=""
          className="control-img"
        />
        <div className="control-name-detail">
          <p className="control-song-title">{currentTrack?.name}</p>
          <p className="control-artist-title">{currentArtist?.join("|")}</p>
        </div>
      </div>
      <div className="play-control-icons">
        <SkipPreviousRoundedIcon
          style={{ fontSize: "40px" }}
          className="prev-icon"
          onClick={handlePrev}
        />
        <div onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <PauseCircleFilledRoundedIcon
              style={{ fontSize: "65px" }}
              className="play-pause-icon"
            />
          ) : (
            <PlayCircleRoundedIcon
              style={{ fontSize: "65px" }}
              className="play-pause-icon"
            />
          )}
        </div>

        <SkipNextRoundedIcon
          style={{ fontSize: "40px" }}
          className="prev-icon"
          onClick={handleNext}
        />
      </div>
      <div className="vol-cont">
        <VolumeDownOutlinedIcon className="vol-down" />
        <VolumeBar volume={volume} setVolume={setVolume} />

        <VolumeUpOutlinedIcon className="vol-up" />
      </div>
    </div>
  );
};

export default PlayControls;
