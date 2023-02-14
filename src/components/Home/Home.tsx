import "./Home.css"
import foto from "../../assets/foto.png"
import fotoBG from "../../assets/fotoBG.png"
import Header from "../../components/Header/Header"

function Home() {
    return (
    <section className="scroll-area" id="area1">
            <Header />
            <div className="Columns">
            <div className="ColumnLeft">
                <div className="GoToListContainer">
                <h1>
                    <strong>Organize</strong> your daily jobs
                </h1>
                <div className="Content">
                    <p>The only way to get things done</p>
                </div>
                <a href="#ToDoScreen">
                    <button id="GoToList">Go to To-do list</button>
                </a>
                </div>
            </div>

            <div className="ColumnRight">
                <img id="foto" src={foto} alt="" />
                <img id="fotoBG" src={fotoBG} alt="" />
            </div>
            </div>
        </section>
    );
};

export default Home;