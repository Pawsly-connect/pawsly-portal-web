import React, { useState, useEffect } from "react";
import styles from "./Verify.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import verifyService from "../../service/authMngr/verifyService";

const Verify = () => {
  const navigate = useNavigate();
  const { key } = useParams();
  const [showLoader, setShowLoader] = useState(true);
  const [isError, setIsError] = useState(null);
  const [codeResponse, setCodeResponse] = useState(0);

  const redirectLogin = () => {
    return navigate("/login");
  };
  const redirectHome = () => {
    return navigate("/home");
  };

  useEffect(() => {
    try {
      verifyService(key).then((req) => {
        if (req.response.data) {
          setCodeResponse(req.response.data.code);
          if (req.isError) {
            if (req.response.data.code === 2004) {
              setIsError(false);
            } else {
              setIsError(true);
            }
          } else {
            setIsError(false);
          }
        } else {
          setIsError(true);
        }
        setShowLoader(false);
      });
    } catch (_err) {
      setIsError(true);
      setShowLoader(false);
    }
  }, [key]);

  return (
    <>
      <Loader show={showLoader} />
      {isError === false && (codeResponse === 1003 || codeResponse === 2004) ? (
        <div className={styles["verify"]}>
          <div className={styles["icon__email"]}>
            <div className={styles["icon__check"]}></div>
          </div>
          {codeResponse === 1003 && (
            <div className={styles["verify"]}>
              <h1 className={styles["verify__title"]}>
                <br />
                ¡Bienvenido a Pawsly!
              </h1>
              <p className={styles["verify__message"]}>
                <br />
                Tu correo electronico ha sido confirmado exitosamente.
              </p>
            </div>
          )}
          {codeResponse === 2004 && (
            <div className={styles["verify"]}>
              <h1 className={styles["verify__title"]}>
                <br />
                ¡Tu cuenta ya fue verificada!
              </h1>
              <p className={styles["verify__message"]}>
                <br />
                Intenta iniciar sesion con tu correo y contraseña.
              </p>
            </div>
          )}
          <Button title="Iniciar sesion" handleClick={redirectLogin} />
        </div>
      ) : (
        isError !== null && (
          <div className={styles["verify"]}>
            <div className={styles["icon__error"]}></div>
            <h1 className={styles["verify__title"]}>
              ¡No fue posible verificar tu cuenta!
            </h1>
            <p className={styles["verify__message"]}>
              <br />
              Por favor intentalo de nuevo mas tarde, si el error persiste,
              comunicate con nosotros. (Cod. Error: {codeResponse})
            </p>
            <Button title="Ir al inicio" handleClick={redirectHome} />
          </div>
        )
      )}
    </>
  );
};

export default Verify;
