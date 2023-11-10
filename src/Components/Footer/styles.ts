import exp from "constants";
import styled from "styled-components";

export const Footer = styled.footer`
  background: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  padding: 3rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 900px;
`;

export const TextLogo = styled.h2`
  font-weight: 800;
  font-size: 21px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  h2:nth-child(1) {
    font-size: 19px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

export const Text = styled.h2`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  margin: 0.5rem 0;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #b1b1b1;

    margin-top: 10px;
  }
`;
