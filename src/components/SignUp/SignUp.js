import React, { useState } from "react";
import "./SignUp.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city:"",
    phoneNumber: "",
    username: "",
    name:"",
    confirmEmail: ""
  });
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;\'?/>.<,])(?=.*[^\s]).{8,}$/;
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Correo electrónico inválido";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido. Datos enviados:", formData);
    } else {
      console.log("Formulario inválido. Revise los campos.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const isEmailNotEmpty = value.trim() !== "";
    setShowConfirmEmail(isEmailNotEmpty);
    console.log(`${name} ${value} ${value.trim()}`);
  };

  return (
    <div className="container-main">
      <div className="wave-container-top-left">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="wave-svg-top"
        >
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3E51FF" />
              <stop offset="100%" stopColor="#252F99" />
            </linearGradient>
          </defs>
          <path d="M150.36,-5.41 C-10.84,150.67 400.28,68.72 10.08,211.48 L0.00,210.00 L0.00,0.00 Z" />
        </svg>
      </div>

      <div className="container-1">
        <div className="big-logo"></div>
        <div className="dogs"></div>
      </div>

      <div className="container-2">
        <div className="wave-top">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="drop"
          >
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="15%" stopColor="#3E51FF" />
                <stop offset="100%" stopColor="#252F99" />
              </linearGradient>
            </defs>
            <path
              d="M245.77,-3.44 C376.12,120.89 376.12,120.89 500.00,49.98 L500.00,0.00 L338.88,-6.39 Z"
              style={{ stroke: "none", fill: "url(#wave-gradient)" }}
            />
          </svg>
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
              id="email"
              className="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
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
                />
            )}

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <div className="error">{formErrors.name}</div>}

            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && <div className="error">{formErrors.city}</div>}

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
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

            <a id="term-text" href="#">
              ¿Aceptas nuestros{" "}
              <b>
                terminos y <br /> condiciones
              </b>
              ?
            </a>
          </div>

          <button id="button-create" type="submit">
            Crear Cuenta
          </button>
        </form>

        <div className="text-in">
          <a className="term-text-in" href="#">
            ¿Ya tienes una cuenta? Dale clic aquí
          </a>
          <br />
          <a className="term-text-in" href="#">
            <b>O ingresa con:</b>
          </a>
        </div>

        <div className="logos-in">
          <div className="logo-google logo"></div>
          <div className="logo-facebook logo"></div>
        </div>

        <div className="wave-container">
          <svg
            width="500"
            height="150"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="wave-svg"
          >
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="15%" stopColor="#3E51FF" />
                <stop offset="100%" stopColor="#252F99" />
              </linearGradient>
            </defs>
            <path d="M0,49.98 C201.75,-124.81 389.67,290.63 500,49.98 L500,150 L0,150 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Registro;
