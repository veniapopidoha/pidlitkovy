import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Goals } from './Goals';
import { MainPage } from './MainPage';
import { Support } from './Support';

export const Holovna = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <MainPage />
      <Goals />
      <Support/>
    </>
  );
};
