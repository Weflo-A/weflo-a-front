import colors from 'src/constants/colors';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

//
//
//

export type buttonType =
  | 'accent'
  | 'accentLight'
  | 'basic'
  | 'primary'
  | 'primaryLight';

type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonTypes {
  text: ReactNode;
  buttonType?: buttonType;
  children?: React.ReactNode;
  onClick: () => void;
}

type buttonColorType = {
  color: string;
  bgColor: string;
  hoverColor: string;
  hoverBgColor: string;
  activeBgColor: string;
};

interface StyledButtonProps extends ButtonTypes {
  colorType?: buttonColorType;
}

//
//
//

const initalButtonColors = {
  color: 'white',
  bgColor: colors.accent100,
  hoverColor: 'white',
  hoverBgColor: colors.accentHover,
  activeBgColor: colors.accentPressed,
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  padding: 0.3rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.colorType?.color};
  background: ${(props) => props.colorType?.bgColor};
  transition:
    color 200ms,
    background-color 200ms;
  &:hover {
    color: ${(props) => props.colorType?.hoverColor};
    background: ${(props) => props.colorType?.hoverBgColor};
  }
  &:active {
    color: ${(props) => props.colorType?.hoverColor};
    background: ${(props) => props.colorType?.activeBgColor};
  }
`;

//
//
//

const Button = (props: ButtonProps) => {
  const { text, buttonType, onClick } = props;
  const [buttonColor, setButtonColor] = React.useState(initalButtonColors);

  /* handle button color type */
  const handleButtonColor = () => {
    if (buttonType === 'primary') {
      setButtonColor((prev) => ({
        ...prev,
        bgColor: colors.primary100,
        hoverBgColor: colors.primaryHover,
        activeBgColor: colors.primaryPressed,
      }));
    } else if (buttonType === 'primaryLight') {
      setButtonColor(() => ({
        color: colors.primary100,
        bgColor: colors.primary20,
        hoverColor: 'white',
        hoverBgColor: colors.primaryHover,
        activeBgColor: colors.primaryPressed,
      }));
    } else if (buttonType === 'accentLight') {
      setButtonColor((prev) => ({
        ...prev,
        color: colors.accent100,
        hoverColor: 'white',
        bgColor: colors.accent20,
      }));
    } else if (buttonType === 'basic') {
      setButtonColor(() => ({
        color: colors.basic400,
        bgColor: colors.basic200,
        hoverColor: colors.basic400,
        hoverBgColor: colors.basic400,
        activeBgColor: colors.basic400,
      }));
    } else {
      setButtonColor(initalButtonColors);
    }
  };

  React.useEffect(() => {
    handleButtonColor();
  }, []);

  return (
    <StyledButton colorType={buttonColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
