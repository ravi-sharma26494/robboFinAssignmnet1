import React from "react";
import PropTypes from "prop-types";
import "./button.styles.css";

const Button = ({
  text,
  onClick,
  className,
  buttonIcon,
  buttonIconAlignment,
}) => {
  return (
    <button
      onClick={onClick}
      className={className ? `${className}` : "base-button"}
    >
      {buttonIconAlignment ? (
        <>
          <span>{text}</span>
          <span className="button-text">{buttonIcon}</span>
        </>
      ) : (
        <>
          <span>{buttonIcon}</span>

          <span>{text}</span>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
