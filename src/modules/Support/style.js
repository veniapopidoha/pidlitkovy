import styled from 'styled-components';
import bg from '../../img/bg-pay.svg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  color: #212042;
  width: 70%;
  p {
    text-align: left;
    text-indent: 20px !important;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 65%;
    font-size: 22px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    width: 90%;
    p {
    text-indent: 8px !important;
  }
  }
  @media screen and (max-width: 375px) {
    font-size: 7px;
    width: 90%;
  }
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
  @media screen and (max-width: 1024px) {
    padding: 10px 100px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 8px 70px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 3px 60px;
    margin-top: 5px;
  }
`;
