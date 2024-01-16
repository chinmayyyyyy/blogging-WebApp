import React from 'react';
import './extro.css';
import leftImg1 from '../assets/images/pexels-lumn-167684.jpg';
import leftImg2 from '../assets/images/pexels-james-wheeler-417074.jpg';
import rightImg from '../assets/images/pexels-eberhard-grossgasteiger-1366919.jpg';

const Extro = () => {
  return (
  <div className='extroSection'>
    <div className='extroImages'>
        <div className="leftImage">
            <img className='left1' src={leftImg1} alt="" />
            <img className='left1' src={leftImg2} alt="" /></div>
        <div className="rightImage">
              <img className='right1' src={rightImg} alt="" />
        </div>
    </div>
    <div className='extroText'>
      <h3>
    This space is for big words with a bold message.
    </h3>
    </div>
  </div>
  );
};

export default Extro;
