import React from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook para navegação
import "./PopUpCadastro.css"; // CSS atualizado

const PopUpCadastro = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Criar a função de navegação

  // Se o pop-up não estiver aberto, ele não será renderizado
  if (!isOpen) return null;

  // Fechar o pop-up ao clicar fora do conteúdo
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Navegar para a tela de Cadastro
  const handleFreelancerClick = () => {
    navigate("/Cadastro"); // Redireciona para a página de Cadastro
  };

  // Navegar para a tela de CadastroContratante
  const handleContratanteClick = () => {
    navigate("/CadastroContratante"); // Redireciona para a página de CadastroContratante
  };

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup-content">
        {/* Barra azul no topo */}
        <div className="popup-header">
          <span>Responda para continuar</span>
        </div>
        {/* Corpo do pop-up */}
        <div className="popup-body">
          <h2>VOCÊ É FREELANCER OU CONTRATANTE?</h2>
          <div className="popup-buttons">
            <button
              className="popup-button freelancer"
              onClick={handleFreelancerClick}
            >
              Freelancer
            </button>
            <button
              className="popup-button contratante"
              onClick={handleContratanteClick}
            >
              Contratante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCadastro;
