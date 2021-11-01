import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 300px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 3px;

  background-color: ${props => props.theme.colors.white};

  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: ${props => props.theme.size.small};
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font: inherit;
    font-size: ${props => props.theme.size.small};
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  outline: none;

  background-image: url('../../img/loupe.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.6;

  transition: opacity 300ms ease;

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.size.small};
  color: ${props => props.theme.colors.primary};
`;
