import React from 'react';
import Pic from '../../assets/deee.png';

let Dp = props => {

  let DivHeight = props.DivHeight;
  let DivWidth = props.DivWidth;

  let DivStyle = {
    height: DivHeight,
    width: DivWidth,
    borderRadius: props.Circle ? '50%' : '0',
    overflow: 'hidden'
  }

  let ImgStyle = {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%'
  }

  return (
    <div style={DivStyle}>
      <img style={ImgStyle} src={Pic} alt='display' />
    </div>
  )
}

export default Dp;