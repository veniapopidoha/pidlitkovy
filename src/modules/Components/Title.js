import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 88px;
  color: #212042;
  @media screen and (max-width: 1200px) {
    font-size: 70px;
    margin: 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
