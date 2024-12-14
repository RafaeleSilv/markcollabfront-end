import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import PopUpAceitarProposta from '../../components/PopUpAceitarProposta/PopUpAceitarProposta';
import PopUpRejeitarProposta from '../../components/PopUpRejeitarProposta/PopUpRejeitarProposta';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './VisualizacaoMeusProjetosContratante.css';

const VisualizacaoMeusProjetosContratante = () => {
  const [isPopUpAceitarVisible, setPopUpAceitarVisible] = useState(false);
  const [isPopUpRejeitarVisible, setPopUpRejeitarVisible] = useState(false);
  const [propostas, setPropostas] = useState([
    { id: 1, nome: 'Freelancer 1', descricao: 'Proposta de trabalho exemplo 1', cpf: '12345678901' },
    { id: 2, nome: 'Freelancer 2', descricao: 'Proposta de trabalho exemplo 2', cpf: '10987654321' },
  ]); // Propostas fictícias com CPF do freelancer
  const [propostaParaExcluir, setPropostaParaExcluir] = useState(null);
  const [projectId] = useState('1'); // ID do projeto (mockado para o exemplo)
  const [employerCpf] = useState('98765432110'); // CPF do empregador (mockado para o exemplo)

  // Função para abrir o pop-up de aceitar proposta
  const handleAcceptProposal = async (freelancerCpf) => {
    try {
      const response = await axios.post(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/hire/${freelancerCpf}/${employerCpf}`,
        null, // Não é necessário corpo na requisição
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Freelancer contratado com sucesso:', response.data);
      alert('Freelancer contratado com sucesso!');
      setPopUpAceitarVisible(true); // Mostra pop-up de confirmação
    } catch (error) {
      console.error('Erro ao contratar o freelancer:', error.response || error.message);
      alert(
        `Erro ao contratar o freelancer: ${
          error.response?.data?.message || error.message || 'Erro desconhecido'
        }`
      );
    }
  };

  // Função para fechar o pop-up de aceitar proposta
  const handleClosePopUpAceitar = () => {
    setPopUpAceitarVisible(false);
  };

  // Função para abrir o pop-up de rejeitar proposta
  const handleRejectProposal = (id) => {
    setPropostaParaExcluir(id);
    setPopUpRejeitarVisible(true);
  };

  // Função para fechar o pop-up de rejeitar proposta
  const handleClosePopUpRejeitar = () => {
    setPopUpRejeitarVisible(false);
    setPropostaParaExcluir(null);
  };

  // Função para confirmar a rejeição da proposta
  const confirmRejectProposal = () => {
    setPropostas(propostas.filter((proposta) => proposta.id !== propostaParaExcluir));
    setPopUpRejeitarVisible(false);
    setPropostaParaExcluir(null);
  };

  return (
    <div>
      <Navbar />
      <div className="visualizacao-container">
        <header className="visualizacao-header">
          <Link to="/meusprojetoscontratante" className="visualizacao-backlink">
            Voltar para todos os projetos
          </Link>
          <h1 className="visualizacao-title">Visualização do Projeto</h1>
        </header>
        <div className="visualizacao-details">
          <h2 className="visualizacao-project-title">Nome_do_projeto</h2>
          <p className="visualizacao-project-date">Publicado em 22/7/2015</p>
          <p className="visualizacao-project-description">
            Descrição do projeto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="visualizacao-skills">
            <button className="visualizacao-skill-button">JavaScript</button>
            <button className="visualizacao-skill-button">Java</button>
            <button className="visualizacao-skill-button">HTML/CSS</button>
            <button className="visualizacao-skill-button">SpringBoot</button>
          </div>
        </div>
        <div className="visualizacao-proposals">
          <h2 className="visualizacao-proposals-title">Interessados</h2>
          <select className="visualizacao-filter">
            <option value="">Filtrar perfis</option>
            <option value="recentes">Mais recentes</option>
            <option value="antigas">Mais antigas</option>
            <option value="melhores-avaliadas">Melhores avaliadas</option>
          </select>
          {propostas.length > 0 ? (
            propostas.map((proposta) => (
              <div key={proposta.id} className="visualizacao-proposal">
                <div className="visualizacao-proposal-header">
                  <img src="/path/to/profile-pic.jpg" alt="Freelancer Profile" className="visualizacao-profile-pic" />
                  <h3 className="visualizacao-freelancer-name">{proposta.nome}</h3>
                  <div className="visualizacao-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="visualizacao-proposal-description">{proposta.descricao}</p>
                <div className="visualizacao-proposal-actions">
                 <Link to="/PerfilFreelancerContratante" button className="visualizacao-action-button">Ver Perfil</Link>
                  <button
                    className="visualizacao-action-button"
                    onClick={() => handleAcceptProposal(proposta.cpf)}
                  >
                    Contratar
                  </button>
                  <button
                    className="visualizacao-action-button"
                    onClick={() => handleRejectProposal(proposta.id)}
                  >
                    Recusar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="visualizacao-no-proposals">Nenhum interessado ainda.</p>
          )}
        </div>
      </div>
      <Footer />

      {/* Pop-up para mostrar quando aceitar a proposta */}
      {isPopUpAceitarVisible && <PopUpAceitarProposta onClose={handleClosePopUpAceitar} />}

      {/* Pop-up para mostrar quando recusar a proposta */}
      {isPopUpRejeitarVisible && (
        <div className="popup">
        <div className="popup-content">
  <p>Tem certeza de que deseja recusar esta proposta?</p>
  <div className="popup-buttons"> {/* Contêiner para os botões */}
    <button className="confirmar-button" onClick={confirmRejectProposal}>
      Sim
    </button>
    <button className="cancelar-button" onClick={handleClosePopUpRejeitar}>
      Não
    </button>
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default VisualizacaoMeusProjetosContratante;