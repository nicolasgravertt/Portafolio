import React from 'react';
import AvatarImg from '../../../assets/images/avatar.jpg';

function Avatar() {
  return (
    <img
      src={AvatarImg}
      alt="Nicolas Gravertt"
      style={{
        borderRadius: '50%',
        width: '270px',
        height: '270px',
        objectFit: 'cover',
        objectPosition: '0 0px',
      }}
    />
  );
}

export default Avatar;
