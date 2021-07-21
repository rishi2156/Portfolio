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
            <h1 className="connect-heading">CONNECT</h1>
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
              <a href="tel:+6494461709">+91-89105 38919</a>
            </h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-4">
            <div className="row">
              <div className="col-4 sm-btns" id="ig">
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </div>
              <div className="col-4 sm-btns" id="li">
                <a href="#">
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="col-4 sm-btns" id="gh">
                <a href="#">
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
