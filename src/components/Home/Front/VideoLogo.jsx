import React from 'react';
import VideoMask from '../../../assets/images/VideoMask';

function VideoLogo(props) {
  return (
    <div {...props}>
      <VideoMask />
      <video autoPlay muted loop preload="auto">
        <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4" />
      </video>
    </div>
  );
}
export default VideoLogo;
