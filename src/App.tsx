import profilePhoto from './assets/Sentado terno cinza.jpeg'
import './App.css'

const education = [
  'Bacharel em Direito',
  'Pós-graduado em Programação Orientada a Objetos com Java',
  'Graduando em Engenharia de Software',
]

const teaching = [
  'Professor de Informática para o CBFPM',
  'Professor na área de hardware, suporte remoto e configuração de computadores no Curso de Manutenção em Equipamentos de Telecomunicações e Informática',
]

const technologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Java',
  'PHP',
  'Laravel',
  'PostgreSQL',
  'Git',
  'GitHub',
]

function App() {
  return (
    <main className="portfolio-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">Portfólio pessoal</p>

          <h1 id="hero-title">Christian Heil Salsa</h1>

          <p className="hero-subtitle">
            Desenvolvedor em formação, professor de tecnologia e profissional de
            TI com visão prática de suporte, sistemas e educação técnica.
          </p>

          <p className="hero-description">
            Unindo desenvolvimento web, suporte técnico e docência, construo
            soluções claras, manteníveis e alinhadas a problemas reais, com foco
            em evolução full stack.
          </p>

          <div className="hero-actions" aria-label="Links principais">
            <a className="button button-primary" href="https://github.com/H-Salsa" target="_blank">
              GitHub
            </a>
            <a className="button button-secondary" href="mailto:christian.s.salsa@gmail.com">
              Contato
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Retrato profissional">
          <img
            src={profilePhoto}
            alt="Christian Heil Salsa sentado em um ambiente profissional"
          />
          <div className="photo-caption">
            <span>Foco atual</span>
            <strong>Developer React, TypeScript, PHP Laravel e Java</strong>
          </div>
        </aside>
      </section>

      <section className="summary-grid" aria-label="Resumo profissional">
        <article>
          <span>01</span>
          <h2>Desenvolvimento</h2>
          <p>
            Construção de interfaces web modernas, integração com APIs e evolução
            contínua em aplicações full stack.
          </p>
        </article>

        <article>
          <span>02</span>
          <h2>Ensino técnico</h2>
          <p>
            Experiência em sala de aula com informática, hardware, suporte remoto
            e configuração de computadores.
          </p>
        </article>

        <article>
          <span>03</span>
          <h2>Base multidisciplinar</h2>
          <p>
            Formação em Direito, especialização em Java e graduação em Engenharia
            de Software em andamento.
          </p>
        </article>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Formação</p>
          <h2>Base acadêmica</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section teaching-section">
        <div className="section-heading">
          <p className="eyebrow">Docência</p>
          <h2>Atuação como professor de tecnologia</h2>
        </div>

        <div className="teaching-list">
          {teaching.map((item) => (
            <article key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>Tecnologias e ferramentas</h2>
        </div>

        <div className="skills">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
