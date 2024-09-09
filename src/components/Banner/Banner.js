import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import styles from './Banner.module.css';
import styled from 'styled-components';

// Estilo CSS para el contenedor del banner
const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$verticalAlign};
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.$backgroundColor};
  box-shadow: ${(props) => props.$boxShadow};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.$buttonPosition};
  margin-top: 10px;
  width: 100%;
  padding-left: ${(props) => (props.$buttonPosition === 'flex-start' ? '36px' : '0')};
  padding-right: ${(props) => (props.$buttonPosition === 'flex-end' ? '36px' : '0')};

  @media only screen and (max-width: 1023px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

// Estilo CSS para el botón dentro del banner
const StyledButton = styled.button`
  background-color: #3e4eff;
  color: #ffffff;
  padding: ${(props) => (props.button !== '' ? '10px 20px' : '0')};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilo CSS para el título dentro del banner
const StyledTitle = styled.div`
  text-align: ${(props) => props.$titlePosition};
`;

const Banner = ({
  title,
  text,
  button = '',
  buttonPosition = 'center',
  titlePosition = 'left',
  handleClick = () => {},
  verticalAlign = 'flex-start',
  backgroundColor = 'rgba(0, 0, 0, 0.4)',
  boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)',
}) => {
  const hasButton = button.trim() !== '';

  return (
    <BannerContainer $verticalAlign={verticalAlign} $backgroundColor={backgroundColor} $boxShadow={boxShadow}>
      <StyledTitle className={`${styles.banner__text} ${styles['text--title']}`} $titlePosition={titlePosition}>
        {title}
      </StyledTitle>
      <div className={`${styles.banner__text} ${styles['text--paragraph']}`}>{text}</div>
      {hasButton && (
        <ButtonContainer
          $buttonPosition={
            buttonPosition === 'left' ? 'flex-start' : buttonPosition === 'right' ? 'flex-end' : 'center'
          }
        >
          <StyledButton onClick={handleClick}>{button}</StyledButton>
        </ButtonContainer>
      )}
    </BannerContainer>
  );
};

// Agregar validación de PropTypes
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string,
  buttonPosition: PropTypes.oneOf(['left', 'center', 'right']),
  titlePosition: PropTypes.oneOf(['left', 'center', 'right']),
  handleClick: PropTypes.func,
  verticalAlign: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
};

export default Banner;
