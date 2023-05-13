import { Title } from '../Components/Title';
import { Background, Button, Text } from './style';

export const Support = (props) => {
  return (
    <Background id={props.id}>
      <Title data-aos-duration='1000' data-aos='fade-up'>
        ПОЖЕРТВУВАННЯ
      </Title>
      <Text data-aos-duration='2000' data-aos='fade-up'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Text>
      <Button data-aos-duration='1000' data-aos='fade-up'>
        Пожертвувати
      </Button>
    </Background>
  );
};
