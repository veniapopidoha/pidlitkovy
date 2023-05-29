import { Title } from '../Components/Title';
import { Background, Button, Text } from './style';

export const Support = (props) => {
  return (
    <Background id={props.id}>
      <Title data-aos-duration='1000' data-aos='fade-up'>
        ПОЖЕРТВУВАННЯ
      </Title>
      <Text data-aos-duration='2000' data-aos='fade-up'>
        <p>
          Дорогі друзі, кожен з нас має можливість підтримати майбутнє
          покоління. Ми проводимо табори та зустрічі, де діти та підлітки
          розкривають свої таланти та навички.
        </p>
        <p>
          Ваша фінансова підтримка допоможе забезпечити матеріали,
          кваліфікованих волонтерів та створить надійне середовище для розвитку.
        </p>
        <p>
          Приєднайтесь до нашої місії та допоможіть зробити світ кращим для
          нашого майбутнього покоління.
        </p>
        <p>
          Будь-яка сума, яку ви можете пожертвувати, велика цінність для нас.{' '}
        </p>
        <p>
          Всі кошти підуть на функціювання нашого департаменту, та поверненню не
          підлягають.
        </p>
      </Text>
      <Button
        data-aos-duration='1000'
        data-aos='fade-up'
        href='https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJhbW91bnQiOiIxMDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JTQvtCx0YDQvtCy0ZbQu9GM0L3RliDQv9C+0LbQtdGA0YLQstGD0LLQsNC90L3RjyIsInB1YmxpY19rZXkiOiJzYW5kYm94X2kzODAxNTQ0NTgwNSIsImxhbmd1YWdlIjoidWsifQ==&signature=SqcdpYo2lXkeM3XkODb8qsAJLHM='
      >
        Пожертвувати
      </Button>
    </Background>
  );
};
