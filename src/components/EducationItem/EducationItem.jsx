import "./EducationItem.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NIT from "../../image/NIT_Durgapur_logo.png";
import VMS from "../../image/VMS_logo3.png";
import STR from "../../image/Strokes.png";
import MUC from "../../image/muc.png";

const EducationItem = ({ prog, inst, desc, year, imgLink }) => {
  let image;
  if (imgLink === "VMS") {
    image = <img src={VMS} alt="logo" />;
  } else if (imgLink === "STR") {
    image = <img src={STR} alt="logo" />;
  } else if (imgLink === "NIT") {
    image = <img src={NIT} alt="logo" />;
  } else {
    image = <img src={MUC} alt="logo" />;
  }
  return (
    <>
      <div className="row edu-item justify-content-center">
        <div className="col-12 col-md-10">
          <div className="row test justify-content-center">
            <div className="col-12 col-md-2 edu-item-logo" id="green">
              {image}
            </div>
            <div className="col-12 col-md-6 edu-item-desc" id="cyan">
              <h4>{prog}</h4>
              <h5>{inst}</h5>
              <p>{desc}</p>
            </div>
            <div className="col-12 col-md-4 edu-item-year" id="red">
              <h6>{year}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationItem;
