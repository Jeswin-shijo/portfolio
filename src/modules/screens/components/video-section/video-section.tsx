import React, { useRef, useState } from 'react';
import './video-section.css'; // if you're putting styles separately

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="col-lg-12 col-md-12 col-12 col-xl-12 col-xxl-6 text-center position-relative">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-player"
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls={isPlaying}
          playsInline
        />
        {!isPlaying && (
          <div className="play-btn-circle" onClick={handlePlay}>
            <i className="bi bi-play-fill play-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
