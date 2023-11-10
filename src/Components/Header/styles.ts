import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: transparent;
  height: 276px;
  padding: 3rem 80px;

  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  a.active {
    color: #888192;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  font-size: 15px;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #888192;
  }
`;

export const SwitchTheme = styled.button<{ isSelected?: string }>`
  display: flex;
  align-items: center;

  padding-left: 4px;

  transition: ease-in-out 200ms all;

  position: relative;

  text-align: ${({ isSelected }) =>
    isSelected === "light" ? "left" : "right"};

  background-color: #f5f5f5;
  border: none;
  border-radius: 50px;
  width: 48px;
  height: 25px;

  &::after {
    transition: ease-in-out 300ms all;

    position: absolute;
    top: 4px;
    right: 4px;

    transform: translateX(
      ${(props) => (props.isSelected === "light" ? "0px" : "-24px")}
    );

    content: "";
    width: 16px;
    height: 16px;
    background-color: #2c2c2c;
    border-radius: 50px;
  }
`;

export const LeanguageButton = styled.button`
  border: none;
  border-radius: 50px;
  background-color: transparent;

  cursor: pointer;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50px;

  cursor: pointer;
`;
