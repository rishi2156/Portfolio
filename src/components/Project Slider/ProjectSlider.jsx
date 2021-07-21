import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "../Project Cards/ProjectCard";
import "./ProjectSlider.css";
import projects from "../../projects.json";

const ProjectSlider = () => {
  const updatedProjects = projects.map((project) => (
    <ProjectCard
      key={project.key}
      title={project.title}
      desc={project.desc}
      status={project.status}
      link={project.ghLink}
      imgLink={project.imgLink}
    />
  ));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    largeMobiles: {
      breakpoint: { max: 767, min: 576 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className=" container slider">
      <div className="row justify-content-center">
        <div className="col-12">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "largeMobiles"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
          >
            {updatedProjects}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
