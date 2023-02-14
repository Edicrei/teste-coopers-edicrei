//import logo from "../../assets/Logo.png";
import "./Carousel.css";
import Card from  "../Card/Card";
import Pagination from  "../Pagination/Pagination";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

function Carousel() {
  return (
    <section className="scroll-area" id="carousel">
      
      <div id="BGCarousel"><h2>good things</h2></div>
      <div id="BGCarouselbase">
        <div id="BGCarousel3">
            <Card image={img1} description="Organize your daily job enhance your life performance" />
            <Card image={img2} description="Mark one activity as done makes your brain understands the power of doing."/>
            <Card image={img3} description="Careful with missunderstanding the difference between a list of things and a list of desires."/>
        </div>
        <Pagination /*id="pagination"*/ />
      </div>
      
    </section>
  );
};

export default Carousel;