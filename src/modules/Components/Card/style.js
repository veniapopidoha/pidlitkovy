import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`;

export const Box = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $color }) => ($color === 1 ? 'background: rgba(200, 255, 41, 0.9);' : $color === 2 ? 'background: rgba(33, 32, 66, 0.9);' : 'background: rgba(198, 175, 255, 0.9);')};
`;

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  width: 350px;
  color: #212042;
`;

export const Img = styled.img`
  width: 150px;
  opacity: 1 !important;
`;
