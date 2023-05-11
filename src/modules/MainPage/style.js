import styled from 'styled-components';
import bg from '../../img/bg1.svg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Text = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  padding: 60px;
  color: #212042;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10vh;
`;

export const Boys = styled.img`
  transform: scale(0.8);
`;
