import React from "react";
import styles from "./Button.module.css";

const Button = ({
  title,
  disabled = false,
  type = "",
  handleClick = () => {},
}) => {
  return (
    <button
      className={styles["button"]}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
