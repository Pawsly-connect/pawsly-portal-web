import React, { useState, useEffect } from "react";
import styles from "./Verify.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import verifyService from "../../service/authMngr/verifyService";

const Verify = () => {
    const navigate = useNavigate();
    const { key } = useParams();
    const [showLoader, setShowLoader] = useState(true);
    const [isError, setIsError] = useState(null);
    const [codeResponse, setCodeResponse] = useState(0);

    const redirectLogin = () => {
        return navigate("/login");
    }
    const redirectHome = () => {
        return navigate("/home");
    }

    useEffect(() => {
        try{
            verifyService(key).then((req) => {
                if(req.response.data){
                    setCodeResponse(req.response.data.code);
                    if (req.isError) {
                        if(req.response.data.code === 2004){
                            setIsError(false);
                        }else{
                            setIsError(true);
                        }
                    }else{
                        setIsError(false);
                    }
                }else{
                    setIsError(true);
                }
                setShowLoader(false);
            })
        } catch (_err) {
            setIsError(true);
            setShowLoader(false);
        }
    }, [key]);

    return (
        <div className="main-container">
            {showLoader && (
                <div className={styles["loader"]}>
                    <Loader />
                </div>
            )}
            {isError === false && (codeResponse === 1003 || codeResponse === 2004) ? (
                <div className={styles["result-container"]}>
                    <div className={styles["email"]}>
                        <div className={styles["check"]}></div>
                    </div>
                    {codeResponse === 1003 && (
                        <div className={styles["result-container"]}>
                            <h1 className={styles["title"]}><br/>¡Bienvenido a Pawsly!</h1>
                            <p className={styles["message"]}><br/>Tu correo electronico ha sido confirmado exitosamente.</p>
                        </div>
                    )}
                    {codeResponse === 2004 && (
                        <div className={styles["result-container"]}>
                            <h1 className={styles["title"]}><br/>¡Tu cuenta ya fue verificada!</h1>
                            <p className={styles["message"]}><br/>Intenta iniciar sesion con tu correo y contraseña.</p>
                        </div>
                    )}
                    <button
                        id="button-login"
                        className={styles["button"]}
                        onClick={redirectLogin}
                    >
                        Iniciar sesion
                    </button>
                </div>
            ) : isError !== null && (
                <div className={styles["result-container"]}>
                    <div className={styles["error"]}></div>
                    <h1 className={styles["title"]}>¡No fue posible verificar tu cuenta!</h1>
                    <p className={styles["message"]}><br/>Por favor intentalo de nuevo mas tarde, si el error persiste, comunicate con nosotros. (Cod. Error: {codeResponse})</p>
                    <button
                        id="button-home"
                        className={styles["button"]}
                        onClick={redirectHome}
                    >
                        Ir al inicio
                    </button>
                </div>
            )}
        </div>
    );
};

export default Verify;
