import styled from 'styled-components';

export const Wrap = styled.div`
  line-height: 0;
  position: absolute;
`;

export const Img = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const ReverseImg = styled(Img)`
  transform: rotate(180deg);
  transform: scaleY(-1);
`;
