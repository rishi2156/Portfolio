// import { Carousel } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import I1 from "../../image/Artworks/cobain.jpg";
import I2 from "../../image/Artworks/dream.jpg";
import I3 from "../../image/Artworks/her.jpg";
import I4 from "../../image/Artworks/ik.jpg";
import I5 from "../../image/Artworks/Loki.jpg";
import I6 from "../../image/Artworks/Messi.jpg";

const ArtworkCar = () => {
  return (
    <div id="carouselArt" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={I1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={I2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={I3} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={I4} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={I5} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={I6} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselArt"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselArt"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ArtworkCar;
