import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './ConfiguracaoMeuPerfilFreelancer.css';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos';  // Importando o PopUpSalvarInfos
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o PopUpSairDaConta
import { Link } from 'react-router-dom';

const ConfiguracaoMeuPerfilFreelancer = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  
  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false);  // Controle para mostrar o pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Controle para mostrar o pop-up de sair

  // Função que é chamada ao clicar em "Salvar"
  const handleSave = (event) => {
    event.preventDefault();
    // Exibir o pop-up quando o usuário clicar em "Salvar"
    setShowPopUpSalvar(true);

    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome completo:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);
    
    
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
            <Link to='/PerfilFreelancer'>Meu Perfil</Link>
          </li>
          {/* Link para Editar Perfil */}
          <li>
            <Link to='/EditarMeuPerfilFreelancer'>Editar Perfil</Link>
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
          <form className="configuracao-form" onSubmit={handleSave}>
            <h1 className="configuracao-title">Configurações do Freelancer</h1>
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
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
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
