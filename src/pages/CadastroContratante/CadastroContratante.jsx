import React, { useState } from 'react';
import './CadastroContratante.css';
import { Link, useNavigate } from 'react-router-dom'; // Importando o useNavigate

const CadastroContratante = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nome, setNome] = useState('');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleCadastro = async (event) => {
    event.preventDefault();

    const novoContratante = {
      role: "EMPLOYER",
      cpf,
      name: nome,
      username, /*username: email.split("@")[0],*/
      email,
      password: senha,
      companyName,
    };
  
    console.log("Dados enviados para o backend:", novoContratante);
  
    try {
      const response = await fetch(
        "https://markcollab-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoContratante),
        }
      );
  
      const contentType = response.headers.get("Content-Type");
  
      if (response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("Cadastro realizado com sucesso (JSON):", data);
          alert(data.message || "Cadastro realizado com sucesso!");
        } else {
          const text = await response.text();
          console.log("Cadastro realizado com sucesso (Texto):", text);
          alert(text || "Cadastro realizado com sucesso!");
        }
        navigate("/Login");
      } else {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Erro ao cadastrar (JSON):", errorData.message);
          alert("Erro ao cadastrar: " + errorData.message);
        } else {
          const errorText = await response.text();
          console.error("Erro ao cadastrar (Texto):", errorText);
          alert("Erro ao cadastrar: " + errorText);
        }
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        {/* Espaço reservado para conteúdo ou branding */}
        <Link to="/" className="login-arrow" style={{ cursor: "pointer" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 59 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
            <path
              d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
      <div className="cadastro-right">
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <h1 className="cadastro-title">Cadastre-se</h1>
          <div className="cadastro-field">
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="CPF">CPF:</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="email">Email Corporativo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
         
          <div className="cadastro-field">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="companyName">Nome da sua Empresa:</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <button 
            className="cadastro-button" 
            type="submit" // Botão agora é de submit
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroContratante;
