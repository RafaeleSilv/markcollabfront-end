import React from 'react';
import './PopUpSalvarInfos.css'; // Importando o CSS

const PopUpSalvarInfos = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          Dados Alterados!
        </div>
        <div className="popup-body">
          <h2>INFORMAÇÕES SALVAS COM SUCESSO!</h2>
          <div className="popup-buttons">
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpSalvarInfos;
