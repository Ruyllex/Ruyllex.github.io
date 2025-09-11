import BlurText from './BlurText'

function About() {
  return (
    <section id="about">
      <h1 className="title">About me</h1>
      <img src="/assests/Logo-fiuba_big.png" alt="fiuba-logo" id="fiuba-logo" />
      <h2 id="title2"><BlurText text="Hi, my name is:" /></h2>
      <h3 id="NAME"><BlurText text="RUY MORI" animateBy="letters" className="name-letters" /></h3>
      <p id="aboutMe" className="hidden">
        A student of Computer Engineering at the <a style={{ color: '#00fbff' }}>U</a>niversity of <a style={{ color: 'rgb(255, 242, 0)' }}>B</a>uenos <a style={{ color: '#00fbff' }}>A</a>ires.
        I find joy in crafting digital experiences that resonate with users.
        Beyond coding, I find balance through fitness and sports like baseball and soccer.In my free time i like to solve LeetCode challenges or read books.<br />
      </p>
    </section>
  )
}

export default About

