import React from 'react';
import './PopUpSairDaConta.css'; // Importar a folha de estilo para o PopUpSairDaConta
import { FaDoorOpen } from 'react-icons/fa'; // Novo ícone de porta
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import { Link } from 'react-router-dom';

// Componente PopUpSairDaConta
const PopUpSairDaConta = ({ onClose, onConfirm }) => {
  const navigate = useNavigate(); // Inicializando o hook de navegação

  const handleConfirmExit = () => {
    onConfirm(); // Chama a função onConfirm do componente pai
    onClose(); // Fecha o pop-up após confirmar
  };

  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Barra azul com ícone */}
        <div className="popup-header">
          <FaDoorOpen className="popup-header-icon" /> {/* Novo ícone */}
          <span className="popup-header-title">SAIR DA CONTA</span>
        </div>

        {/* Texto principal do pop-up */}
        <div className="popup-body">
          <p className="popup-message">TEM CERTEZA QUE DESEJA SAIR DA SUA CONTA?</p>
        </div>

        {/* Botões de "SAIR" e "CANCELAR" */}
        <div className="popup-footer">
          <Link to="/"button
            className="popup-button sair"
            onClick={handleConfirmExit} // Chama a função que realiza a navegação
          >
            SAIR
          </Link>
          <button className="popup-button cancelar" onClick={onClose}>
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpSairDaConta;
