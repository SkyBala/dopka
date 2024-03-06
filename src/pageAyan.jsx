

import React,{ useState, useRef } from 'react'
import music from "./ty.mp3"

function PageAyana() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef(null);
  
    const togglePlay = () => {
      if (!isPlaying) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
      setIsPlaying(!isPlaying);
    };
  
    const stopPlayback = () => {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
      setIsPlaying(false);
    };
  
  return (
    <div>
        <h1 className='audioH1'>Ayana</h1>
    <audio ref={audioPlayer} src={music} />
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={stopPlayback}>Stop</button>
    </div>
    </div>
  )
}

export default PageAyana