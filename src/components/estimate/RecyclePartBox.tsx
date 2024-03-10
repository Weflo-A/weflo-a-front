import { Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import CheckBox from '../common/CheckBox';

//
//
//

interface RecyclePartBoxProp {
  type: string;
  loc: string;
  name: string;
  score: number;
  price: number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PartBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr 7fr 2fr 3fr 1fr;
  justify-content: flex-start;
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary100};
  background: ${colors.primary10};
  padding: 1rem 1.25rem;
`;

//
//
//

const RecyclePartBox = ({
  type,
  loc,
  name,
  score,
  price,
  checked,
  onChange,
}: RecyclePartBoxProp) => {
  return (
    <PartBox>
      <Typography fontSize='14px'>{type}</Typography>
      <Typography fontSize='14px'>{loc}</Typography>
      <Typography fontSize='14px'>{name}</Typography>
      <Typography fontSize='14px'>{score}점</Typography>
      <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
        {price.toLocaleString()} 원
      </Typography>
      <CheckBox value={name} checked={checked} onChange={onChange} />
    </PartBox>
  );
};

export default RecyclePartBox;
