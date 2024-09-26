import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import pawslyClaro from '../statics/pawsly_claro.png';
import { ReactComponent as WaveTop } from '../statics/wave_top.svg';
import Carrousel from '../Carrousel/Carrousel';
import Button from '../Button/Button';
import data from '../statics/data/carrouselPromos.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const openMenuOptions = () => {
    setOpenOptions(true);
  };
  const closeMenuOptions = () => {
    setOpenOptions(false);
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
        <div className={styles['corner-menu']}>
          <WaveTop className={styles['wave-svg']} />
          <button className={styles['user-icon']} onClick={openMenuOptions}/>
        </div>
        {openOptions ? (
          <>
            <div className={styles['menu__overlay']} onClick={closeMenuOptions}/>
            <div className={styles['menu__options']}>
              <div className={styles['menu__header']}>
                <div className={styles['menu__logo_options-container']}>
                  <div className={styles['menu__logo_options-title']}>
                    <strong>Pawsly</strong>
                  </div>
                  <img className={styles['menu__logo_options-img']} src={pawslyClaro} alt="Pawsly logo" />
                </div>
                <FontAwesomeIcon icon={faXmark} onClick={closeMenuOptions} className={styles['menu__button-close']}/>
              </div>
              <div className={styles['menu__list-options']}>
                <a className={styles['menu__item-options']} href="#">
                  Mi perfil
                </a>
                <a className={styles['menu__item-options']} href="#">
                  Mis mascotas
                </a>
                <a className={styles['menu__item-options']} href="#">
                  Mis recordatorios
                </a>
                <div className={styles['line-separator']} />
                <Button style='light' title="Cerrar sesion" type="submit" />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <Carrousel data={data.slides} delayTranslate={5000} />
        <div className={styles['line-separator']} />
        <div className={styles['dashboard__cards']}>
          <div className={styles['dashboard__cards-pets']}>
            <div className={styles['dashboard__cards-header']}>
              <h1 className={styles['dashboard__card-title']}>Mis Mascotas</h1>
              <Button size='small' title="Crear nuevo" type="submit" />
            </div>
            <div className={styles['dashboard__card-content']}>
              <h1 className={styles['dashboard__card-no-content']}>
                Aun no tienes ninguna Mascota
              </h1>
            </div>
          </div>
          <div className={styles['dashboard__cards-reminders']}>
            <div className={styles['dashboard__cards-header']}>
              <h1 className={styles['dashboard__card-title']}>Mis Recordatorios</h1>
              <Button size='small' title="Crear nuevo" type="submit" />
            </div>
            <div className={styles['dashboard__card-content']}>
              <h1 className={styles['dashboard__card-no-content']}>
                Aun no tienes ningun Recordatorio
              </h1>
            </div>
            <relative-time className={styles['']} lang='es' datetime='2025-09-22T21:31:31' prefix='' month='long' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
