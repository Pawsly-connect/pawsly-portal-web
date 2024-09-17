import React, { useState } from 'react';
import departamentosColombia from '../statics/departamentosColombia.json';
import Select, { components } from 'react-select';
import registerService from '../../service/authMngr/SignUpService';
import styles from './SignUp.module.css';
import houseIcon from '../statics/house_icon.svg';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';


const termsAndConditionsText = `
Bienvenido a nuestra página web. Si continúas navegando y utilizando este sitio web, estás de acuerdo en cumplir y estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de [Nombre de la Empresa] contigo en relación con este sitio web. Si no estás de acuerdo con alguna parte de estos términos y condiciones, por favor no utilices nuestro sitio web.

El término '[Nombre de la Empresa]' o 'nosotros' se refiere al propietario del sitio web. El término 'tú' se refiere al usuario o visitante de nuestro sitio web.

### Uso del sitio web
1. El contenido de las páginas de este sitio web es para tu información general y uso exclusivo. Está sujeto a cambios sin previo aviso.
2. Ni nosotros ni ningún tercero proporcionamos ninguna garantía en cuanto a la exactitud, oportunidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para ningún propósito en particular. Reconoces que dicha información y materiales pueden contener inexactitudes o errores y excluimos expresamente la responsabilidad por tales inexactitudes o errores en la mayor medida permitida por la ley.
3. El uso de cualquier información o materiales en este sitio web es completamente bajo tu propio riesgo, por lo cual no seremos responsables. Será tu propia responsabilidad asegurarte de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con tus requisitos específicos.

### Propiedad intelectual
Este sitio web contiene material que es de nuestra propiedad o licenciado. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida salvo de acuerdo con el aviso de copyright, que forma parte de estos términos y condiciones.

### Enlaces a otros sitios web
De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para tu conveniencia y para proporcionar más información. No significan que respaldemos el(los) sitio(s) web. No tenemos responsabilidad sobre el contenido de los sitios web enlazados.

### Ley aplicable
El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes de [país].

### Modificaciones a los Términos
Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento, por lo que te recomendamos revisarlos periódicamente.
### Uso del sitio web
1. El contenido de las páginas de este sitio web es para tu información general y uso exclusivo. Está sujeto a cambios sin previo aviso.
2. Ni nosotros ni ningún tercero proporcionamos ninguna garantía en cuanto a la exactitud, oportunidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para ningún propósito en particular. Reconoces que dicha información y materiales pueden contener inexactitudes o errores y excluimos expresamente la responsabilidad por tales inexactitudes o errores en la mayor medida permitida por la ley.
3. El uso de cualquier información o materiales en este sitio web es completamente bajo tu propio riesgo, por lo cual no seremos responsables. Será tu propia responsabilidad asegurarte de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con tus requisitos específicos.

### Propiedad intelectual
Este sitio web contiene material que es de nuestra propiedad o licenciado. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida salvo de acuerdo con el aviso de copyright, que forma parte de estos términos y condiciones.

### Enlaces a otros sitios web
De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para tu conveniencia y para proporcionar más información. No significan que respaldemos el(los) sitio(s) web. No tenemos responsabilidad sobre el contenido de los sitios web enlazados.

### Ley aplicable
El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes de [país].

### Modificaciones a los Términos
Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento, por lo que te recomendamos revisarlos periódicamente.
`;


const optionsSet = new Set();

departamentosColombia.forEach((item) => {
  optionsSet.add(item.departamento);
});

const options = [...optionsSet].map((value) => ({
  value,
  label: value,
}));

const maxLengthName = 90;
const maxLengthEmail = 50;
const maxLengthPassword = 15;
const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    textAlign: 'justify',
    fontFamily: 'Roboto, sans-serif',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif', // Establece la fuente del texto
    fontSize: '16px', // Establece el tamaño de fuente del texto
    textAlign: 'justify',
    color: '#000000',
  }),
};
const CustomPlaceholder = (props) => (
  <components.Placeholder {...props}>
    <div className="custom-placeholder">
      <img src={houseIcon} alt="Icon" style={{ marginRight: '8px' }} />
      Ciudad
    </div>
  </components.Placeholder>
);

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <img src={houseIcon} alt="Icon" style={{ marginRight: '8px' }} />
    {children}
  </components.SingleValue>
);

