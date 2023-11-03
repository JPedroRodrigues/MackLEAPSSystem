import { useState } from "react";
import "./style.css";

export default function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const dropDownIsOpenCss = {
    borderBottomLeftRadius: isDropdownOpen ? "2px" : "",
    borderBottomRightRadius: isDropdownOpen ? "2px" : "",
    borderTopRightRadius: isDropdownOpen ? "20px" : "",
    borderTopLeftRadius: isDropdownOpen ? "20px" : "",
  };

  const downArrowCss = {
    border: isDropdownOpen ? "6px solid #1d1d1d" : "",
    padding: isDropdownOpen ? "0.6rem 0.5rem" : "",
    borderRadius: isDropdownOpen ? "20px 20px 20px 20px" : "",
    backgroundColor: isDropdownOpen ? "#DFDFDF" : "",
    position: isDropdownOpen ? "absolute" : "",
    right: "-25px",
    top: "-10px",
  };

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        style={dropDownIsOpenCss}
      >
        ORIENTADOR
        <img src="./downArrow.svg" alt="down arrow icon" style={downArrowCss} />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-options">
          <button onClick={() => handleOptionClick("Opção 1")}>MEMBRO</button>
          <button onClick={() => handleOptionClick("Opção 2")}>
            VOLUNTÁRIO
          </button>
          <button onClick={() => handleOptionClick("Opção 3")}>PARCERIA</button>
        </div>
      )}
      {/* {selectedOption && <p>Você selecionou: {selectedOption}</p>} */}
    </div>
  );
}
