import { Card } from '../Components/Card';
import { Title } from '../Components/Title';
import { Background, CardWrap } from './style';
import student from '../../img/student.png';
import group from '../../img/group.png';
import teacher from '../../img/teacher.png';

export const Goals = () => {
  return (
    <Background>
      <Title data-aos-duration='1000' data-aos='fade-up'>
        НАШІ ЦІЛІ
      </Title>
      <CardWrap >
        <Card
          $delay={500}
          $color={1}
          $text='Ми робимо послідовниками Ісуса Христа дітей та підлітків України.'
          $img={student}
        />
        <Card
          $delay={1000}
          $color={2}
          $text='Служити насправді – а не тільки «євангелізувати».'
          $img={group}
        />
        <Card
          $delay={1500}
          $color={3}
          $text='Показати власний приклад'
          $img={teacher}
        />
      </CardWrap>
    </Background>
  );
};
