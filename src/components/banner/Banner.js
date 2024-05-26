import styles from "./Banner.module.css";
import React from "react";
import styled from 'styled-components';

const ButtonContainer = styled.div`
    padding: ${props => props.button !== '' ? '8px' : '0'};
    display: flex;
    justify-content: ${props => props.buttonPosition === 'right' ? 'flex-end' : props.buttonPosition === 'center' ? 'center' : 'flex-start'};
    @media only screen and (min-width: 1023px) {
        padding: ${props => props.button !== '' ? '32px 36px' : '0'};
    }
`;

const StyledButton = styled.button`
    background-color: #3E4EFF;
    color: #FFFFFF;
    padding: ${props => props.button !== '' ? '10px 20px' : '0'};
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background-color: #0056b3;
    }
`;

const StyledTitle = styled.div`
    text-align: ${props => props.titlePosition};
`;

const Banner = ({ title, text, button='', buttonPosition="center", titlePosition="left" ,handleClick=()=>{}}) => {
    return (
        <div className={styles["banner"]}>
            <StyledTitle className={`${styles["banner__text"]} ${styles["text--title"]}`} titlePosition={titlePosition}>
                {title}
            </StyledTitle>
            <div className={`${styles["banner__text"]} ${styles["text--paragraph"]}`}>
                {text}
            </div>
            <ButtonContainer buttonPosition={buttonPosition} button={button}>
                {button.trim() !== "" && <StyledButton button={button} onClick={handleClick}>{button}</StyledButton>}
            </ButtonContainer>
        </div>
    );
};

export default Banner;
