import React from 'react';
import './PopUpAceitarProposta.css'; // Importando o CSS

const PopUpAceitarProposta = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          Aceito!
        </div>
        <div className="popup-body">
          <h2>Contrato feito! Vamos notificar o profissional.</h2>
          <div className="popup-buttons">
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAceitarProposta;
