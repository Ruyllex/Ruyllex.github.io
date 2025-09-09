function Skills() {
  return (
    <section id="skill">
      <h1 className="title">Skills</h1>
      <div className="cards">
        <div className="card red">
          <p>
            <button className="skilss">Backend</button>
          </p>
          <div className="PhoneTitle">Backend</div>
          <img className="skill java" src="/assests/icons8-lenguaje-de-programación-96.png" alt="Java" />
          <img className="skill spring" src="/assests/icons8-logotipo-de-primavera-96.png" alt="Spring" />
          <img className="skill python" src="/assests/icons8-python-96.png" alt="Python" />
          <img className="skill flask" src="/assests/ClipartKey_1450089.png" alt="flask" />
          <img className="skill nodejs" src="/assests/icons8-nodejs-96.png" alt="Node.js" />
          <img className="skill express" src="/assests/icons8-express-js-96.png" alt="Express" />
        </div>
        <div className="card blue">
          <p>
            <button className="skilss">Frontend</button>
          </p>
          <div className="PhoneTitle">Frontend</div>
          <img className="skill nextjs" src="/assests/icons8-next.js-96.png" alt="NextJs" />
          <img className="skill react" src="/assests/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" alt="React" id="React" />
        </div>
      </div>
    </section>
  )
}

export default Skills

