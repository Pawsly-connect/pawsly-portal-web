<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styles from './Verify.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import verifyService from '../../service/authMngr/verifyService';
=======
import React, { useState, useEffect } from "react";
import styles from "./Verify.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import verifyService from "../../service/authMngr/verifyService";
>>>>>>> 3fd002e8fbd083df6dd40236dc15578f86c9a769

const codesService = {
  success: 1003,
  already: 2004,
  notExist: 2005,
  genericError: 3003,
  errorCipher: 3005,
  noResponse: 0,
};

const okCodes = [codesService.success, codesService.already];

const Verify = () => {
  const navigate = useNavigate();
  const { key } = useParams();
  const [showLoader, setShowLoader] = useState(true);
  const [codeResponse, setCodeResponse] = useState(null);

  const redirectLogin = () => {
    return navigate('/login');
  };
  const redirectHome = () => {
    return navigate('/home');
  };

  useEffect(() => {
    try {
      const keysVerified = JSON.parse(localStorage.getItem('keysVerified')) || [];
      if (keysVerified.indexOf(key) >= 0) {
        setCodeResponse(codesService.already);
        setShowLoader(false);
      } else {
        verifyService(key).then((req) => {
          let responseVerify = req.response.data ? req.response.data.code : codesService.noResponse;
          setCodeResponse(responseVerify);
          if (responseVerify === codesService.already || responseVerify === codesService.success) {
            localStorage.setItem('keysVerified', JSON.stringify([...keysVerified, key]));
          }
          setShowLoader(false);
        });
      }
    } catch (_err) {
      setCodeResponse(codesService.noResponse);
      setShowLoader(false);
    }
  }, [key]);

  return (
    <>
      <Header/>
      <Loader show={showLoader} />
      {okCodes.indexOf(codeResponse) >= 0 ? (
        <div className={styles['verify']}>
          <div className={styles['icon__email']}>
            <div className={styles['icon__check']}></div>
          </div>
          {codeResponse === codesService.success && (
            <>
              <h1 className={styles['verify__title']}>
                <br />
                ¡Bienvenido a Pawsly!
              </h1>
              <p className={styles['verify__message']}>
                <br />
                Tu correo electronico ha sido confirmado exitosamente.
              </p>
            </>
          )}
          {codeResponse === codesService.already && (
            <>
              <h1 className={styles['verify__title']}>
                <br />
                ¡Tu cuenta ya fue verificada!
              </h1>
              <p className={styles['verify__message']}>
                <br />
                Intenta iniciar sesion con tu correo y contraseña.
              </p>
            </>
          )}
          <Button title="Iniciar sesion" handleClick={redirectLogin} />
        </div>
      ) : (
        codeResponse !== null && (
          <div className={styles['verify']}>
            <div className={styles['icon__error']}></div>
            <h1 className={styles['verify__title']}>¡No fue posible verificar tu cuenta!</h1>
            <p className={styles['verify__message']}>
              <br />
              Por favor intentalo de nuevo mas tarde, si el error persiste, comunicate con nosotros. (Cod. Error:{' '}
              {codeResponse})
            </p>
            <Button title="Ir al inicio" handleClick={redirectHome} />
          </div>
        )
      )}
      <Footer/>
    </>
  );
};

export default Verify;
