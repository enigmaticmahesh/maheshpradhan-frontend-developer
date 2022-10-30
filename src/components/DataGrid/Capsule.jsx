import React from 'react';

export default function Capsule({ capsuleData, openModal }) {
  return (
    <div className="capsule" onClick={openModal}>
      <div className="capsule__content">
        <div className="capsule__serial">
          <h2>{capsuleData.capsule_serial}</h2>
          <span>Capsule Serial</span>
        </div>
        <div className="capsule__details">
          <span>{capsuleData.details || 'N/A'}</span>
        </div>
      </div>
      <div className="capsule__status">
        <span className="rounded-full capitalize">{capsuleData.status}</span>
      </div>
    </div>
  );
}
