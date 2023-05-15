import { Card } from '../Components/Card';
import { SpecialBack } from '../Components/SpecialBack/SpecialBack';
import { Title } from '../Components/Title';
import { Background, CardWrap } from './style';

export const FirstBlock = (props) => {
  return (
    <Background bg={props.bg} id={props.id}>
      <SpecialBack />
      <Title data-aos-duration='1000' data-aos='fade-up'>
        {props.title}
      </Title>
      <CardWrap>
        <Card $delay={500} $color={1} $text={props.text1} $img={props.icon1} />
        <Card $delay={1000} $color={2} $text={props.text2} $img={props.icon2} />
        <Card $delay={1500} $color={3} $text={props.text3} $img={props.icon3} />
      </CardWrap>
    </Background>
  );
};
