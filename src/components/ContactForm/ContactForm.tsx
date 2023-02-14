import "./GetInTouch.css";
import image from "../../assets/image.png";
import iconmail from "../../assets/icon-mail.png";

function GetInTouch() {
  return (
    <section className="scroll-area" id="GetInTouch">
      <img src={image} alt="" />
      <div id="side" />
      <div className="GetInTouch">
        <div className="iconGetIn">
          <img src={iconmail} alt="" />
          <div id="titleGetIn">
            <h3>GET IN </h3>
            <h3>
              <strong>TOUCH</strong>
            </h3>
          </div>
          <div></div>
        </div>
        <div>
          <form action="/pagina-processa-dados-do-form" method="post">
            <h6>Your Name</h6>
            <input
              id="inputName"
              type="text"
              name="nome"
              placeholder="type your name here..."
            />
            <div>
              <div className="email">
                <h6>Email*</h6>
                <input
                  id="inputEmail"
                  type="text"
                  name="email"
                  placeholder="example@example.com"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                />
              </div>
              <div>
                <h6>Telephone*</h6>
                <input
                  id="inputTel"
                  type="text"
                  name="telephone"
                  placeholder="(  ) ____-____"
                  required
                />
              </div>
            </div>
            <h6>Message*</h6>
            <textarea
             // type="text"
              name="message"
              id="message"
              placeholder="Type what you want to say to us"
              required
            />
            <button id="sendMsg" type="submit">
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
