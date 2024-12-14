import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar"; // Ajuste o caminho, se necessário
import Footer from "../../components/footer/Footer"; // Ajuste o caminho, se necessário
import "./PropostaFreelancer.css"; // Arquivo de estilos para este componente

const PropostaFreelancer = () => {
  const [proposalValue, setProposalValue] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valor da proposta:", proposalValue);
    console.log("Descrição da proposta:", proposalDescription);
    // Adicione aqui a lógica de envio, como uma requisição para a API
  };

  return (
    <div>
      <Navbar />
      <div className="proposta-freelancer-container">
        <a href="/BuscarProjetosFreelancerPrincipal" className="back-link">
          &#8592; Voltar para o projeto
        </a>
        <h1 className="proposta-title">Título do Projeto</h1>
        <form className="proposta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="proposalValue">Valor da proposta</label>
            <div className="input-with-icon">
              <span className="currency-icon">R$</span>
              <input
                type="text"
                id="proposalValue"
                placeholder="Insira aqui o valor de sua proposta"
                value={proposalValue}
                onChange={(e) => setProposalValue(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="proposalDescription">Descrição da proposta</label>
            <textarea
              id="proposalDescription"
              placeholder="Escreva aqui sua proposta"
              value={proposalDescription}
              onChange={(e) => setProposalDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar proposta
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PropostaFreelancer;
