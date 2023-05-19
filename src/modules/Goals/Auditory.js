import { Title } from '../Components/Title';
import { Text } from '../Support/style';
import { Back2 } from './style';

export const Auditory = (props) => {
  return (
    <Back2 bg={props.bg} id={props.id}>
      <Title data-aos-duration='1000' data-aos='fade-up'>
        Охоплення
      </Title>
      <Text data-aos-duration='2000' data-aos='fade-up'>
        Ми бажаємо, щоб жодна дитина чи підліток не залишався поза увагою і не
        мав обмежень у доступі до якісної освіти, підтримки та можливостей. Ми
        прагнемо розширити своє охоплення, працюючи зі школами, сім'ями,
        місцевими громадами та партнерами, щоб забезпечити, що кожна дитина та
        підліток, незалежно від свого походження чи умов життя, мають можливість
        розвиватися та знайти своє місце в світі.
      </Text>
    </Back2>
  );
};
