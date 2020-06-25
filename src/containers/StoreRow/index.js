import React from 'react';
import TiltPhaseSix from '../../components/TiltPhaseSix';

const options = {
  max: 30,
  perspective: 1000,
  scale: 1,
}

const StoreRow = () => {
  return (
    <TiltPhaseSix options={options} style={{
                    height: "100%"
                  }}>
      <div className="imgContainer">
        <img className="imageDevice" src={require(`../../assets/images/shoes/shoe1.png`)} alt="" />
      </div>
    </TiltPhaseSix>
  )
}

export default StoreRow;
