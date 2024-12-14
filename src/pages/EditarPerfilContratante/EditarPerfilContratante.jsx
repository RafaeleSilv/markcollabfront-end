import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Pop-up de sair
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos'; // Pop-up de salvar
import './EditarPerfilContratante.css';
import { Link } from 'react-router-dom';

const EditarPerfilContratante = () => {
  const [formData, setFormData] = useState({
    nome: '',
    usuario: '',
    ramo: '',
    sobre: '',
    habilidades: '',
    portfolio: null,
  });

const [isPopUpSairOpen, setIsPopUpSairOpen] = useState(false);
const [isPopUpSalvarOpen, setIsPopUpSalvarOpen] = useState(false);

  // Função para controlar a alteração dos inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portfolio') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para salvar as informações
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados salvos:', formData);
    setIsPopUpSalvarOpen(true); // Exibe o pop-up de salvar ao enviar
  };

  // Função para abrir o pop-up de sair
  const handleOpenPopUpSair = (e) => {
    e.preventDefault(); // Evita o redirecionamento do link
    setIsPopUpSairOpen(true);
  };

  return (
    <div className="editar-perfil-container">
      <Navbar />
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to='/PerfilContratante'>Meu Perfil</Link>
          </li>
          <li>
            <Link to='/EditarPerfilContratante'>Editar Perfil</Link>
          </li>
          <li>
            <Link to='/ConfiguracaoMeuPerfilContratante'>Dados Pessoais </Link>
          </li>
          <li>
          <Link to ="#"button onClick={handleOpenPopUpSair}>Sair</Link>
          </li>
        </ul>
      </nav>
      <div className="editar-perfil-content">
        <h1>Edite seu perfil</h1>
        <form className="editar-perfil-form" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome da empresa:"
              required
            />
          </label>
          <label>
            Usuário:
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Digite o user da empresa:"
              required
            />
          </label>
          <label>
            Ramo:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ramo atual da empresa:"
              required
            />
          </label>
          <label>
            Escreva sobre a empresa:
            <textarea
              name="sobre"
              value={formData.sobre}
              onChange={handleChange}
            />
          </label>
          <label>
           habilidades que procura em um profissional:
            <select
              name="habilidades"
              value={formData.habilidades}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="Habilidade1">Habilidade 1</option>
              <option value="Habilidade2">Habilidade 2</option>
              <option value="Habilidade3">Habilidade 3</option>
              <option value="Habilidade3">Habilidade 4</option>
            </select>
          </label>
          <label>
            Projetos Disponivéis:
            <input
              type="file"
              name="portfolio"
              onChange={handleChange}
            />
          </label>
        
          <button type="submit" className="salvar-button">Salvar</button>
        </form>
      </div>
      <Footer />

      {/* Pop-ups */}
      {isPopUpSairOpen && (
        <PopUpSairDaConta
          onClose={() => setIsPopUpSairOpen(false)} // Fecha o pop-up
          onConfirm={() => {
            console.log('Usuário saiu da conta');
            setIsPopUpSairOpen(false);
          }}
        />
      )}

      {isPopUpSalvarOpen && (
        <PopUpSalvarInfos
          onClose={() => setIsPopUpSalvarOpen(false)} // Fecha o pop-up de salvar
        />
      )}
    </div>
  );
};

export default EditarPerfilContratante;
