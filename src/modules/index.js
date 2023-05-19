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

import mind from '../img/mind.png';
import capability from '../img/capability.png';
import study from '../img/study.png';

import { Footer } from './Footer';
import { Header } from './Header';
import { SpecialBack } from './Components/SpecialBack/SpecialBack';
import { FirstBlock } from './Goals/Block';
import { Auditory } from './Goals/Auditory';

export const Holovna = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <MainPage />
      {/* <SpecialBack/> */}
      <FirstBlock
        id='goals'
        // bg={bg}
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
        icon1={study}
        text1={'Забезпечення освітніх можливостей'}
        icon2={capability}
        text2={'Розвиток талантів та навичок'}
        icon3={mind}
        text3={'Формування цінностей та громадянської свідомості'}
      />
      {/* <Goals
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
      /> */}
      <Auditory id='auditory' bg={bg3} />
      <Support id='support' />
      <Footer />
    </>
  );
};
