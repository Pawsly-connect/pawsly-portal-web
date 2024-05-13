import styles from "./Banner.module.css";
import React from "react";
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: ${props => props.buttonPosition === 'right' ? 'flex-end' : props.buttonPosition === 'center' ? 'center' : 'flex-start'};
`;

const StyledButton = styled.button`
    background-color: #3E4EFF;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

const Banner = ({ title, text, button='', buttonPosition="" }) => {
    console.log(buttonPosition);

    return (
        <div className={styles["banner"]}>
            <div className={`${styles["banner__text"]} ${styles["text--title"]}`}>
                {title}
            </div>
            <div className={`${styles["banner__text"]} ${styles["text--paragraph"]}`}>
                {text}
            </div>
            <ButtonContainer buttonPosition={buttonPosition}>
                {button.trim() !== "" && <StyledButton>{button}</StyledButton>}
            </ButtonContainer>
        </div>
    );
};

export default Banner;
