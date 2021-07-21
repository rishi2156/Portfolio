import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
import ArtworkCar from "../Carousel/ArtworkCar";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    // <div data-aos="fade-up">
    //   <h1>Gallery</h1>
    // </div>
    <div className="container">
      <div className="row">
        <div className="col-8 art-car">
          <ArtworkCar />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
