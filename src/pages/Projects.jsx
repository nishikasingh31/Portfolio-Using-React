import '../styles/Projects.css';

const projectData = [
  {
    title: "Multilingual Language Detection and Translation System",
    icon: "🧠",
    link: "https://github.com/nishikasingh31/Multilingual-Language-Detection-and-Translation-System",
    desc: "A NLP pipeline to detect input language and translate text using transformer-based models.",
    tech: "Python, TensorFlow, LangID, Hugging Face Transformers"
  },
  {
    title: "Handwritten Digit Classification using CNN",
    icon: "🔢",
    link: "https://github.com/nishikasingh31/Handwritten-Digit-Classification-using-CNN",
    desc: "A deep-learning model trained on the MNIST dataset to classify handwritten digits (0–9).",
    tech: "Python, TensorFlow, Keras, CNN"
  },
  {
    title: "Quiz Application",
    icon: "🧠",
    link: "https://github.com/nishikasingh31/Quiz-Application",
    desc: "Full-stack quiz app with dynamic questions and real-time score evaluation.",
    tech: "React, Node.js, Express, MongoDB"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>🚀 Projects</h2>

      <div className="projects-container">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            
            <h3>
              {proj.icon}{" "}
              <a href={proj.link} target="_blank" rel="noreferrer">
                {proj.title}
              </a>
            </h3>

            <p>⤷ {proj.desc}</p>
            <p className="tech">⚙️ {proj.tech}</p>

            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Project →
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
