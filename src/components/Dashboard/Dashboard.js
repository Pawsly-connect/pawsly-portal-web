import React from 'react';
import styles from './Dashboard.module.css';
import Carrousel from '../Carrousel/Carrousel';
import Button from '../Button/Button';
import data from '../statics/data/carrouselPromos.json';
import Header from '../HeaderDashboard/HeaderDashboard';

const Dashboard = () => {
  return (
    <div className={styles['dashboard']}>
      <Header/>
      <div className={styles['dashboard__options-container']}>
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
              <relative-time className={styles['']} lang='es' datetime='2025-09-22T21:31:31' prefix='' month='long' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
