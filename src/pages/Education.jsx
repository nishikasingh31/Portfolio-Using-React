import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education" id = "education">
      <h2><b>Educational Background</b></h2>

      <div className="education-card">
         <li className="education-item">
          <h3>🎓 Bachelor of Technology – Computer Science Engineering (AI & ML)</h3>
          <p> 📍 Chhattisgarh Swami Vivekanand Technical University, Bhilai, Chhattisgarh</p>
          <span> 📌 2021 – 2025 | CGPA: 7.3</span>
        </li>

        <li className="education-item">
          <h3>🎓 Senior Secondary (Class XII)</h3>
          <p> 📍 Sree Narayana Guru Vidya Bhavan, Bhilai, Chhattisgarh</p>
          <span> 📌 2021 | Percentage: 92%</span>
        </li>
      </div>
    </section>
  );
};

export default Education;
