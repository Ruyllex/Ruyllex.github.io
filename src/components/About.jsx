import BlurText from './BlurText'

function About() {
  return (
    <section id="about">
      <h1 className="title">About me</h1>
      <div className="intro">
        <h2 id="title2"><BlurText text="Hi, my name is:" /></h2>
        <h3 id="NAME"><BlurText text="RUY MORI" animateBy="letters" className="name-letters" /></h3>
        <BlurText
          id="aboutMe"
          className="about-paragraph"
          animateBy="letters"
          direction="bottom"
          delay={18}
          text={
            'A student of Computer Engineering at the University of Buenos Aires. I find joy in crafting digital experiences that resonate with users. Beyond coding, I find balance through fitness and sports like baseball and soccer. In my free time I like to solve LeetCode challenges or read books.'
          }
        />
      </div>
    </section>
  )
}

export default About

