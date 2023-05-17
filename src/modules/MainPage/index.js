import {
  AvatarConteiner,
  Background,
  Boys,
  Text,
  TextMobile,
  Wrap,
} from './style';
import boys from '../../img/boys.png';

export const MainPage = () => {
  return (
    <Background>
      <Wrap>
        <Text data-aos-duration='2000' data-aos='fade-up'>
          В ІМ'Я
          <br />
          МАЙБУТНЬОГО
          <br />
          ПОКОЛІННЯ
        </Text>
        <TextMobile data-aos-duration='2000' data-aos='fade-up'>
          В ІМ'Я
          <br />
          МАЙБУТНЬОГО ПОКОЛІННЯ
        </TextMobile>

        <Boys src={boys} />
      </Wrap>
    </Background>
  );
};
