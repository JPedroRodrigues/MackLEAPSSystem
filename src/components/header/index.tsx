import { Navbar } from "../navbar/navbar";
import "./style.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-main-container">
        <div className="header-logo-container">
          <img className="acss" src="./acess.svg" alt="" />
          <div className="logo-container">
            <img className="logo" src="logo.svg" alt="logo" />
            <h2 className="homeTitle">HOME</h2>
          </div>
        </div>
        <Navbar />
      </div>
      <div className="sidebar">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <img src="./user.svg" alt="" />
        <img className="settings-icon" src="./settings.svg" alt="" />
      </div>
    </div>
  );
}