import React from "react";
import { NavLink } from "react-router-dom";
import {
  SunIcon,
  LogoMackLeaps,
  MoonIcon,
  EarthIcon,
  SearchIcon,
} from "../../assets/icons";

import * as S from "./styles";

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = React.useState("light");

  const handleThemeClick = () => {
    toggleTheme();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <div>
        <LogoMackLeaps />
        <S.NavContainer>
          <S.NavLinkStyled to="/">PROJETOS</S.NavLinkStyled>
          <S.NavLinkStyled to="/info">PESQUISAS</S.NavLinkStyled>
          <S.NavLinkStyled to="/products">EQUIPE</S.NavLinkStyled>
          <S.NavLinkStyled to="/about">SOBRE</S.NavLinkStyled>
          <S.NavLinkStyled to="/contacts">CONTATO</S.NavLinkStyled>
          <S.NavLinkStyled to="/acessibility">ACESSIBILIDADE</S.NavLinkStyled>
          <S.SwitchTheme onClick={handleThemeClick} isSelected={theme}>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </S.SwitchTheme>
          <S.LeanguageButton>
            <EarthIcon />
          </S.LeanguageButton>
          <S.SearchButton>
            <SearchIcon />
          </S.SearchButton>
        </S.NavContainer>
      </div>
    </S.Header>
  );
};

export default Header;
