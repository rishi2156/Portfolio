import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8">
            <h1 className="connect-heading" data-aos="zoom-in">
              CONNECT
            </h1>
          </div>
          <div className="col-11 col-md-8">
            <h2 className="con-name">RAMYANIL RAHA</h2>
          </div>
          <div className="col-11 col-md-8">
            <h5 className="email">
              <a href="mailto:rammyanil2000@gmail.com">
                rammyanil2000@gmail.com
              </a>
            </h5>
          </div>
          <div className="col-11 col-md-8 ph-no">
            <h6>
              <a href="tel:+918910538919">+91-89105 38919</a>
            </h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-4">
            <div className="row">
              <div
                className="col-4 sm-btns"
                id="ig"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <a
                  href="https://www.instagram.com/raw_mmo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
              <div
                className="col-4 sm-btns"
                id="li"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <a
                  href="https://www.linkedin.com/in/ramyanil-raha-a551151b5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
              <div
                className="col-4 sm-btns"
                id="gh"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <a
                  href="https://github.com/rishi2156"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer justify-content-center">
          <div className="col-11 col-md-8">
            <span>@ Ramyanil Raha, 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
