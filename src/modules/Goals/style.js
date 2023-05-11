import styled from 'styled-components';
import bg from '../../img/bg2.svg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
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