import { AvatarConteiner, Background, Boys, Text, Wrap } from './style';
import boys from '../../img/boys.png';

export const MainPage = () => {
  return (
    <Background>
  
      <Wrap>
        <Text data-aos-duration='2000' data-aos='fade-up'>
          Департамент
          <br />
          Служіння
          <br />
          Дітям <br />
          Підліткам
          <br />
        </Text>

        <Boys src={boys} />
      </Wrap>
    </Background>
  );
};
