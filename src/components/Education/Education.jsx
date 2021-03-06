import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EducationList from "../EducationList/EducationList";
import PORList from "../PORList/PORList";
import "./Education.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 edu-heading">
          <h1 className="edupage-headings" data-aos="zoom-in">
            EDUCATION
          </h1>
        </div>
      </div>
      <EducationList />
      <div className="row justify-content-center">
        <div className="col-8">
          <button className="cv-btn">
            <a
              href="https://drive.google.com/file/d/1fv1FFBeTjEoxtisQtRnZgKliHzKR_EhV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 por-heading">
          <h1 className="edupage-headings" data-aos="zoom-in">
            POSITIONS OF RESPONSIBILITY
          </h1>
        </div>
      </div>
      <div className="pors">
        <PORList />
      </div>
    </div>
  );
};

export default Education;
