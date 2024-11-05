import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlayPause } from './musicSlice';

const Music = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    dispatch(togglePlayPause());
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTo = event.target.value;
    audioRef.current.currentTime = seekTo;
  };

  return (
    <div className="music-player">
      <div className="music-info">
        <img src={song.albumArt} alt="Album Art" />
        <div className="music-details">
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
        </div>
      </div>
      <audio ref={audioRef} src={song.url}></audio>
      <div className="player-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <span>{formatTime(currentTime)}</span> /{" "}
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Music;
