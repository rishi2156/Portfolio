import EducationItem from "../EducationItem/EducationItem";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const EducationList = () => {
  return (
    <>
      <EducationItem
        prog="Bachelor of Technology"
        inst="National Institute of Technology, Durgapur"
        desc="Metallurgical And Materials Engineering"
        year="2019 - 2023 (expected)"
        imgLink="NIT"
      />
      <EducationItem
        prog="Higher Secondary"
        inst="Vivekananda Mission School"
        desc=" Council for the Indian School Certificate Examinations"
        year="2019"
        imgLink="VMS"
      />
      <EducationItem
        prog="Secondary"
        inst="Vivekananda Mission School"
        desc=" Council for the Indian School Certificate Examinations"
        year="2017"
        imgLink="VMS"
      />
    </>
  );
};

export default EducationList;
