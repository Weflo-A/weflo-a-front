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
  style?: React.CSSProperties & { fontSize?: string };
}

//
//
//

const StyledButton = styled.button`
  display: flex;
  padding: 0.3rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0.5rem;
  transition:
    color 200ms,
    background-color 200ms;
  &.accent {
    color: white;
    background: ${colors.accent100};
    &:hover {
      color: white;
      background: ${colors.accentHover};
    }
    &:active {
      background: ${colors.accentPressed};
    }
  }
  &.accentLight {
    color: ${colors.accent100};
    background: ${colors.accent20};
    &:hover {
      color: white;
      background: ${colors.accentHover};
    }
    &:active {
      background: ${colors.accentPressed};
    }
  }
  &.primary {
    color: white;
    background: ${colors.primary100};
    &:hover {
      color: white;
      background: ${colors.primaryHover};
    }
    &:active {
      background: ${colors.primaryPressed};
    }
  }
  &.primaryLight {
    color: ${colors.primary100};
    background: ${colors.primary20};
    &:hover {
      color: white;
      background: ${colors.primaryHover};
    }
    &:active {
      background: ${colors.primaryPressed};
    }
  }
  &.basic {
    color: ${colors.basic400};
    background: ${colors.basic200};
    &:hover {
      color: white;
      background: ${colors.basic400};
    }
    &:active {
      background: ${colors.basic400};
    }
  }
`;

//
//
//

const Button = (props: ButtonProps) => {
  const { text, buttonType = 'accent', onClick, style } = props;

  return (
    <StyledButton className={buttonType} style={style} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
