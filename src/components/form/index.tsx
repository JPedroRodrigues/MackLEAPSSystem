import { ChangeEvent, useState } from "react";
import "./style.css";
import Dropdown from "../dropdown";
import TextEditor from "../text_editor/editor";

type FormProps = {
  isProject?: boolean;
};

export function Form({ isProject = false }: FormProps) {
  const [caracteres, setCaracteres] = useState("");
  const [statusIsClicked, setStatusIsClicked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const novoValor = event?.target?.value;

    const numerosApenas = novoValor.replace(/[^0-9]/g, "");

    // Aplique a formatação "dd/mm/yyyy"
    if (numerosApenas.length <= 2) {
      setCaracteres(numerosApenas);
    } else if (numerosApenas.length <= 4) {
      setCaracteres(`${numerosApenas.slice(0, 2)}/${numerosApenas.slice(2)}`);
    } else {
      setCaracteres(
        `${numerosApenas.slice(0, 2)}/${numerosApenas.slice(
          2,
          4
        )}/${numerosApenas.slice(4, 8)}`
      );
    }
  };

  // Setar o background do botao de status caso ele esteja pressionado
  const handleStatusClick = () => {
    setStatusIsClicked(!statusIsClicked);
    console.log(statusIsClicked);
  };

  const statusClicked = {
    backgroundColor: statusIsClicked ? "rgba(197, 197, 197, 0.5)" : "",
  };

  return (
    <section className="form">
      <section className="row-1">
        {!isProject ? (
          <>
            <div className="form-input">
              <div className="title-container">
                <h3>TÍTULO:</h3>
                <input type="text" />
              </div>
              <div className="data-container">
                <h3>DATA:</h3>
                <input onChange={handleChange} type="text" value={caracteres} />
              </div>
            </div>
            <div className="status-container">
              <h3>STATUS:</h3>
              <button onClick={handleStatusClick} style={statusClicked}>
                <img src="./status.svg" alt="" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="form-input">
              <div className="title-container">
                <h3>TÍTULO:</h3>
                <input type="text" />
              </div>
              <div>
                <Dropdown />
              </div>
            </div>
          </>
        )}
      </section>
      <section className="row-2">
        <div className="text-container">
          <h3>TEXTO</h3>
          <nav></nav>
        </div>
      </section>
      <section className="row-4">
        <TextEditor />
      </section>
    </section>
  );
}
