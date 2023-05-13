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
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export const Text = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  padding: 60px;
  color: #212042;
  @media screen and (max-width: 1200px) {
    font-size: 50px;
    padding: 30px 0 30px 30px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    padding: 30px 0 30px 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Boys = styled.img`
  transform: scale(0.8);
  @media screen and (max-width: 1200px) {
    transform: scale(0.45);
    margin-right: 50px;
  }
  @media screen and (max-width: 1024px) {
    position: relative;
    right: 130px;
    transform: scale(0.3);
    margin-right: 30px;
  }
  @media screen and (max-width: 768px) {
    right: 250px;
    transform: scale(0.2);
  }
  @media screen and (max-width: 480px) {
    right: 320px;
    transform: scale(0.18);
  }
  @media screen and (max-width: 375px) {
    right: 350px;
    transform: scale(0.15);
  }
`;
