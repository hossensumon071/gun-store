import React from 'react';
import './Modal.css';

const Modal = ({data, setModalData}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label onClick={()=> setModalData()} htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{data.name}</h3>
          <p className="py-4">{data.action}</p>
        </label>
      </label>
    </div>
  );
};

export default Modal;