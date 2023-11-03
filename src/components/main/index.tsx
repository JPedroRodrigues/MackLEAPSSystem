import "./style.css";
import { Form } from "../form";
import { useState } from "react";

export function Main() {
  const [isProjectPressed, setIsProjectPressed] = useState(false);
  const handleButtonClick = (isProjectBtn: boolean) => {
    setIsProjectPressed(isProjectBtn);
  };
  return (
    <div className="background">
      <div className="mainContainer">
        <h1>PUBLICAÇÕES</h1>
        <nav className="main-nav-container">
          <button onClick={() => handleButtonClick(false)}>Notícias</button>
          <button onClick={() => handleButtonClick(true)}>Projetos</button>
          <button onClick={() => handleButtonClick(false)}>Artigos</button>
          <button onClick={() => handleButtonClick(false)}>Outros</button>
        </nav>
        <Form isProject={isProjectPressed} />
      </div>
    </div>
  );
}
