import React from 'react';
import TiltPhaseSix from '../../components/TiltPhaseSix';

const options = {
  max: 10, // defines the tilt rotation amount (in degrees)
  perspective: 2000, // the transform perspective, (lower = more extreme)
  scale: 1.2, // amount to zoom in onMouseEnter (ie: 1 = 100%, 2 = 200%)
}

const StoreRow = () => {

  return (
    <TiltPhaseSix options={options} style={{ height: "100%", cursor: 'pointer' }}>
      <div className="imgContainer">
        <img className="imageDevice" src={require(`../../assets/images/shoes/shoe1.png`)} alt="Test" style={{ width: '200px' }} />
      </div>
    </TiltPhaseSix>
  )
}

export default StoreRow;


// reverse: if true, photo will transform in the opposite direction
// easing: allows you to change the easing style and values (default is great)
// speed: effect transition speed (in milliseconds)
// transition: transition on or off (boolean)
// axis: disable an axis (string, value can be X or Y)
// reset: reset the effect onMouseLeave (boolean)
