import React, { useEffect } from 'react';

import './feedback.scss';

function Feedback() {
  // pasiimti feedback reiksmes is authCtx ir padaryti kad veiktu parodymas

  const handleClose = () => {};

  return show ? (
    <div className={`feedback-container ${type}`}>
      <p className="msg">{msg}</p>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
}

export default Feedback;
