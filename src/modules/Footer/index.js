import { LogoHolder, Wrap } from './style';

import liqpay from './liqpay.svg';
import mc from './mc.svg';
import privat from './privat.svg';
import visa from './visa.svg';

export const Footer = () => {
  return (
    <Wrap>
      <LogoHolder>
        <img src={liqpay} />
        <img src={privat} />
        <img src={mc} />
        <img src={visa} />
      </LogoHolder>
      <h4>Copyright © 2023 ГО В ІМ'Я МАЙБУТНЬОГО ПОКОЛІННЯ</h4>
    </Wrap>
  );
};
