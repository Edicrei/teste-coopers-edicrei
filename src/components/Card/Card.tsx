import "./card.css";
import foreground from "../../assets/icone-coopers.png";
import func from "../../assets/tag.png";
import read from "../../assets/read.png";


 type ImageProps = {
    description: string;
    image: string;
    // Your other props here.
}


function Card( {description, image} : ImageProps ) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={image} alt="" />
            </div>
            <div className="foregroundPosition">
                <img id="foreground" src={foreground} alt="" />
            </div>
            
            <img className="function" src={func} alt=""/>

            <h3 className="description">{description}</h3>
            <img className="read" src={read} alt=""/>


        </div>
    );
  };
  
  export default Card;