const Registro = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    city: '',
    name: '',
    checkBox: '',
  });
  const [isButtonDisabled, setButton] = useState(true);
  const [isCheeked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    city: '',
    name: '',
    checkBox: isCheeked,
  });

  const validateForm = () => {
    let errors = {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      city: '',
      name: '',
      checkBox: '',
    };
    errors.name = validateName();
    errors.email = validateEmail();
    errors.confirmEmail = validateConfirmEmail();
    errors.password = validatePassword();
    errors.confirmPassword = validateConfirmPassword();
    errors.checkBox = validateCheck();
    errors.city = validateCity();
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
    const errorValues = Object.values(errors).filter((element) => element !== '');
    return errorValues.length === 0;
  };
  const validateCity = (city = formData.city) => {
    if (city.trim() === '') {
      return 'Seleccione la ciudad';
    }
    return '';
  };
  const validateName = (name = formData.name) => {
    if (name.trim() === '') {
      return 'Por favor, escriba su nombre.';
    }
    if (name.length < 10) {
      return 'Por favor, escriba su nombre completo.';
    }
    return '';
  };

  const validateConfirmPassword = (password = formData.confirmPassword) => {
    if (password && password.trim() === '') {
      return 'Por favor, confirme su contraseña.';
    }
    if (password && formData.password && password !== formData.password) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  };

  const validateCheck = (check = formData.checkBox) => {
    if (!check) {
      return 'Por favor Acepte los terminos y condiciones';
    }
    return '';
  };

  const validatePassword = (password = formData.password) => {
    const passwordPattern = /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?=\S{8,}).*$/;
    const isValidPassword = !passwordPattern.test(password);
    if (password.trim() === '') {
      return 'Por favor, cree su contraseña.';
    }
    if (password && formData.confirmPassword && password !== formData.confirmPassword) {
      return 'Las contraseñas no coinciden';
    }
    if (isValidPassword) {
      return 'Contraseña inválida. Use Mayuscula, miniscula, un caracter especial y debe tener un largo minimo de 8 caracteres.';
    }
    return '';
  };

  const validateEmail = (email = formData.email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      return 'Correo electrónico inválido';
    }
    if (email.trim() === '') {
      return 'Por favor, escriba su correo electrónico.';
    }
    if (formData.confirmEmail && email !== formData.confirmEmail) {
      return 'Los correos electrónicos no coinciden';
    }
    return '';
  };
  const validateConfirmEmail = (email = formData.confirmEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      return 'Correo electrónico inválido';
    }
    if (email && email.trim() === '') {
      return 'Por favor, escriba su correo electrónico.';
    }
    if (formData.email && email !== formData.email) {
      return 'Los correos electrónicos no coinciden';
    }
    return '';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowLoader(true);
      try {
        const request = await registerService(formData);
        if (request.isError) {
          console.error('Mostrar el error desde back: ', request);
        } else {
          console.log('Redirigir al dashboard');
        }
      } catch (error) {
        console.error('Mostrar error tecnico cliente: ', error);
      } finally {
        setShowLoader(false);
      }
    } else {
      setButton(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    let errors = {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      city: '',
      name: '',
      checkBox: '',
    };
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const isEmailNotEmpty = value.trim() !== '';
      setShowConfirmEmail(isEmailNotEmpty);
      errors.email = validateEmail(value);
    }
    if (name === 'confirmEmail') {
      errors.confirmEmail = validateConfirmEmail(value);
    }
    if (name === 'name') {
      let filteredValue = value.replace(/\d/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      errors.name = validateName(value);
    }
    if (name === 'password') {
      const isPasswordNotEmpty = value.trim() !== '';
      setShowConfirmPassword(isPasswordNotEmpty);
      errors.confirmPassword = validatePassword(value);
    }
    if (name === 'confirmPassword') {
      errors.confirmPassword = validateConfirmPassword(value);
    }

    if (name === 'checkBox') {
      setFormData({ ...formData, [name]: checked });
      errors.checkBox = validateCheck(checked);
      setChecked(checked);
    }
    if (name === 'city') {
      errors.city = validateCity(value);
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
    const errorValues = Object.values(errors).filter((element) => element !== '');
    const dataValues = Object.values(formData).filter((element) => element !== '');
    if (errorValues.length === 0 && dataValues.length === 7) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption.value });
    handleChange({ target: { name: 'city', value: selectedOption.value } });
  };
  const handleCopy = (e) => {
    e.preventDefault();
  };
  const handlePaste = (e) => {
    e.preventDefault();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <Header />
      <div className={styles['container-main']}>
        <Loader show={showLoader} />
        <div className={styles['container-1']}>
          <div className={styles['big-logo']}></div>
          <div className={styles['dogs']}></div>
        </div>

        <div className={styles['container-2']}>
          <div className={styles['logo-pawsly']}></div>
          <div className={styles['title']}>Regístrate</div>
          <div className={styles['section-text']}>
            Y haz parte de este gran proyecto que busca unirte a ti y a tu mascota con los mejores expertos.
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className={styles['text-inputs']}>
              <input
                type="text"
                id="name"
                name="name"
                className={`${styles['name']} ${styles['input-text-form']}`}
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                maxLength={maxLengthName}
                autoComplete="off"
                aria-autocomplete="none"
              />
              {formErrors.name && <div className={styles['error']}>{formErrors.name}</div>}

              <Select
                name="city"
                className={`${styles['select-box']}`}
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

              {formErrors.city && <div className={`${styles['error']} ${styles['error-1']}`}>{formErrors.city}</div>}
              <input
                type="text"
                id="email"
                className={`${styles['email']} ${styles['input-text-form']} ${styles['email-1']}`}
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
              {formErrors.email && <div className={styles['error']}>{formErrors.email}</div>}
              {showConfirmEmail && (
                <input
                  type="text"
                  id="confirmEmail"
                  className={`${styles['email']} ${styles['input-text-form']}`}
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

              {formErrors.confirmEmail && <div className={styles['error']}>{formErrors.confirmEmail}</div>}
              <input
                type="password"
                className={`${styles['password']} ${styles['input-text-form']}`}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                maxLength={maxLengthPassword}
                autoComplete="off"
                aria-autocomplete="none"
              />
              {formErrors.password && <div className={styles['error']}>{formErrors.password}</div>}
              {showConfirmPassword && (
                <input
                  type="password"
                  className={`${styles['password']} ${styles['input-text-form']}`}
                  name="confirmPassword"
                  placeholder="Confirme su Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  maxLength={maxLengthPassword}
                  autoComplete="off"
                  aria-autocomplete="none"
                />
              )}
              {formErrors.confirmPassword && <div className={styles['error']}>{formErrors.confirmPassword}</div>}
            </div>

            <div className={styles['term']}>
              <label htmlFor="customCheckbox">
                <input
                  type="checkbox"
                  name="checkBox"
                  id="customCheckbox"
                  className={styles['custom-checkbox-input']}
                  onChange={handleChange}
                  checked={formData.checkBox}
                />
                <div className={styles['custom-checkbox']}>
                  <div className={styles['paw']}>
                    <div className={styles['paw-inner']}></div>
                    <div className={styles['paw-bottom']}></div>
                  </div>
                </div>
              </label>

              <div className={styles['term-text']}>
                ¿Aceptas nuestros{' '}
                <span className={styles['link']} onClick={openModal}>
                  términos y <br /> condiciones
                </span>
                ?
              </div>
              <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <h2>Términos y Condiciones</h2>
                <p>{termsAndConditionsText}</p>
              </Modal>
            </div>
            {formErrors.checkBox && (
              <div className={styles['error']}>
                <br />
                {formErrors.checkBox}
              </div>
            )}
            <Button title="Crear cuenta" disabled={isButtonDisabled} type="submit" />
          </form>

          <div className={styles['text-in']}>
            <a className={styles['term-text-in']} href={'/#/login'}>
              ¿Ya tienes una cuenta? Dale clic aquí
            </a>
            <br />
            <div className={styles['term-text-in']}>
              <b>O ingresa con:</b>
            </div>
          </div>

          <div className={styles['logos-in']}>
            <div className={styles['google']}></div>
            <div className={styles['facebook']}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registro;
