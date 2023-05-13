import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
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
  }
`;
