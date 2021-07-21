import "./SkillList.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SkillName from "../SkillName/SkillName";

const SkillList = () => {
  return (
    <div className="container">
      <SkillName name="Python" progress="80" />
      <SkillName name="React JS" progress="90" />
      <SkillName name="Adobe Illustrator" progress="90" />
      <SkillName name="Adobe Photoshop" progress="95" />
      <SkillName name="Java" progress="85" />
    </div>
  );
};

export default SkillList;
