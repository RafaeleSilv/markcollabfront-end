import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './MeusProjetosFreelancer.css';

const MeusProjetosFreelancer = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Função para navegação
  const encontrarTrabalhos = () => {
    navigate('/BuscarProjetosFreelancerPrincipal');
  };

  // Função para formatar a data e hora
  const formatarDataHora = (data) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return new Date(data).toLocaleString('pt-BR', options);
  };

  return (
    <div>
      <Navbar />
      <div className="meusprojetosfreelancer-container">
        <header className="meusprojetosfreelancer-header">
          <h1 className="meusprojetosfreelancer-title">Meus Projetos Freelancer</h1>
        </header>
        <div className="meusprojetosfreelancer-controls">
          <select
            className="meusprojetosfreelancer-status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Selecione um status</option>
            <option value="concluido">Concluído</option>
            <option value="em-progresso">Em progresso</option>
            <option value="analisando">Analisando propostas</option>
          </select>
          
          {/* Botão que usa a navegação */}
          <button
            className="meusprojetosfreelancer-button"
            onClick={encontrarTrabalhos}
          >
            Encontrar Trabalhos
          </button>
        </div>
        
        <div className="meusprojetosfreelancer-list">
          {[1, 2, 3].map((project) => (
            <div key={project} className="meusprojetosfreelancer-item">
              <h2 className="meusprojetosfreelancer-item-title">Nome do projeto</h2>
              <p className="meusprojetosfreelancer-item-time">Descrição do projeto</p>

              {/* Adicionando especificações do projeto */}
              <div className="meusprojetosfreelancer-item-specifications">
                <strong>Especificações:</strong> 
                <p>Especificação do projeto - Detalhes sobre o que o freelancer precisa fazer.</p>
              </div>
              {/* Adicionando o preço do projeto */}
              <div className="meusprojetosfreelancer-item-price">
                <strong>Preço:</strong>
                <p>R$ 2.500,00</p> {/* Exemplo de preço */}
              </div>

              {/* Adicionando a data e hora de publicação */}
              <div className="meusprojetosfreelancer-item-published">
                <strong>Publicado em:</strong>
                <p>{formatarDataHora('2024-12-13T08:30:00')}</p> {/* Data de exemplo */}
              </div>

              <div className="meusprojetosfreelancer-item-options">
                {/* Opções do projeto, como editar ou ver mais detalhes */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeusProjetosFreelancer;
