import { redirect } from '../utils/redirect'
import { useI18n } from '../hooks/useI18n'

function Projects() {
  const { t } = useI18n()
  return (
    <section id="projects" className="project1">
      <h1 className="title">{t('projects_title')}</h1>
      <div className="gallery">
        <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/algo3_tp2')}>
          <img src="/assests/algoDefense.png" alt="Imagen 1" />
          <div className="overlay">
            <h3>AlgoDefense</h3>
            <p>
              A tower defense game, made in <a style={{ color: 'red' }}>java</a>(<a style={{ color: 'orange' }}>Maven</a>) with <a style={{ color: 'red' }}>java</a><a style={{ color: 'yellow' }}>fx</a>
              for a college subject, a group of five people in which we apply <a style={{ color: 'rgb(0, 140, 255)' }}>Scrum, eXtreme Programming</a> with <a style={{ color: 'white' }}>git</a> and  I used <a style={{ color: 'blueviolet' }}>intellij</a>, it has the corresponding documentation(classes, packages and sequence diagrams), coded with TDD using <a style={{ color: 'red' }}>J</a>unit.
            </p>
          </div>
        </div>
        <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/TP1_sinergia/tree/cambios_main')}>
          <img src="/assests/hangman.png" alt="Imagen 2" />
          <div className="overlay">
            <h3>Hangman</h3>
            <p>This is a game too, is one of my first projects made for the college so don't expect much. It was made in <a style={{ color: 'blue' }}>Pyt</a><a style={{ color: 'yellow' }}>hon</a></p>
          </div>
        </div>
        <div className="buttonProject" onClick={() => redirect('https://github.com/Ruyllex/ecommerce')}>
          <img src="/assests/res_mu_gaikoku_page1.jpg" alt="Imagen 3" />
          <div className="overlay">
            <h3>Ecommerce</h3>
            <p>This project is a comprehensive e-commerce platform developed using Spring Boot. It provides a backend solution for managing products, users, orders, and payments. The application integrates with PostgreSQL as its database and implements RESTful APIs for seamless interaction with the frontend</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

