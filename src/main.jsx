import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = [
  ['01', 'Implantes dentários', 'Reabilitação completa para recuperar função, segurança e naturalidade no seu sorriso.'],
  ['02', 'Reabilitação oral', 'Planejamento individualizado para devolver conforto e qualidade de vida.'],
  ['03', 'Estética do sorriso', 'Detalhes que valorizam sua identidade com resultados leves e naturais.'],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <div className="site">
    <header className="nav"><button className="brand" onClick={() => scrollTo('top')}><span className="brand-mark">F</span><span>FELIPE<br/><i>RODRIGUES</i></span></button><nav className={open ? 'nav-links open' : 'nav-links'}><button onClick={() => scrollTo('sobre')}>Sobre</button><button onClick={() => scrollTo('tratamentos')}>Tratamentos</button><button onClick={() => scrollTo('depoimentos')}>Depoimentos</button><button onClick={() => scrollTo('contato')}>Contato</button></nav><button className="nav-cta" onClick={() => scrollTo('contato')}>Agendar consulta ↗</button><button className="menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></header>
    <main>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">CIRURGIÃO-DENTISTA · CRO-MG 35.523</p><h1>DR. FELIPE<br/>RODRIGUES<br/><em>TAVARES.</em></h1><p className="hero-text">Especialista em implantes dentários e reabilitação oral, com atendimento próximo em Divinópolis, Minas Gerais.</p><button className="primary" onClick={() => scrollTo('contato')}>Agende sua consulta ↗</button><div className="hero-meta"><div><strong>2007</strong><span>formação UFMG</span></div><div><strong>5.0</strong><span>★ no Google</span></div></div></div><div className="hero-image"><img src="/assets/hero-patient.png" alt="Paciente sorrindo após tratamento odontológico"/><div className="floating-card"><span className="status-dot"/><div><strong>13 avaliações no Google</strong><small>Um dos dentistas mais recomendados de Divinópolis</small></div></div></div></section>
      <section className="intro" id="sobre"><div className="section-label">01 / SOBRE O CONSULTÓRIO</div><div className="intro-grid"><h2>Odontologia que<br/><em>cuida de verdade.</em></h2><div><p className="lead">Bem-vindo ao consultório do Dr. Felipe — seu caminho para um sorriso mais saudável.</p><p>Atendimento humanizado, diagnóstico preciso e planos de tratamento claros, com resultados previsíveis. Sua primeira visita é tranquila e transparente: você conhece o plano, as etapas e o que vem a seguir.</p><button className="text-link" onClick={() => scrollTo('contato')}>Conheça meu trabalho ↗</button></div></div><div className="stats"><div><b>2007</b><span>Formação UFMG</span></div><div><b>+1.000</b><span>Sorrisos transformados</span></div><div><b>13</b><span>Avaliações no Google</span></div><div><b>100%</b><span>Cuidado personalizado</span></div></div></section>
      <section className="services" id="tratamentos"><div className="section-label">02 / ESPECIALIDADES</div><div className="services-head"><h2>Tratamentos pensados<br/><em>para você.</em></h2><p>Precisão técnica com um atendimento que acolhe. Encontre o caminho mais leve para o sorriso que você deseja.</p></div><div className="service-list">{services.map(([n,t,d]) => <article className="service" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><span className="service-arrow">↗</span></article>)}</div></section>
      <section className="quote" id="depoimentos"><div className="quote-mark">“</div><blockquote>O melhor dentista da cidade. Muito dedicado em tudo que faz e super atencioso.</blockquote><div className="quote-by"><div className="stars">★★★★★</div><span>Paciente verificado · Google</span></div></section>
      <section className="contact" id="contato"><div><div className="section-label light">03 / VAMOS CONVERSAR</div><h2>Seu próximo sorriso<br/><em>começa aqui.</em></h2><p>Agende uma avaliação e descubra um plano feito para você.</p></div><div className="contact-box"><div><span>⌖</span><span>R. São Sebastião, 439<br/>Afonso Pena · Divinópolis/MG</span></div><div><span>◌</span><span>(37) 3213-3686</span></div><button className="primary light-btn" onClick={() => window.location.href='tel:+553732133686'}>Ligar para o consultório ↗</button></div></section>
    </main><footer><span>© 2024 Felipe Rodrigues Tavares</span><span>Cirurgião-Dentista · CRO-MG 35.523</span><span>Divinópolis, MG</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
