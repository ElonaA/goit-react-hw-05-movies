import PropTypes from "prop-types";
import {Wrapper, ButtonStyled } from "./Button.styled";


export default function Button({ onClick, text }) {
  return (
    <Wrapper>
      <ButtonStyled
        type="button"
        onClick={() => {
        onClick();
      }}
      >
        {text}
      </ButtonStyled>
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};