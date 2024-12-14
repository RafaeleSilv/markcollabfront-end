import React from 'react'
import './Serviços.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Serviços = () => {
  return (
    <div>
        <Navbar />
        <div className='servicos_container'>
            <div className='servicos_div1'>
                <h1 id='oque_fazemos'>O que fazemos?</h1>
                <p>Oferecemos uma gama completa de serviços de marketing para transformar suas ideias em projetos de
                sucesso.</p>
            </div>
            <div className='servicos_div2'>
                <h2 id='conheca_nosso_servico'>Conheça nossos serviços</h2>
                <div className='servicos_subdiv2'>
                    <div className='servicos_Subsubdiv'>
                        <div className='div2_content'>
                            <h3 className='servicos_h3'>Social Media</h3>
                            <p className='servicos_p'>Transforme suas redes sociais em um canal de vendas. Crie conteúdo engajador, interaja com seu público e aumente o reconhecimento da sua marca.</p>
                        </div>
                        <div className='div2_content'>
                            <h3 className='servicos_h3'>Criação de sites</h3>
                            <p className='servicos_p'>Tenha um site moderno, responsivo e otimizado para SEO. Atraia mais visitantes e converta-os em clientes.</p>
                        </div>
                        <div className='div2_content'>
                            <h3 className='servicos_h3'>Criação de Cursos</h3>
                            <p className='servicos_p'>Desenvolva cursos online envolventes e educativos.Transforme seu conhecimento em produtos valiosos que atraem e educam seu público-alvo.</p>
                        </div>
                        <div id='trafego'>
                            <h3 className='servicos_h3'>Tráfego pago</h3>
                            <p className='servicos_p'>Direcione seu tráfego para as pessoas certas e gere
                            mais resultados com campanhas de anúncios pagas.</p>
                        </div>
                    </div>
                    <div className='servicos_Subsubdiv'>
                        <div className='div2_content'>
                            <h3 className='servicos_h3'>Design</h3>
                            <p className='servicos_p'>Um design profissional é a chave para o sucesso do seu negócio. Crie uma identidade visual forte e memorável.</p>
                        </div>
                        <div className='div2_content'>
                            <h3 className='servicos_h3'>Criação de eBooks</h3>
                            <p className='servicos_p'>Produza eBooks que educam, engajam e
                            convertem. Desenvolvemos conteúdos ricos e atraentes para fortalecer a sua marca.</p>
                        </div>
                        <div className='div2_content'>
                            <h3 className='servicos_h3' >Campanhas de marketing</h3>
                            <p className='servicos_p'>Planeje e execute campanhas de marketing
                            integradas para alcançar seus objetivos de negócio.</p>
                        </div>
                        <div id='marketing'>
                            <h3 className='servicos_h3'>Marketing de conteúdo</h3>
                            <p className='servicos_p'>Crie conteúdo de qualidade que atraia e engaje seu público, gerando leads e aumentando a autoridade da sua marca.</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='servicos_div3'>
                <div className='servicos_subdiv3'>
                    <h2 id='empurrao'>Precisando de um empurrãozinho
                    para o seu negócio?</h2>
                    <p id='oferecemos'>Oferecemos uma gama completa de serviços de marketing para impulsionar seus resultados. <br />Desde a
                    criação de um site incrível até a gestão das suas redes sociais, nós cuidamos de tudo para você.</p>
                </div>
           
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Serviços