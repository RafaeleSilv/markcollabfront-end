import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./PublicacaoProjetoContratante.css";

const PublicacaoProjetoContratante = () => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSpecifications, setProjectSpecifications] = useState("");
  const [projectPrice, setProjectPrice] = useState("");
  const [employerCpf, setEmployerCpf] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!projectTitle || !projectDescription || !projectPrice || !employerCpf) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const token = localStorage.getItem("authToken"); // Recupera o token salvo no login
    if (!token) {
      alert("Erro: Token de autenticação não encontrado. Faça login novamente.");
      navigate("/Login");
      return;
    }

    try {
      const response = await fetch(
        `https://markcollab-backend.onrender.com/api/projects/${employerCpf}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            projectTitle, // Nome do projeto
            projectDescription, // Descrição do projeto
            projectSpecifications, // Especificações do projeto
            projectPrice: parseFloat(projectPrice), // Preço (convertido para número)
            open: true, // Campo adicional para indicar se o projeto está aberto
            status: "Ativo", // Status inicial do projeto
          }),
        }
      );

      if (response.ok) {
    
        const data = await response.json();
        alert("Projeto criado com sucesso!");
        navigate("/ProjetoPublicadoContratante"); // Redireciona para a página inicial
      } else {
        const errorData = await response.json();
        alert(
          `Erro: ${
            errorData.message || "Ocorreu um erro na publicação do projeto."
          }`
        );
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div>
      <Navbar />
      <a href="/meusprojetoscontratante" className="meusprojetos-button">
        Ir para os meus projetos publicados
      </a>
      <div className="publicacao-container">
        <header className="publicacao-header">
          <h1 className="publicacao-title">Publicação de Projeto</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleSubmit}>
          <div className="publicacao-field">
            <label htmlFor="nomeProjeto">Nome do projeto:</label>
            <input
              type="text"
              id="nomeProjeto"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="descricaoProjeto">Descrição do projeto:</label>
            <textarea
              id="descricaoProjeto"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="publicacao-field">
            <label htmlFor="especificacao">Especificações do projeto:</label>
            <input
              type="text"
              id="especificacao"
              value={projectSpecifications}
              onChange={(e) => setProjectSpecifications(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              value={projectPrice}
              onChange={(e) => setProjectPrice(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="employerCpf">CPF do Contratante:</label>
            <input
              type="text"
              id="employerCpf"
              value={employerCpf}
              onChange={(e) => setEmployerCpf(e.target.value)}
              required
            />
          </div>
          <button className="publicacao-button" type="submit">
            Publicar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PublicacaoProjetoContratante;
