import "./Pagination.css";
import Dot from "../Dot/Dot";
import { useState } from "react";


function Pagination() {
    const [active, setActive] = useState(1);

    const handleClick = (e: any ) => {
        console.log(e);
        setActive(e);
    };


    return (
        <div id="pagination">
            <Dot /*position={1} onClick={() => {handleClick(1);}}* className={(active===1) ? "Active": ""}*//>
            <Dot /*position={2} onClick={() => {handleClick(2);}} className={(active===2) ? "Active": ""}*/ />
            <Dot /*position={3} onClick={() => {handleClick(3);}} className={(active===3) ? "Active": ""}*/ />
        </div>
    );
  };
  
  export default Pagination;