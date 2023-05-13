import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;;
`; 

export const A = styled.a`
  color: #212042;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;
  :hover {
    color: rgba(198,175,255,0.9)
  }
`;