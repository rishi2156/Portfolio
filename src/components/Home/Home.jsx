import AOS from "aos";
import "aos/dist/aos.css";
import DP from "../../image/user.png";
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container" id="home">
        <div className="row justify-content-center" id="fullname">
          <div className="col-8" data-aos="zoom-in">
            <h1>RAMYANIL</h1>
            <h2>RAHA</h2>
          </div>
          <div
            className="col-8 beng-name"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h2>রম্যনীল রাহা</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center" id="location">
            <span>KOLKATA</span>
            <div className="divider"></div>
            <span>WEST BENGAL</span>
            <div className="divider"></div>
            <span>INDIA</span>
          </div>
        </div>
        <div className="row justify-content-center description">
          <div className="col-8 col-md-4 dp">
            <img
              src={DP}
              alt="USER"
              className="rounded-circle"
              height="200px"
            />
          </div>
          <div className="col-10 col-md-8 text-center intro">
            <p>
              Ahoy! My name is Ramyanil Raha. I am a second year student of
              National Institute of Technology, Durgapur pursuing Btech in
              Metallurgical and Materials Engineering. Apart from my studies, I
              like to do graphic designs and artworks. I utilise my free time to
              learn new softwares for designing. And did I say I follow football
              very closely? Supporter of Chelsea Football Club and German
              National Team. Other hobbies include music and recitation.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/education">
            <button className="customBtn btn">Discover More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
