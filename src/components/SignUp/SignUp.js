import React, { useState } from "react";
import { ReactComponent as WaveTopLeft } from "../statics/wave_top_left.svg";
import { ReactComponent as WaveTop } from "../statics/wave_top.svg";
import { ReactComponent as WaveBottom } from "../statics/wave_bottom.svg";
import departamentos_colombia from "../statics/departamentos_colombia.json";
import Select, { components } from "react-select";
import registerService from "../../service/SingUp/SignUpService";
import styles from "./SignUp.module.css";
import houseIcon from "../statics/house_icon.svg";

const optionsSet = new Set();

departamentos_colombia.forEach((item) => {
  optionsSet.add(item.departamento);
});

const options = [...optionsSet].map((value) => ({
  value,
  label: value,
}));
const url_mientras =
  "https://steamuserimages-a.akamaihd.net/ugc/942826643706462589/BDE05CCADD81935640D1AE18FB8FB54A84D41BD9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const maxLengthName = 90;
const maxLengthEmail = 50;
const maxLengthPassword = 15;
const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    textAlign: "justify",
    fontFamily: "Roboto, sans-serif",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif", // Establece la fuente del texto
    fontSize: "16px", // Establece el tamaño de fuente del texto
    textAlign: "justify",
    color:"#000000",
  }),
};
const CustomPlaceholder = (props) => (
  <components.Placeholder {...props}>
    <div className="custom-placeholder">
      <img src={houseIcon} alt="Icon" style={{ marginRight: "8px" }} />
      Ciudad
    </div>
  </components.Placeholder>
);

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <img src={houseIcon} alt="Icon" style={{ marginRight: "8px" }} />
    {children}
  </components.SingleValue>
);

