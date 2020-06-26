import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import StoreRow from '../../containers/StoreRow';
import Dialog from '../../components/Dialog';

const Storefront = () => {
  const [open, setOpen] = useState(false);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    dispatch(actions.setLoading(true));
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(loading);

  return (
    <div className="Storefront">
      <div>
        <StoreRow handleOpen={handleOpen} />
      </div>
      <Dialog open={open} onClose={handleClose} />
    </div>
  )
}

export default Storefront;
