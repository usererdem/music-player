import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    setCurrentSong(selectedSong[0]);
    /* setCurrentSong(song); */

    // Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // check if the song is playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
