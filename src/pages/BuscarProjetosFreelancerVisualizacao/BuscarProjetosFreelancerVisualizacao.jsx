import React from 'react';
import Navbar from '../../components/navbar/Navbar'; // mudar essa página para se tornar do contratante
import Footer from '../../components/footer/Footer';
import './BuscarProjetosFreelancerVisualizacao.css';

const BuscarProjetosFreelancerVisualizacao = () => {
  return (
    <div>
      <Navbar />
      <div className="buscar-projetos-container">
        <h1 className="buscar-projetos-title">Projetos Disponíveis</h1>
        <div className="buscar-projetos-list">
          {[1, 2, 3].map((project) => (
            <div key={project} className="buscar-projeto-item">
              <h2 className="buscar-projeto-title">Nome do Projeto {project}</h2>
              <p className="buscar-projeto-description">
                Descrição breve do projeto. Este é o projeto número {project}.
              </p>
              <button className="buscar-projeto-button">Ver Detalhes</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuscarProjetosFreelancerVisualizacao;
