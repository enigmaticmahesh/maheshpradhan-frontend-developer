import React from 'react';
import ReactDOM from 'react-dom';

export default function CommonModal({
  modalData: capsuleData,
  isOpen,
  onClose,
}) {
  const handleModalClose = (element) => {
    if (element.classList.contains('modal__backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <section>
      <div
        className="modal__backdrop"
        onClick={(e) => handleModalClose(e.target)}
      >
        <div className="modal__container">
          <div className="details__wrapper">
            <div className="main__data">
              <div className="text-center">
                <h3>{capsuleData?.capsule_serial}</h3>
                <div className="subtitle">Capsule Serial</div>
              </div>
            </div>
            <div className="modal__capsule__data">
              <span>Capsule ID:</span>
              <span>{capsuleData?.capsule_id}</span>
            </div>
            <div className="modal__capsule__data">
              <span>Type&nbsp;/&nbsp;Status:</span>
              <span>
                {capsuleData?.type}&nbsp;/&nbsp;{capsuleData?.status}
              </span>
            </div>
            <div className="modal__capsule__data">
              <span>Original Launch:</span>
              <span>
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(new Date(capsuleData?.original_launch))}
              </span>
            </div>
            <div className="modal__capsule__details">
              <span>{capsuleData?.details || 'N/A'}</span>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </section>,
    document.getElementById('modalContainer')
  );
}
