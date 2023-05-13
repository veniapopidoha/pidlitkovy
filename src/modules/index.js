import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Goals } from './Goals';
import { MainPage } from './MainPage';
import { Support } from './Support';

import bg from '../img/bg2.svg';
import bg2 from '../img/bg3.svg';
import bg3 from '../img/bg4.svg';

import student from '../img/student.png';
import group from '../img/group.png';
import teacher from '../img/teacher.png';
import { Footer } from './Footer';
import { Header } from './Header';

export const Holovna = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <MainPage />
      <Goals
        id='goals'
        bg={bg}
        title={'Наші Цілі'}
        icon1={student}
        text1={
          'Ми робимо послідовниками Ісуса Христа дітей та підлітків України.'
        }
        icon2={group}
        text2={'Служити насправді – а не тільки «євангелізувати».'}
        icon3={teacher}
        text3={'Показати власний приклад'}
      />
      <Goals
        id='vision'
        bg={bg2}
        title={'Бачення'}
        icon1={student}
        text1={
          'Ми робимо послідовниками Ісуса Христа дітей та підлітків України.'
        }
        icon2={group}
        text2={'Служити насправді – а не тільки «євангелізувати».'}
        icon3={teacher}
        text3={'Показати власний приклад'}
      />
      <Goals
        id='auditory'
        bg={bg3}
        title={'Охоплення'}
        icon1={student}
        text1={
          'Ми робимо послідовниками Ісуса Христа дітей та підлітків України.'
        }
        icon2={group}
        text2={'Служити насправді – а не тільки «євангелізувати».'}
        icon3={teacher}
        text3={'Показати власний приклад'}
      />
      <Support id='support'/>
      <Footer />
    </>
  );
};
