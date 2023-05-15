import styled from 'styled-components';

export const Wrap = styled.div`
  line-height: 0;
  position: absolute;
`;

export const Img = styled.img`
  height: 30vh;
  width: 100vw;
  object-fit: cover;
`;

export const ReverseImg = styled(Img)`
  transform: rotate(180deg);
  transform: scaleY(-1);
`;
