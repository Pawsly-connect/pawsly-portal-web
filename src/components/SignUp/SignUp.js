import React, { useState } from "react";
import { ReactComponent as WaveTopLeft } from "../statics/wave_top_left.svg";
import { ReactComponent as WaveTop } from "../statics/wave_top.svg";
import { ReactComponent as WaveBottom } from "../statics/wave_bottom.svg";
import houseIcon from "../statics/house_icon.svg";
import departamentos_colombia from "../statics/departamentos_colombia.json";
import Select from "react-select";
import registerService from "./signUp.service";
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
const Registro = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city: "",
    phoneNumber: "",
    username: "",
    name: "",
    confirmEmail: "",
  });
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*\s).{8,}$/;
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Correo electrónico inválido";
    }
    if (formData.confirmEmail && formData.email !== formData.confirmEmail) {
      errors.email = "Los correos electrónicos no coinciden";
    }
    if (!formData.password || !passwordPattern.test(formData.password)) {
      errors.password = "Contraseña inválida";
    }
    if (
      !formData.phoneNumber ||
      !phoneNumberPattern.test(formData.phoneNumber)
    ) {
      errors.phoneNumber = "Número de teléfono inválido";
    }
    if (!formData.username || !usernamePattern.test(formData.username)) {
      errors.username = "Nombre de usuario inválido";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const request = await registerService(formData);
      if (request.isError){
        console.log("ERROR in request: ", request.response.data.msg)
      }else{
        console.log("Request successfully: ", request.response.data.msg)
      }
    } else {
      console.log("Formulario inválido. Revise los campos.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      const isEmailNotEmpty = value.trim() !== "";
      setShowConfirmEmail(isEmailNotEmpty);
    }
    if (name === "name") {
      let filteredValue = value.replace(/\d/g, "");
      setFormData({ ...formData, [name]: filteredValue });
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption.value });
  };

  return (
    <div className="container-main">
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
              maxLength={90}
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
            <input
              type="text"
              id="email"
              className="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
              maxLength={50}
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
                onChange={handleChange}
                maxLength={50}
                autoComplete="off"
                aria-autocomplete="none"
              />
            )}
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              aria-autocomplete="none"
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
          </div>

          <div className="term">
            <label htmlFor="customCheckbox">
              <input type="checkbox" id="customCheckbox" />
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
