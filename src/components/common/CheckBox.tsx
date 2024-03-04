import { Typography } from '@mui/material';
import React, { useState } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface CheckBoxProps {
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false); // 체크 여부를 관리하는 상태

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type='checkbox'
        checked={checked}
        onChange={toggleChecked}
      />
      <Typography variant='caption' color={colors.basic500}>
        {label}
      </Typography>
    </CheckboxContainer>
  );
};

export default CheckBox;

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 0.5rem;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid ${colors.primary100};
  background-color: #fff;
  border-radius: 0.35rem;
  margin-right: 0.5rem;

  &:hover {
    box-shadow: 0 0 0 max(2px, 0.4em) ${colors.primary20};
    cursor: pointer;
  }

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${colors.primary100};
  }
`;
