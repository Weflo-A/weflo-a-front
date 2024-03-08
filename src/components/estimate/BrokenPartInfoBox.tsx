import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface BrokenPartsInfoType {
  part: string;
  location: string;
  score: number;
  warning: boolean;
}
const PartBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.5938rem 1rem;
  border-radius: 0.5rem;
  background: ${colors.accentOpacity10};
  &.warning {
    border: 1px solid ${colors.accent100};
    background: ${colors.accentOpacity20};
  }
`;

const BrokenPartInfoBox = ({
  part,
  location,
  score,
  warning,
}: BrokenPartsInfoType) => {
  return (
    <PartBox className={warning ? 'warning' : ''}>
      <Typography fontSize='14px'>{part}</Typography>
      <Typography fontSize='14px'>{location}</Typography>
      <Stack direction='row' alignItems='center' gap='0.25rem'>
        <Typography fontSize='14px' color={colors.accent100}>
          {score}점
        </Typography>
        <Typography
          fontSize='11px'
          fontWeight='regular'
          color={colors.basic500}
        >
          / 100점
        </Typography>
      </Stack>
    </PartBox>
  );
};

export default BrokenPartInfoBox;
