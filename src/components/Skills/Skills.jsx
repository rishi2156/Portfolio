import ProjectSlider from "../Project Slider/ProjectSlider";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillList from "../SkillList/SkillList";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 main-heading">
            <h1 className="skillpage-headings">SKILLS</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <SkillList />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 projects-heading">
            <h1 className="skillpage-headings">PROJECTS</h1>
          </div>
          <div className="col-12 slider">
            <ProjectSlider />
          </div>
          <div className="col-12 instruction">
            <span>Swipe to view</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
