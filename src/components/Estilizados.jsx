import styled from "styled-components";

export const Fundo = styled.div`
  background-color: #1D1C40;
`;

export const Quadro = styled.div`
 background-color: #072BF2;
 width:350px;
 margin-bottom:25px;
 height: 400px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 border-radius:25px;
`;

export const Foto = styled.img`
  width: 200px;
  height: 200px;
  border-radius:50%;
`;

export const TextoPerfil = styled.p`
  font-size: 2rem;
  color: #fff;
`;

export const Galeria = styled.div`
  padding-top:25px;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align:center;
`;

// git config --global user.name "juliovianadev"
// git config --global user.email "juliovianadev@gmail.com"
// git init 
// git add .
// git commit -m "criando os quadros"
// git push <link do repositorio>