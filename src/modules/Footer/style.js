import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  h4 {
    font-weight: normal;
    @media screen and (max-width: 1024px) {
      font-size: 10px;
    }
    @media screen and (max-width: 768px) {
      font-size: 6px;
      padding: 0 10px;
    }
    @media screen and (max-width: 480px) {
      font-size: 5px;
      padding: 0 5px;
    }
  }
`;

export const LogoHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 45px;
    margin: 10px;
    :first-child {
      height: 25px;
    }
    @media screen and (max-width: 1024px) {
      height: 25px;
      :first-child {
        height: 15px;
      }
    }
    @media screen and (max-width: 768px) {
      height: 15px;
      margin: 5px;
      :first-child {
        height: 10px;
      }
    }
    @media screen and (max-width: 480px) {
      height: 10px;
      margin: 3px;
      :first-child {
        height: 8px;
      }
    }
    @media screen and (max-width: 375px) {
      height: 8px;
      margin: 1px;
      :first-child {
        height: 5px;
      }
    }
  }
`;
