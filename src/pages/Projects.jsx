import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id = "projects">
      <h2><b>Projects</b></h2>

      

       <div className="project-card">
        <h3>🧠 <a href="https://github.com/nishikasingh31/Multilingual-Language-Detection-and-Translation-System">Multilingual Language Detection and Translation System</a></h3>
        <p> ⤷ A NLP pipeline to automatically detect input language and translate text using transformer-based models.</p>
        <p> ⤷ Tech Stack: Python, TensorFlow, LangID, Hugging Face Transformers </p>
      </div>


      <div className="project-card">
        <h3>🔢 <a href= "https://github.com/nishikasingh31/Handwritten-Digit-Classification-using-CNN">Handwritten Digit Classification using CNN</a></h3>
        <p> ⤷ A deep-learning model trained on the MNIST dataset to classify handwritten digits(0–9).</p>
        <p> ⤷ Tech Stack: Python, TensorFlow, Keras, CNN</p>

      </div>
    </section>
  );
};

export default Projects;
