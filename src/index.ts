import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;600&display=swap");


  * {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
  }

  body {
    height: 100vh;

    display: flex;
    flex-direction: column;
    
    
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
  }
`;
