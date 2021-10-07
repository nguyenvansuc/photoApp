import React from 'react';

import './banner.css';
export default function Banner(props) {
    const {title,background} = props
    const bannerStyle= background ? {backgroundImage:`url(${background})`} : {}
  return (
    <div>
      <div className="banner" style={bannerStyle}><span>{title}</span></div>
    </div>
  );
}
