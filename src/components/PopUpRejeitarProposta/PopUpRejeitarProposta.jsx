import React, { useState } from 'react';
import './PopUpRejeitarProposta.css'; // Importando o CSS

const PopUpRejeitarProposta = ({ onClose }) => {
  const [comentario, setComentario] = useState('');

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleConfirmar = () => {
    // Adicione a lógica para confirmar aqui, como salvar o comentário ou enviar para o servidor
    console.log('Comentário:', comentario);
    onClose(); // Fecha o pop-up após confirmar
  };

  const handleCancelar = () => {
    setComentario(''); // Limpa o comentário
    onClose(); // Fecha o pop-up
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          Rejeitar proposta
        </div>
        <div className="popup-body">
          <p className="popup-top-text">
            O freelancer será avisado que o projeto "Nome_do_projeto" foi rejeitado. Deseja fazer um comentário para o freelancer?
          </p>
          <h3 className="popup-comment-title">Comentário</h3>
          <textarea
            className="popup-comment-textarea"
            value={comentario}
            onChange={handleComentarioChange}
            placeholder="Digite seu comentário aqui..."
          />
          <div className="popup-buttons">
            {/* Botões confirm e cancelar */}
            <button className="popup-button confirmar" onClick={handleConfirmar}>
              Confirmar
            </button>
            <button className="popup-button cancelar" onClick={handleCancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpRejeitarProposta;
