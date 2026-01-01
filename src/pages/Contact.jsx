import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2><b>Contact Me</b></h2>
      <p>
        I’m open to opportunities, internships, and collaborations.  
        Feel free to reach out!
      </p>

      <div className="contact-info">
        <p>
          📧 Email:
          <a href="mailto:nishikasingh0307@gmail.com">
            nishikasingh0307@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/nishika-singh-as2025/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nishika-singh-as2025/
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/nishikasingh31"
            target="_blank"
            rel="noreferrer"
          >
            github.com/nishikasingh31
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
