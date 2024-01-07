import React from 'react';

const VideoHome = ({ videoUrl }) => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoHome;
