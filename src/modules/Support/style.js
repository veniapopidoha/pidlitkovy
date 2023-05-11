import styled from 'styled-components';
import bg from '../../img/bg-pay.svg';

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

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  color: #212042;
  width: 70%;
`;

export const Button = styled.a`
  background: #212042;
  border-radius: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  padding: 15px 120px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;

`;
