import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

export const A = styled.a`
  color: #212042;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;
  :hover {
    color: rgba(198, 175, 255, 0.9);
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 0 5px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    margin: 0 5px;
  }
`;
