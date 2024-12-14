import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './ProjetoPublicadoContratante.css';

const ProjetoPublicadoContratante = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  // Funções para navegação
  const irParaMeusProjetos = () => {
    navigate('/MeusProjetosContratante');
  };

  const publicarMaisProjetos = () => {
    navigate('/PublicacaoProjetoContratante');
  };

  return (
    <div>
      <Navbar />
      <div className="projeto-publicado-container">
        <h1 className="projeto-publicado-title">Projeto publicado com sucesso!</h1>
        
        {/* Botões que agora usam navigate, mantendo o estilo original */}
        <a
          href="/MeusProjetosContratante"
          onClick={(e) => { e.preventDefault(); irParaMeusProjetos(); }}
          className="projeto-publicado-button"
        >
          Ir para os meus projetos
        </a>
        <a
          href="/PublicacaoProjetoContratante"
          onClick={(e) => { e.preventDefault(); publicarMaisProjetos(); }}
          className="projeto-publicado-button"
        >
          Publicar mais projetos
        </a>
        
        <p className="projeto-publicado-footer-text">
          Em alguns instantes você começará a receber propostas
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProjetoPublicadoContratante;
