import * as S from "./styles";
import { LogoMackLeaps } from "./../../assets/icons";

function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.LogoContainer>
          <LogoMackLeaps isLittle />
          <S.TextLogo> MACKLEAPS </S.TextLogo>
        </S.LogoContainer>
        <S.NavContainer>
          <S.PagesContainer>
            <h2>PÁGINAS</h2>
            <S.Text>HOME</S.Text>
            <S.Text>PROJETOS</S.Text>
            <S.Text>PESQUISAS</S.Text>
            <S.Text>EQUIPE</S.Text>
            <S.Text>NOTÍCIAS</S.Text>
            <S.Text>SOBRE</S.Text>
          </S.PagesContainer>
          <S.PagesContainer>
            <h2>PARCERIA</h2>
            <img
              style={{ width: 80, height: 42 }}
              src="./parceria1.png"
              alt="parceria"
            />
          </S.PagesContainer>
          <S.PagesContainer>
            <h2>CONTATO</h2>
            <S.Text>Email</S.Text>
            <S.Text>Linkedin</S.Text>
            <S.Text>Instagram</S.Text>
          </S.PagesContainer>
        </S.NavContainer>

        <S.MapContainer>
          <img
            style={{ borderRadius: 24, width: "100%" }}
            src="./mapa.png"
            alt="mapa"
          />
          <p>Endereço</p>
          <p style={{ textAlign: "center" }}>
            R. da Consolação, 930 - Consolação, São Paulo - SP{" "}
          </p>
          <p> Telefone (11) 2114-8000</p>
        </S.MapContainer>
      </S.Container>
    </S.Footer>
  );
}

export { Footer };
