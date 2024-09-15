import React from 'react';
import styles from './Dashboard.module.css';
import pawslyClaro from '../statics/pawsly_claro.png';
import { ReactComponent as WaveTop } from '../statics/wave_top.svg';
import Carrousel from '../Carrousel/Carrousel';
import data from '../statics/data/carrouselPromos.json';

const Dashboard = () => {
  const handleClick = () => {
    console.log('hicieron clic en ver todos');
  };

  return (
    <div className={styles['dashboard']}>
      <aside className={styles['dashboard__menu-container']}>
        <nav className={styles['dashboard__menu-items']}>
          <div className={styles['menu__logo-container']}>
            <div className={styles['menu__logo-title']}>
              <strong>Pawsly</strong>
            </div>
            <img className={styles['menu__logo-img']} src={pawslyClaro} alt="Pawsly logo" />
          </div>
          <a className={styles['menu__item-options']} href="#">
            Inicio
          </a>
          <a className={styles['menu__item-options']} href="#">
            Blog
          </a>
          <a className={styles['menu__item-options']} href="#">
            Contactanos
          </a>
          <a className={styles['menu__item-options']} href="#">
            Acerca de
          </a>
          <a className={styles['menu__item-business']}>
            <div className={styles['item__line']} />
            <p className={styles['item__text']}>Para negocios</p>
            <div className={styles['item__line']} />
          </a>
          <a className={styles['menu__item-business']} href="#">
            Impulsa tu negocio
          </a>
        </nav>
      </aside>
      <div className={styles['dashboard__options-container']}>
        <WaveTop className={styles['wave-svg']} />
        <button className={styles['user-icon']} onClick={handleClick}></button>
      </div>
      <Carrousel data={data.slides} delayTranslate={5000} />
    </div>
  );
};

export default Dashboard;
