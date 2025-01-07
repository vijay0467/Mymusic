import { useState } from "react";
import Header from "./Header";
import Albums from "./Albums";
import Player from "./Player";
import { albums } from "../data/songsData";

const MusicApp = ({ onHandleDark, mode }) => {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0); // Track album index
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track song index
  const [currentSong, setCurrentSong] = useState(albums[0].songs[0].src); // Current song
  const [currentImg, setCurrentImg] = useState(albums[0].songs[0].image); // Current image
  const [isPlaying, setIsPlaying] = useState(false); // Play status

  const handleNext = () => {
    const currentAlbum = albums[currentAlbumIndex];
    if (currentSongIndex < currentAlbum.songs.length - 1) {
      // Move to the next song in the current album
      const nextSongIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextSongIndex);
      setCurrentSong(currentAlbum.songs[nextSongIndex].src);
      setCurrentImg(currentAlbum.songs[nextSongIndex].image);
    } else if (currentAlbumIndex < albums.length - 1) {
      // Move to the first song of the next album
      const nextAlbumIndex = currentAlbumIndex + 1;
      setCurrentAlbumIndex(nextAlbumIndex);
      setCurrentSongIndex(0);
      setCurrentSong(albums[nextAlbumIndex].songs[0].src);
      setCurrentImg(albums[nextAlbumIndex].songs[0].image);
    }
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const currentAlbum = albums[currentAlbumIndex];
    if (currentSongIndex > 0) {
      // Move to the previous song in the current album
      const prevSongIndex = currentSongIndex - 1;
      setCurrentSongIndex(prevSongIndex);
      setCurrentSong(currentAlbum.songs[prevSongIndex].src);
      setCurrentImg(currentAlbum.songs[prevSongIndex].image);
    } else if (currentAlbumIndex > 0) {
      // Move to the last song of the previous album
      const prevAlbumIndex = currentAlbumIndex - 1;
      const lastSongIndex = albums[prevAlbumIndex].songs.length - 1;
      setCurrentAlbumIndex(prevAlbumIndex);
      setCurrentSongIndex(lastSongIndex);
      setCurrentSong(albums[prevAlbumIndex].songs[lastSongIndex].src);
      setCurrentImg(albums[prevAlbumIndex].songs[lastSongIndex].image);
    }
    setIsPlaying(true);
  };

  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <Header onHandleDark={onHandleDark} mode={mode} />
      
      {/* Albums Section */}
      <Albums
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />

      {/* Player Section */}
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default MusicApp;
