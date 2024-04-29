import styles from "./LogIn.module.css";
import React, { useState } from "react";
import { ReactComponent as WaveTop } from "../statics/wave_top.svg";
import loginService from "../../service/authMngr/loginService";

const Ingreso = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const maxLengthEmail = 50;
  const maxLengthPassword = 15;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = await validateForm();
    if (isFormValid) {
      const request = await loginService(formData);
      if (request.isError) {
        console.error("ERROR in request: ", request.response.data.msg);
      } else {
        console.log("Request successfully: ", request.response.data.msg);
      }
    } else {
      console.log("Formulario inválido. Revise los campos.");
    }
  };

  const validateForm = async () => {
    const isEmailValid = await validateEmail(formData.email);
    const isPasswordValid = await validatePassword(formData.password);
    return isEmailValid && isPasswordValid;
  };

  const validateEmail = async (email) => {
    let emailError = "";
    if (!email.trim()) {
      emailError = "Por favor, escriba su correo electrónico.";
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
    return !emailError;
  };

  const validatePassword = async (password) => {
    let passwordError = "";
    if (!password.trim()) {
      passwordError = "Por favor, escriba su contraseña.";
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
    return !passwordError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      validateEmail(value);
    }
    if (name === "password") {
      validatePassword(value);
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };
  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["container-main"]}>
      <div className={styles["container-2"]}>
        <div className={styles["wave-top"]}>
          <WaveTop className={styles["wave-svg"]} />
        </div>

        <div className={styles.logopawsly}></div>
        <div className={styles.title}>Iniciar Sesion</div>

        <form onSubmit={handleSubmit}>
          <div className={styles["text-inputs"]}>
            <input
              type="text"
              id="email"
              className={styles.email}
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
              onCopy={handleCopy}
              onPaste={handlePaste}
              maxLength={maxLengthEmail}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.email && (
              <div className={styles.error}>{formErrors.email}</div>
            )}
            <input
              type="password"
              className={styles.password}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              maxLength={maxLengthPassword}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.password && (
              <div className={styles.error}>{formErrors.password}</div>
            )}
          </div>
          <button className={styles["button-in"]} type="submit">
            Iniciar
          </button>
        </form>

        <div className={styles["text-in"]}>
          <a className="term-text-in" href={"/auth"}>
            ¿Aun no tienes una cuenta? Dale clic aquí
          </a>
          <br />
          <div className="term-text-in">
            <b>O ingresa con:</b>
          </div>
        </div>

        <div className={styles["logos-in"]}>
          <div className={styles["google"]} ></div>
          <div className={styles["facebook"]} ></div>
        </div>
        <div className={styles["dogs-bottom-wrapper"]}>
          <div className={styles["dogs-bottom"]}>
            <div className={styles["dog-bottom-left"]}></div>
            <div className={styles["dog-bottom-center"]}></div>
            <div className={styles["cat-bottom-right"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ingreso;
