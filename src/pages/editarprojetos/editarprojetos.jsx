import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './editarprojetos.css';

const Editarprojetos = () => {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [especificacao, setEspecificacao] = useState('');
  const [preco, setPreco] = useState('');
  const [projectId, setProjectId] = useState(''); // ID do projeto
  const [status, setStatus] = useState(''); // Status do projeto
  const [employerCpf] = useState('98765432110'); // CPF mockado

  // Atualizar os detalhes do projeto
  const handleEditProject = async (event) => {
    event.preventDefault();

    if (!projectId || !nomeProjeto || !descricaoProjeto || !especificacao || !preco) {
      alert('Por favor, preencha todos os campos antes de atualizar o projeto.');
      return;
    }

    try {
      const payload = {
        projectTitle: nomeProjeto,
        projectDescription: descricaoProjeto,
        projectSpecifications: especificacao,
        projectPrice: parseFloat(preco),
      };

      const response = await axios.put(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/${employerCpf}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Projeto atualizado com sucesso:', response.data);
      alert('Projeto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o projeto:', error.response || error.message);
      alert(
        `Erro ao atualizar o projeto: ${
          error.response?.data?.message || error.message || 'Erro desconhecido'
        }`
      );
    }
  };

  // Atualizar o status do projeto
  const handleUpdateStatus = async () => {
    if (!projectId || !status) {
      alert('Por favor, preencha o ID do projeto e selecione um status.');
      return;
    }

    try {
      const response = await axios.put(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/status/${employerCpf}`,
        JSON.stringify(status), // Envia o status como JSON no corpo da requisição
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Status atualizado com sucesso:', response.data);
      alert('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o status:', error.response || error.message);
      alert(
        `Erro ao atualizar o status: ${
          error.response?.data?.message || error.message || 'Erro desconhecido'
        }`
      );
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
          <h1 className="publicacao-title">Editar projeto:</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleEditProject}>
          <div className="publicacao-field">
            <label htmlFor="projectId">ID do projeto:</label>
            <input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="nomeProjeto">Nome do projeto:</label>
            <input
              type="text"
              id="nomeProjeto"
              value={nomeProjeto}
              onChange={(e) => setNomeProjeto(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="descricaoProjeto">Descrição do projeto:</label>
            <textarea
              id="descricaoProjeto"
              value={descricaoProjeto}
              onChange={(e) => setDescricaoProjeto(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="publicacao-field">
            <label htmlFor="especificacao">Especificações do projeto:</label>
            <input
              type="text"
              id="especificacao"
              value={especificacao}
              onChange={(e) => setEspecificacao(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
          <button className="publicacao-button" type="submit">
            Atualizar Projeto
          </button>
        </form>
        <div className="status-update">
          <label htmlFor="status">Atualizar Status do Projeto:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Selecione um status</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
          <button onClick={handleUpdateStatus}>Atualizar Status</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editarprojetos;
