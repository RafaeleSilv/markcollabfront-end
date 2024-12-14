import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas contratante
import MeusProjetosContratante from '../pages/MeusProjetosContratante/MeusProjetosContratante'; //aumentar espaço do container publicar para o footer
import VisualizacaoMeusProjetosContratante from '../pages/VisualizacaoMeusProjetosContratante/VisualizacaoMeusProjetosContratante'; //aumentar espaço do container publicar para o footer
import PublicacaoProjetoContratante from '../pages/PublicacaoProjetoContratante/PublicacaoProjetoContratante'; //aumentar espaço do botão publicar para o footer
import ProjetoPublicadoContratante from '../pages/ProjetoPublicadoContratante/ProjetoPublicadoContratante';
import EditarPerfilContratante from '../pages/EditarPerfilContratante/EditarPerfilContratante'; //n ta abrindo
import ConfiguracaoMeuPerfilContratante from '../pages/ConfiguracaoMeuPerfilContratante/ConfiguracaoMeuPerfilContratante'; // ajeitar css
import HomeContratante from '../pages/HomeContratante/HomeContratante';
import PerfilContratante from '../pages/PerfilContratante/PerfilContratante';
import CadastroContratante from '../pages/CadastroContratante/CadastroContratante';
import Editarprojetos from '../pages/editarprojetos/editarprojetos';
import PerfilFreelancerContratante from '../pages/PerfilFreelancerContratante/PerfilFreelancerContratante';


// Páginas freelancer
import MeusProjetosFreelancer from '../pages/MeusProjetosFreelancer/MeusProjetosFreelancer'; //aumentar espaço do container publicar para o footer
import EditarMeuPerfilFreelancer from '../pages/EditarMeuPerfilFreelancer/EditarMeuPerfilFreelancer'; //ajusatr css
import ConfiguracaoMeuPerfilFreelancer from '../pages/ConfiguracaoMeuPerfilFreelancer/ConfiguracaoMeuPerfilFreelancer';//ajusatr css
import BuscarProjetosFreelancerVisualizacao from '../pages/BuscarProjetosFreelancerVisualizacao/BuscarProjetosFreelancerVisualizacao';//ajusatr css
import BuscarProjetosFreelancerPrincipal from '../pages/BuscarProjetosFreelancerPrincipal/BuscarProjetosFreelancerPrincipal';
import HomeFreelancer from '../pages/HomeFreelancer/HomeFreelancer';
import PerfilFreelancer from '../pages/PerfilFreelancer/PerfilFreelancer';
import Cadastro from '../pages/Cadastro/Cadastro';
import PropostaFreelancer from '../pages/PropostaFreelancer/PropostaFreelancer';

// Páginas gerais
import Home from '../pages/home/Home';
import Sobre from '../pages/sobre/sobre';
import Servicos from '../pages/serviços/Serviços';
import Login from '../pages/Login/Login';




const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="Login" element={<Login />} />"
        <Route path="Cadastro" element={<Cadastro />} />
        
        <Route path="MeusProjetosContratante" element={<MeusProjetosContratante />} />
        <Route path="visualizacaoMeusProjetosContratante" element={<VisualizacaoMeusProjetosContratante />} />
        <Route path="publicacaoProjetoContratante" element={<PublicacaoProjetoContratante />} />
        <Route path="projetoPublicadoContratante" element={<ProjetoPublicadoContratante />} />
        <Route path="EditarPerfilContratante" element={<EditarPerfilContratante />} />
        <Route path="configuracaoMeuPerfilContratante" element={<ConfiguracaoMeuPerfilContratante />} />
        <Route path="HomeContratante" element={<HomeContratante />} />
        <Route path="PerfilContratante" element={<PerfilContratante />} />
        <Route path='editarprojetos' element={<Editarprojetos/>}/>
        <Route path='PerfilFreelancerContratante' element={<PerfilFreelancerContratante/>}/>


        <Route path="MeusProjetosFreelancer" element={<MeusProjetosFreelancer />} />
        <Route path="editarMeuPerfilFreelancer" element={<EditarMeuPerfilFreelancer />} />
        <Route path="configuracaoMeuPerfilFreelancer" element={<ConfiguracaoMeuPerfilFreelancer />} />
        <Route path="buscarProjetosFreelancerVisualizacao" element={<BuscarProjetosFreelancerVisualizacao />} />
        <Route path="buscarProjetosFreelancerPrincipal" element={<BuscarProjetosFreelancerPrincipal />} />
        <Route path="HomeFreelancer" element={<HomeFreelancer />} />
        <Route path="PerfilFreelancer" element={<PerfilFreelancer />} />
        <Route path="CadastroContratante" element={<CadastroContratante />} />
        <Route path='PropostaFreelancer' element={<PropostaFreelancer/>}/>
        
      
      </Routes>
    </Router>
  );
};

export default AppRoutes;
