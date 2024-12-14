import React from 'react'
import './sobre.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import justLogo from '../../assets/images/justLogo.png'
import meeting from '../../assets/images/meeting.png'
import maos from '../../assets/images/maos.png'

const sobre = () => {
  return (
    <div>
        <Navbar />
        <div className='sobre_container'>
            <div className='sobre_div1'>
                <div className='sobre_subDiv1'>
                    <h1>Conheça a</h1>
                    <h1 id='markcollab'>MarkCollab</h1>
                    <p>Descubra a equipe de marketing que vai transformar o seu negócio</p>
                </div>
                <div className='sobre_subDiv1'>
                    <img src={justLogo} alt="Logo" id='justlogo'/>
                </div>
            </div>
            <div className='sobre_div2'>
                <div>
                    <img src={meeting} alt=" foto de reunião de trabalho" id='meeting'/>
                </div>
                <div className='sobre_subdiv2'>
                    <h2 className='sobre_h2'>Quem somos?</h2>
                    <p>Na <strong>MarkCollab</strong>, somos mais do que uma startup de marketing e colaboração — somos o parceiro estratégico que você precisa para
                    levar seu negócio ao próximo nível.</p>
                    <p>Desde a concepção até a execução, estamos aqui para garantir que
                    sua empresa receba o melhor. </p>
                    <p>Criamos a equipe de marketing <strong>PERFEITA</strong> para atender às suas necessidades específicas e ajudar você a alcançar seus objetivos.</p>
                    <p><strong>Realizamos todos projetos de marketing!</strong></p>
                </div>
            </div>
            <div className='sobre_div3'>
                <div>
                    <img src={maos} alt="" id='maos'/>
                </div>
                <div className='sobre_subdiv3'>
                    <h2 className='sobre_h2'>Nossa missão</h2>
                    <p>Nossa missão é facilitar a vida do empreendedor, oferecendo soluções completas em marketing digital. Queremos que você possa se concentrar no que realmente importa: o seu negócio.</p>
                </div>
            </div>
            <div className='sobre_div4'>
                    <h1 id='vamosConversar'>Vamos conversar!</h1>
                    <p>Tem um projeto em mente? Entre em contato conosco e descubra como podemos te ajudar.</p>
                     <button id='sobre_btn'>Entrar em contato</button>
                
            </div>
        </div>
        <Footer />
    </div>
   
  )
}

export default sobre