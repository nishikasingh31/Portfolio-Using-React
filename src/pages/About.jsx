import "../styles/About.css";

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2><b> About Me </b></h2>
         <p className="about-text">
           <strong>I'm Nishika Singh, </strong>A Computer Science Engineering graduate (2025) from{" "}
          <strong>Chhattisgarh Swami Vivekanand Technical University, Bhilai</strong>, Chhattisgarh.
        </p>
        <p className="about-text">
          I enjoy building scalable applications and understanding how systems work end-to-end—from 
          responsive user interfaces to backend logic and databases.
        </p>
        <p className="about-text">
          My academic and project experience spans software engineering and applied AI. 
          I’ve developed a <strong>Multilingual Translation System</strong> using transformer-based NLP models 
          and a <strong>CNN-based Handwritten Digit Classification</strong> model that achieved <strong>99.2% accuracy</strong>. 
          These projects strengthened my skills in problem-solving, model implementation, and translating technical concepts into practical solutions.
        </p>
        <p className="about-text">
          I have a strong interest in backend development using <strong>Node.js</strong> and enjoy building 
          full-stack applications with clean, interactive user interfaces using <strong>React.js</strong>.
        </p>
        <p className="about-text">
          I’m currently seeking opportunities where I can contribute as a software developer, 
          apply my technical skills to real-world challenges, and continue learning in a fast-paced, collaborative environment.
        </p>
      </div>
    </section>
  );
};

export default About;
