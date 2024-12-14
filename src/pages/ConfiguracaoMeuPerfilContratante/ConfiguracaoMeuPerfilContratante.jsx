import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './ConfiguracaoMeuPerfilContratante.css';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos';  // Importando o PopUpSalvarInfos
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o PopUpSairDaConta
import { Link } from 'react-router-dom';

const ConfiguracaoMeuPerfilFreelancer = () => {
  const [nome, setNome] = useState('Carlos Silva');
  const [usuario, setUsuario] = useState('carlos.silva');
  const [cpf, setCpf] = useState('123.456.789-00');
  const [email, setEmail] = useState('carlos.silva@exemplo.com');
  const [empresa, setEmpresa] = useState('Empresa Exemplo');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false);  // Controle para mostrar o pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Controle para mostrar o pop-up de sair

  // Função que é chamada ao clicar em "Salvar"
  const handleSave = (event) => {
    event.preventDefault();
    // Exibir o pop-up quando o usuário clicar em "Salvar"
    setShowPopUpSalvar(true);

    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome:', nome);
    console.log('Usuário:', usuario);
    console.log('CPF:', cpf);
    console.log('Email:', email);
    console.log('Empresa:', empresa);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);
  };

  // Função para mostrar o pop-up de sair
  const handleShowPopUpSair = () => {
    setShowPopUpSair(true); // Exibe o pop-up de sair
  };

  // Função para fechar o pop-up de salvar
  const handleClosePopUpSalvar = () => {
    setShowPopUpSalvar(false);
  };

  // Função para fechar o pop-up de sair
  const handleClosePopUpSair = () => {
    setShowPopUpSair(false);
  };

  return (
    <div>
      <Navbar />
       {/* Navbar */}
       <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to='/PerfilContratante'>Meu Perfil</Link>
          </li>
          {/* Link para Editar Perfil */}
          <li>
            <Link to='/EditarPerfilContratante'>Editar Perfil</Link>
          </li>
          {/* Link para Configurações */}
          <li>
            <Link to='/ConfiguracaoMeuPerfilContratante'>Dados Pessoais </Link>
          </li>
          {/* Link "Sair" que agora abre o pop-up */}
          <li>
            <Link to ="#"button onClick={handleShowPopUpSair}>Sair</Link>
          </li>
        </ul>
      </nav>
      <div className="configuracao-container">
       
        <main className="configuracao-main">
          {/* Exibição de dados antes do formulário */}
          <div className="dados-pessoais-container">
            <h1 className="configuracao-title">Seus dados pessoais</h1>
            <div className="dados-pessoais-field">
              <strong>Nome Completo:</strong> {nome}
            </div>
            <div className="dados-pessoais-field">
              <strong>Usuário:</strong> {usuario}
            </div>
            <div className="dados-pessoais-field">
              <strong>CPF:</strong> {cpf}
            </div>
            <div className="dados-pessoais-field">
              <strong>Email Corporativo:</strong> {email}
            </div>
            <div className="dados-pessoais-field">
              <strong>Nome da sua Empresa:</strong> {empresa}
            </div>
          </div>

          {/* Formulário para edição dos dados */}
          <form className="configuracao-form" onSubmit={handleSave}>
            <h1 className="configuracao-title">Altere seus dados pessoais</h1>
            <div className="configuracao-field">
              <label htmlFor="nome">Nome Completo:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="usuario">Usuário:</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="email">Email Corporativo:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="empresa">Nome da sua Empresa:</label>
              <input
                type="text"
                id="empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="senha">Senha:</label>
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              
            </div>
            <div className="configuracao-field">
              <button
                type="button"
                className="mostrar-senha-button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"} Senha
              </button>
              <label htmlFor="confirmarSenha">Confirmar Senha:</label>
              <input 
                type={mostrarSenha ? "text" : "password"}
                id="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
            <button className="configuracao-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />

      {/* Mostrar o pop-up de salvar se o estado 'showPopUpSalvar' for verdadeiro */}
      {showPopUpSalvar && <PopUpSalvarInfos onClose={handleClosePopUpSalvar} />}

      {/* Mostrar o pop-up de sair se o estado 'showPopUpSair' for verdadeiro */}
      {showPopUpSair && <PopUpSairDaConta onClose={handleClosePopUpSair} />}
    </div>
  );
};

export default ConfiguracaoMeuPerfilFreelancer;
