import bg2 from '../../../img/bg2.svg';
import { ReverseImg, Wrap, Img } from './style';

export const SpecialBack = () => {
  return (
    <Wrap>
      <ReverseImg src={bg2} />
      <Img src={bg2} />
    </Wrap>
  );
};
