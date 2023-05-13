import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  ${({ bg }) => (`background-image: url(${bg}) `)};
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
`;