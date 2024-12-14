import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './BuscarProjetosFreelancerPrincipal.css';
import { Link } from 'react-router-dom';

const BuscarProjetosFreelancerPrincipal = () => {
  const [busca, setBusca] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Implementar a lógica de busca aqui
    console.log('Busca:', busca);
  };

  return (
    <div>
      <Navbar />
      <div className="buscar-container">
        <form className="buscar-form" onSubmit={handleSearch}>
          <h1 className="buscar-title">Buscar Projetos</h1>
          <div className="buscar-field">
            <label htmlFor="busca">O que você está procurando?</label>
            <input
              type="text"
              id="busca"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              required
            />
          </div>
          <button className="buscar-button" type="submit">Buscar</button>
        </form>
        <div className="resultados-container">
          <h2 className="resultados-title">Resultados da Busca</h2>
          <div className="resultados-list">
            {[1, 2, 3].map((result) => (
              <div key={result} className="resultado-item">
                <h3 className="resultado-title">Projeto {result}</h3>
                <p className="resultado-description">
                  Descrição do projeto {result}. Aqui está um breve resumo sobre este projeto.
                </p>
                <button className="resultado-button">Demonstrar Interesse</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuscarProjetosFreelancerPrincipal;