import '../styles/Me.css';
import img from '../assets/blue.png';

const Me = ()=> {
    return (
      <section className="me" id=" ">
      <h1><b>Hi, I'm Nishika Singh</b></h1>
      <p>Computer Science Graduate | MERN Stack & AI/ML Enthusiast</p>

      <div className="container">
         <img src={img} alt="bottom" className="right-image bottom" />
         <img src={img} alt="top" className="right-image top" />

    </div>
    </section>
    );
};

export default Me;
