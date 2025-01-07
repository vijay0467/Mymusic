import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ currentSong, setIsPlaying, handleNext, handlePrevious, isPlaying }) => {
  return (
    <div className="player container p-4 shadow border border-danger position-fixed">
      <AudioPlayer
        className="audio-player color-dark"
        autoPlay={isPlaying}
        src={currentSong}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClickNext={handleNext} // Trigger the next song
        onClickPrevious={handlePrevious} // Trigger the previous song
        showSkipControls={true} // Show previous and next buttons
        onEnded={handleNext} // Auto-play next when the song ends
      />
    </div>
  );
};

export default Player;
