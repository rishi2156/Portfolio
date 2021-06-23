import AOS from "aos";
import "./Home.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
