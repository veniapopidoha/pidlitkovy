import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  ${({ bg }) => `background-image: url(${bg}) `};
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