const Registro = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isButtonDisabled] = useState(false);
  const [isCheeked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    city: "",
    name: "",
    checkBox: isCheeked,
  });

  const validateForm = () => {
    let errors = {};
    console.log(formData);
    if (formData.name.trim() === "") {
      errors.name = "Por favor, escriba su nombre.";
    }
    validateEmail();
    validateConfirmEmail();
    validatePassword();
    validateConfirmPassword();
    if (formData.city.trim() === "") {
      errors.city = "Seleccione la ciudad";
    }
    validateCheck();

    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
    return Object.keys(errors).length === 0;
  };
  const validateConfirmPassword = (password = formData.confirmPassword) => {
    let errors = { confirmPassword: "" };
    if (password && password.trim() === "") {
      errors.confirmPassword = "Por favor, confirme su contraseña.";
    }
    if (password && formData.password && password !== formData.password) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
  };

  const validateCheck = (check = formData.checkBox) => {
    let errors = { checkBox: "" };
    if (!check) {
      errors.checkBox = "Por favor Acepte los terminos y condiciones";
    }

    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
  };

  const validatePassword = (password = formData.password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValidPassword = !passwordPattern.test(password);
    let errors = { password: "" };
    if (password.trim() === "") {
      errors.password = "Por favor, cree su contraseña.";
    }
    if (
      password &&
      formData.confirmPassword &&
      password !== formData.confirmPassword
    ) {
      errors.password = "Las contraseñas no coinciden";
    }
    if (isValidPassword) {
      errors.password =
        "Contraseña inválida. Use Mayuscula, miniscula y debe tener un largo minimo de 8 caracteres.";
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
  };

  const validateEmail = (email = formData.email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = { email: "" };
    if (email && !emailPattern.test(email)) {
      errors.email = "Correo electrónico inválido";
    }
    if (email.trim() === "") {
      errors.email = "Por favor, escriba su correo electrónico.";
    }
    if (formData.confirmEmail && email !== formData.confirmEmail) {
      errors.email = "Los correos electrónicos no coinciden";
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
  };
  const validateConfirmEmail = (email = formData.confirmEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = { confirmEmail: "" };
    if (email && !emailPattern.test(email)) {
      errors.confirmEmail = "Correo electrónico inválido";
    }
    if (email && email.trim() === "") {
      errors.confirmEmail = "Por favor, escriba su correo electrónico.";
    }
    if (formData.email && email !== formData.email) {
      errors.confirmEmail = "Los correos electrónicos no coinciden";
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const request = await registerService(formData);
      if (request.isError) {
        console.log("ERROR in request: ", request.response.data.msg);
      } else {
        console.log("Request successfully: ", request.response.data.msg);
      }
    } else {
      console.log("Formulario inválido. Revise los campos.");
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name} ${value} ${checked} ${formData.checkBox}`);
    if (name === "email") {
      const isEmailNotEmpty = value.trim() !== "";
      setShowConfirmEmail(isEmailNotEmpty);
      validateEmail(value);
    }
    if (name === "confirmEmail") {
      validateConfirmEmail(value);
    }
    if (name === "name") {
      let filteredValue = value.replace(/\d/g, "");
      setFormData({ ...formData, [name]: filteredValue });
    }
    if (name === "password") {
      const isPasswordNotEmpty = value.trim() !== "";
      setShowConfirmPassword(isPasswordNotEmpty);
      validatePassword(value);
    }
    if (name === "confirmPassword") {
      validateConfirmPassword(value);
    }

    if (name === "checkBox") {
      console.log(checked);
      setFormData({ ...formData, [name]: checked });
      setChecked(checked);
      validateCheck(checked);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption.value });
  };
  const handleCopy = (e) => {
    e.preventDefault();
    //console.log('Copiar está desactivado para este campo.');
  };
  const handlePaste = (e) => {
    e.preventDefault();
    //console.log('Pegar está desactivado para este campo.');
  };

  return (
    <div className={styles["container-main"]}>
      <div className={styles["wave-container-top-left"]}>
        <WaveTopLeft className={styles["wave-left"]} />
      </div>

      <div className={styles["container-1"]}>
        <div className={styles["big-logo"]}></div>
        <div className={styles["dogs"]}></div>
      </div>

      <div className={styles["container-2"]}>
        <div className={styles["wave-container-top"]}>
          <WaveTop className={styles["wave-top"]} />
        </div>

        <div className={styles["logo-pawsly"]}></div>
        <div className={styles["title"]}>Regístrate</div>
        <div className={styles["section-text"]}>
          Y haz parte de este gran proyecto que busca unirte a ti y a tu mascota
          con los mejores expertos.
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className={styles["text-inputs"]}>
            <input
              type="text"
              id="name"
              name="name"
              className={`${styles["name"]} ${styles["input-text-form"]}`}
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              maxLength={maxLengthName}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.name && (
              <div className={styles["error"]}>{formErrors.name}</div>
            )}

            <Select
              name="city"
              className={`${styles["select-box"]}`}
              onChange={handleSelectChange}
              options={options}
              isSearchable={true}
              components={{
                Placeholder: CustomPlaceholder,
                SingleValue: CustomSingleValue,
              }}
              autoComplete="off"
              aria-autocomplete="none"
              styles={customStyles}
            />

            {formErrors.city && (
              <div className={`${styles["error"]} ${styles["error-1"]}`}>
                {formErrors.city}
              </div>
            )}
            <input
              type="text"
              id="email"
              className={`${styles["email"]} ${styles["input-text-form"]} ${styles["email-1"]}`}
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
              <div className={styles["error"]}>{formErrors.email}</div>
            )}
            {showConfirmEmail && (
              <input
                type="text"
                id="confirmEmail"
                className={`${styles["email"]} ${styles["input-text-form"]}`}
                name="confirmEmail"
                placeholder="Confirme su correo"
                value={formData.confirmEmail}
                onCopy={handleCopy}
                onPaste={handlePaste}
                onChange={handleChange}
                maxLength={maxLengthEmail}
                autoComplete="off"
                aria-autocomplete="none"
              />
            )}

            {formErrors.confirmEmail && (
              <div className={styles["error"]}>{formErrors.confirmEmail}</div>
            )}
            <input
              type="password"
              className={`${styles["password"]} ${styles["input-text-form"]}`}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              maxLength={maxLengthPassword}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.password && (
              <div className={styles["error"]}>{formErrors.password}</div>
            )}
            {showConfirmPassword && (
              <input
                type="password"
                className={`${styles["password"]} ${styles["input-text-form"]}`}
                name="confirmPassword"
                placeholder="Confirme su Contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                maxLength={maxLengthPassword}
                autoComplete="off"
                aria-autocomplete="none"
              />
            )}
            {formErrors.confirmPassword && (
              <div className={styles["error"]}>
                {formErrors.confirmPassword}
              </div>
            )}
          </div>

          <div className="term">
            <label htmlFor="customCheckbox">
              <input
                type="checkbox"
                name="checkBox"
                id="customCheckbox"
                className={styles["custom-checkbox-input"]}
                onChange={handleChange}
                checked={formData.checkBox}
              />
              <div className={styles["custom-checkbox"]}></div>
            </label>

            <a className={styles["term-text"]} href={url_mientras}>
              ¿Aceptas nuestros{" "}
              <b>
                terminos y <br /> condiciones
              </b>
              ?
            </a>
          </div>
          {formErrors.checkBox && (
            <div className={styles["error"]}>
              <br />
              {formErrors.checkBox}
            </div>
          )}
          <button
            id="button-create"
            className={`${styles["button-create"]} ${isButtonDisabled ? "disabled" : ""}`}
            type="submit"
            disabled={isButtonDisabled}
          >
            Crear Cuenta
          </button>
        </form>

        <div className={styles["text-in"]}>
          <a className={styles["term-text-in"]} href={url_mientras}>
            ¿Ya tienes una cuenta? Dale clic aquí
          </a>
          <br />
          <a className={styles["term-text-in"]} href={url_mientras}>
            <b>O ingresa con:</b>
          </a>
        </div>

        <div className={styles["logos-in"]}>
          <div className={styles["google"]}></div>
          <div className={styles["facebook"]}></div>
        </div>

        <div className={styles["wave-container-bottom"]}>
          <WaveBottom className={styles["wave-svg-bottom"]} />
        </div>
      </div>
    </div>
  );
};

export default Registro;
