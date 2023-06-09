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
  font-size: 50px;
  padding-left: 25vw;
  color: #212042;
  display: block;
  width: 50vw;
  @media screen and (max-width: 1200px) {
    font-size: 45px;
    /* padding-left: 60vw; */
  }
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    padding-left: 70vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 20vw;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    padding: 0;
    margin-top: 20px;
    display: none;
    font-size: 18px;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

export const TextMobile = styled(Text)`
  display: none;
  width: 80vw;
  text-align: center;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (max-width: 768px) {
    height: 60vh;
    justify-content: space-between;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 50vh;
  }
`;

export const Boys = styled.img`
  transform: scale(0.6);
  position: relative;
  right: 170px;
  margin-left: 80px;
  @media screen and (max-width: 1200px) {
    transform: scale(0.45);
    right: 150px;
  }
  @media screen and (max-width: 1024px) {
    right: 270px;
    transform: scale(0.3);
    margin-right: 30px;
  }
  @media screen and (max-width: 768px) {
    right: 300px;
    transform: scale(0.2);
    margin-left: 0;
  }
  @media screen and (max-width: 480px) {
    right: 0;
    top: -190px;
    margin-right: 0;
    transform: scale(0.35);
  }
  @media screen and (max-width: 375px) {
    transform: scale(0.3);
  }
`;
