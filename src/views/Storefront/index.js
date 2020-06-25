import React from 'react';
// import { connect } from "react-redux";
// import * as actions from "../../redux/actions";
import StoreRow from '../../containers/StoreRow';

const Storefront = () => {
  return (
    <div className="Storefront">
      <div>
        <StoreRow />
      </div>
    </div>
  )
}

export default Storefront;
