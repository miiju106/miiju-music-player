import React from "react";
import { useState, useEffect, useRef } from "react";
import ProgressBar from "./progressBar";
import PlayControls from "./playControls";

const NowPlaying = ({
  currentTrack,
  tracks,
  currentIndex,
  setCurrentIndex,
  isPlaying,
  setIsPlaying,
}) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [playback, setPlayback] = useState(0);
  const [volume, setVolume] = useState(0.2);

  var audioTracks = tracks[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(tracks[0]?.track.preview_url));
  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;
  var currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(tracks.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addZero = (n) => {
    return n > 9 ? `${n}` : `0${n}`;
  };

  const formatTime = (time) => {
    if (time) {
      const minutes =
        Math.round(time / 60) < 10
          ? `0${Math.round(time / 60)}`
          : Math.round(time / 60);
      const seconds =
        Math.round(time % 60) < 10
          ? `0${Math.round(time % 60)}`
          : Math.round(time % 60);
      return `${minutes}:${seconds}`;
    }
    return `00:00`;
  };

  // this displays the track playback i.e the timer counter and gives us the ability to move to different parts of the audio
  const startTimer = () => {
    // clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  // this logic is used to play and pause an audio
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioTracks);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // handle setup when the index changes i.e when the track changes
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioTracks);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  // this logic is to clear any interval timers that might be running when the audio is paused
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    setElapsed(formatTime(duration));
  }, [trackProgress]);

  useEffect(() => {
    //   // currentPercentage = playback
    if (audioRef.current) {
      audioRef.current.currentTime = trackProgress;
      setTrackProgress(audioRef.current.currentTime);
    }

    //   setPlayback(currentPercentage)
    //   setTrackProgress(currentPercentage)
    //   // audioRef.current.currentTime = playback;
  }, [currentPercentage]);

  useEffect(() => {
    if (audioRef.current) {
      // startTimer()
      audioRef.current.volume = volume;
      setVolume(audioRef.current.volume);
    }
  }, [volume]);

  // const onScrub = (value) =>{
  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value
  //   setTrackProgress(value)

  // }

  // console.log(currentPercentage);
  // console.log(trackProgress);
  // console.log(elapsed);

  // console.log(duration);
  console.log(audioRef);
  // console.log(audioRef.current);
  // console.log(audioRef.current.currentTime);
  // console.log(audioRef.current.startTime);
  // console.log(audioRef.current.ended);
  // console.log(trackProgress);

  return (
    <div className="now-play-cont">
      <ProgressBar
        isPlaying={isPlaying}
        currentPercentage={currentPercentage}
        trackProgress={trackProgress}
        setTrackProgress={setTrackProgress}
        setPlayback={setPlayback}
        playback={playback}
        duration={duration}
      />
      <div className="play-duration">
        <p>00:{addZero(Math.round(trackProgress))}</p>
        <p>{elapsed}</p>
      </div>
      <PlayControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        handleNext={handleNext}
        handlePrev={handlePrev}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default NowPlaying;
