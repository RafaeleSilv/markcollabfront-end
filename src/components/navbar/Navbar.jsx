import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../../context/AuthContext";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import Logo from '../../assets/images/logo_markcollab.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import PopUpCadastro from '../../components/PopUpCadastro/PopUpCadastro'; // Importação do PopUpCadastro

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // Estado para controlar a abertura do PopUp
  const [userRole, setUserRole] = useState(null); // Estado para armazenar o tipo de usuário (freelancer ou employer)

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Função de decodificação do JWT
  const decodeJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };

  // Efeito para verificar o tipo de usuário ao carregar o componente
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Verifica se o token existe
    if (token) {
      setIsLoggedIn(true);
      const user = decodeJwt(token);
      setUserRole(user?.role); // Atribui o tipo de usuário (freelancer ou employer)
    } else {
      setIsLoggedIn(false);
    }

    const handleResize = () => {
      if (window.innerWidth > 727) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsLoggedIn]);

  // Função para abrir o PopUpCadastro
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  // Função para fechar o PopUpCadastro
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove o token do localStorage
    setIsLoggedIn(false); // Atualiza o estado de login
    setUserRole(null); // Limpa o tipo de usuário
    window.location.href = "/"; // Redireciona para a página inicial
  };

  return (
    <div>
      <div className='blue_div'>
        <div className='first_nav_icons'>
          <a href=""><FaFacebook className='nav_social_icons'/></a>
          <a href=""><FaInstagram className='nav_social_icons' /></a>
        </div>
        <div className='second_nav_icons'> 
          <a href="mailto:atendimentomarkcollab@gmail.com" className='nav_mail_icons'>
            <CiMail /> atendimentomarkcollab@gmail.com
          </a>
        </div>
      </div>
      <div className='nav2'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <div className='menu-icon'>
            <span>☰</span> {/* Ícone de menu (hamburger) */}
          </div>
        </div>
        <ul className='nav2_list'>
          <li>
            <Link to="/" className='nav2_icons'>Home</Link>
          </li>
          <li>
            <Link to="/sobre" className='nav2_icons'>Sobre</Link>
          </li>
          <li>
            <Link to="/servicos" className='nav2_icons'>Serviços</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to={userRole === "FREELANCER" ? "/MeusProjetosFreelancer" : "/PublicacaoProjetoContratante"} className='nav2_icons' id='projetos'>Projetos</Link>
              </li>
              <li>
                <Link to="" className='nav2_icons'><CiBellOn /></Link>
              </li>
              <li>
                <Link to={userRole === "FREELANCER" ? "/PerfilFreelancer" : "/PerfilContratante"} className='nav2_icons'><VscAccount /></Link>
              </li>
            </>
          ) : (
            <>
              <li className="hidden-on-large">
                <Link to="/login" className='nav2_icons' id='login_btn'>Login</Link>
              </li>
              <li className="hidden-on-large">
                <Link to="#" className='nav2_icons' id='cadastro_btn' onClick={openPopUp}>Cadastro</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {isSidebarOpen && (
        <div className='sidebar'>
          <button className='close-sidebar' onClick={closeSidebar}>✖</button>
          <ul>
            <li><Link to="/" className='nav2_icons' onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/sobre" className='nav2_icons' onClick={closeSidebar}>Sobre</Link></li>
            <li><Link to="/servicos" className='nav2_icons' onClick={closeSidebar}>Serviços</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to={userRole === "FREELANCER" ? "/MeusProjetosFreelancer" : "/MeusProjetosContratante"} className='nav2_icons' onClick={closeSidebar}>Projetos</Link></li>
                <li><Link to={userRole === "FREELANCER" ? "/PerfilFreelancer" : "/PerfilContratante"} className='nav2_icons' onClick={closeSidebar}>Perfil</Link></li>
                <li>
                  <button className='btn_sairConta' onClick={handleLogout}>Sair da conta</button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className='nav2_icons' onClick={closeSidebar}>Login</Link></li>
                <li><Link to="/Cadastro" className='nav2_icons' onClick={closeSidebar}>Cadastro</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
      {/* Passando as props para o PopUpCadastro */}
      <PopUpCadastro isOpen={isPopUpOpen} onClose={closePopUp} />
    </div>
  );
};

export default Navbar;
