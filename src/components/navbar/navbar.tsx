import "./style.css";
import { useState } from "react";

export function Navbar() {
  const [publiIsOpen, setpubliIsOpen] = useState(false);
  const [usersIsOpen, setUsersIsOpen] = useState(false);
  const [colabsIsOpen, setColabsIsOpen] = useState(false);

  const handlePubliClick = () => {
    setpubliIsOpen(!publiIsOpen);
  };

  const handleUsersClick = () => {
    setUsersIsOpen(!usersIsOpen);
  };

  const handleColabsClick = () => {
    setColabsIsOpen(!colabsIsOpen);
  };

  const pubOpen = {
    backgroundColor: publiIsOpen ? "#E1001E" : "",
  };

  const usersOpen = {
    backgroundColor: usersIsOpen ? "#E1001E" : "",
  };

  const colabOpen = {
    backgroundColor: colabsIsOpen ? "#E1001E" : "",
  };

  const listIsOpen = {
    transform: publiIsOpen ? "translateY(0px)" : 'translateY(-260px)',
  };

  return (
    <div className="navbar-container">
      <button className="navbar-btn" onClick={handlePubliClick}>
        <h2 className="navbar-publi-btn" style={pubOpen}>
          PUBLICAÇÕES
          <div className="publi-list" style={listIsOpen}>
            <button>
              <h2>NOTÍCIAS</h2>
            </button>
            <button>
              <h2>PROJETOS</h2>
            </button>
            <button>
              <h2>ARTIGOS</h2>
            </button>
            <button>
              <h2>OUTROS</h2>
            </button>
          </div>
        </h2>
      </button>
      <button
        onClick={handleUsersClick}
        className="navbar-users-btn"
        style={usersOpen}>
        <h2>USUÁRIOS</h2>
      </button>
      <button
        onClick={handleColabsClick}
        className="navbar-colaboradores-btn"
        style={colabOpen}>
        <h2>COLABORADORES</h2>
      </button>
    </div>
  );
}
