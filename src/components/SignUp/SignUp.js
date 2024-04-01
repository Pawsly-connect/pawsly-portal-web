import React, { useState, useEffect } from "react";
import { ReactComponent as WaveTopLeft } from "../statics/wave_top_left.svg";
import { ReactComponent as WaveTop } from "../statics/wave_top.svg";
import { ReactComponent as WaveBottom } from "../statics/wave_bottom.svg";
import departamentos_colombia from "../statics/departamentos_colombia.json";
import Select from "react-select";
import "./SignUp.css";

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
const maxLengthPassword = 8;


const Registro = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    console.log(formData);
    if (formData.name.trim() === ""){
      errors.name = "Por favor, escriba su nombre.";
    }
    if (formData.email && !emailPattern.test(formData.email)) {
      errors.email = "Correo electrónico inválido";
    }
    if (formData.email.trim() === ""){
      errors.email = "Por favor, escriba su correo electrónico.";
    }
    if (formData.confirmEmail.trim() === ""){
      errors.confirmEmail = "Por favor, escriba de nuevo su correo electrónico.";
    }
    if (formData.confirmEmail && formData.email !== formData.confirmEmail) {
      errors.email = "Los correos electrónicos no coinciden";
    }

    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (!formData.password || !passwordPattern.test(formData.password)) {
      errors.password = "Contraseña inválida";
    }
    if (formData.city.trim() ===""){
      errors.city = "Seleccione la ciudad";
    }
    if (!formData.checkBox) {
      errors.checkBox = "Por favor Acepte los terminos y condiciones";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido. Datos enviados:", formData);
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
    }

    if (name === "name") {
      let filteredValue = value.replace(/\d/g, "");
      setFormData({ ...formData, [name]: filteredValue });
    }
    if (name === "password"){
      const isPasswordNotEmpty = value.trim() !== "";
      setShowConfirmPassword(isPasswordNotEmpty);
    }
    if (name === "checkBox") {
      setFormData({...formData, [name]: checked});
      setChecked(checked);
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
    <div className="container-main" >
      <div className="wave-container-top-left">
        <WaveTopLeft />
      </div>

      <div className="container-1">
        <div className="big-logo"></div>
        <div className="dogs"></div>
      </div>

      <div className="container-2">
        <div className="wave-top">
          <WaveTop />
        </div>

        <div id="logo-pawsly"></div>
        <div className="title">Regístrate</div>
        <div className="section-text">
          Y haz parte de este gran proyecto que busca unirte a ti y a tu mascota
          con los mejores expertos.
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="text-inputs">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              maxLength={maxLengthName}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.name && <div className="error">{formErrors.name}</div>}
            <Select
              name="city"
              className="select-box"
              onChange={handleSelectChange}
              options={options}
              isSearchable={true}
              placeholder="Ciudad"
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.city && <div className="error">{formErrors.city}</div>}
            <input
              type="text"
              id="email"
              className="email"
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
            {showConfirmEmail && (
              <input
                type="text"
                id="confirmEmail"
                className="email"
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
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              maxLength={maxLengthPassword}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.password && (
                <div className="error">{formErrors.password}</div>
            )}
            {showConfirmPassword && (
                <input
                    type="password"
                    className="password"
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
              <div className="error">{formErrors.confirmPassword}</div>
            )}
          </div>

          <div className="term">
            <label htmlFor="customCheckbox">
              <input type="checkbox"
                     name="checkBox"
                     id="customCheckbox"
                     onChange={handleChange}
                     checked={formData.checkBox}
              />
              <div className="custom-checkbox"></div>
            </label>

            <a id="term-text" href={url_mientras}>
              ¿Aceptas nuestros{" "}
              <b>
                terminos y <br /> condiciones
              </b>
              ?
            </a>

          </div>
          {formErrors.checkBox && (

              <div className="error">
                <br/>
                {formErrors.checkBox}
              </div>
          )}
          <button
            id="button-create"
            type="submit"
            className={isButtonDisabled ? "disabled" : ""}
            disabled={isButtonDisabled}
          >
            Crear Cuenta
          </button>
        </form>

        <div className="text-in">
          <a className="term-text-in" href={url_mientras}>
            ¿Ya tienes una cuenta? Dale clic aquí
          </a>
          <br />
          <a className="term-text-in" href={url_mientras}>
            <b>O ingresa con:</b>
          </a>
        </div>

        <div className="logos-in">
          <div id="google"></div>
          <div id="facebook"></div>
        </div>

        <div className="wave-container">
          <WaveBottom />
        </div>
      </div>
    </div>
  );
};

export default Registro;
