import P1 from "../../image/Mails24.png";
import P2 from "../../image/rateatouille.png";
import P3 from "../../image/RBlog.png";
import P4 from "../../image/RSite.png";
import P5 from "../../image/nodejs.png";
import P6 from "../../image/al.png";
import "./ProjectCard.css";

const ProjectCard = ({ title, imgLink, desc, link, status }) => {
  let btn;
  if (status) {
    btn = (
      <button className="ghLink">
        <a href={link} target="_blank" rel="noreferrer">
          View on Github
        </a>
      </button>
    );
  } else {
    btn = (
      <button className="ghLink" disabled={true}>
        Not available
      </button>
    );
  }

  let tile;
  if (imgLink === "MS24") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P1})` }}
      ></div>
    );
  } else if (imgLink === "RATE") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P2})` }}
      ></div>
    );
  } else if (imgLink === "RBlog") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P3})` }}
      ></div>
    );
  } else if (imgLink === "RSite") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P4})` }}
      ></div>
    );
  } else if (imgLink === "NBlog") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P5})` }}
      ></div>
    );
  } else if (imgLink === "AL") {
    tile = (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${P6})` }}
      ></div>
    );
  }

  return (
    <div className="card">
      {tile}
      <h5>{title}</h5>
      <p>{desc}</p>
      {btn}
    </div>
  );
};

export default ProjectCard;
