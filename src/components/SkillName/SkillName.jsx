import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SkillName.css";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillName = ({ name, progress }) => {
  return (
    <div className="row justify-content-center skill">
      <div className="col-12 col-md-3 skill-name">
        <h4>{name}</h4>
      </div>
      <div className="col-12 col-md-5 pbContainer">
        <ProgressBar
          completed={progress}
          bgColor="#ffffff"
          height="10px"
          baseBgColor="#A9A9A9"
          isLabelVisible={false}
        />
      </div>
    </div>
  );
};

export default SkillName;
