import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`;

export const Box = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $color }) =>
    $color === 1
      ? 'background: rgba(200, 255, 41, 0.9);'
      : $color === 2
      ? 'background: rgba(33, 32, 66, 0.9);'
      : 'background: rgba(198, 175, 255, 0.9);'};
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 250px;
    border-radius: 20%;
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  width: 350px;
  color: #212042;
  @media screen and (max-width: 1200px) {
    width: 250px;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 130px;
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 8px;
  }
  @media screen and (max-width: 375px) {
    font-size: 6px;
    width: 80px;
  }
`;

export const Img = styled.img`
  width: 150px;
  opacity: 1 !important;
  @media screen and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
