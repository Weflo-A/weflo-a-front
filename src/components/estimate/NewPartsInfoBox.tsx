import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import Chip from '../common/Chip';
import CheckBox from '../common/CheckBox';

//
//
//

interface NewPartsProp {
  id: number;
  imgUrl: string;
  name: string;
  loc: string;
  score: number;
  parts: string;
  price: number;
  detail: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//
//
//

const PartsInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.basic200};
  background: white;
  &.active {
    border: 1px solid ${colors.primary100};
    background: ${colors.primary10};
  }
`;

//
//
//

const NewPartInfoBox = ({
  id,
  imgUrl,
  name,
  loc,
  score,
  parts,
  price,
  detail,
  checked,
  onChange,
}: NewPartsProp) => {
  return (
    <PartsInfoBox style={{ gap: '1rem' }} className={checked ? 'active' : ''}>
      <img
        src={imgUrl}
        alt={name}
        style={{
          objectFit: 'contain',
          maxWidth: '7.5rem',
          borderRadius: '0.5rem',
        }}
      />
      <Stack width='100%' direction='column' justifyContent='center' gap='1rem'>
        <Stack
          direction='row'
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <Stack direction='column' gap='0.25rem'>
            <Typography fontSize='14px'>{name}</Typography>
            <Chip
              text={`${loc}-${parts} ${score}점`}
              color={colors.accent100}
              background={colors.accentOpacity20}
            />
          </Stack>
          <Stack direction='row' alignItems='center' gap='1rem'>
            <Typography variant='h4' fontWeight='bold'>
              {price.toLocaleString()} 원
            </Typography>
            <CheckBox
              key={id}
              value={name}
              checked={checked}
              onChange={onChange}
            />
          </Stack>
        </Stack>
        <Typography
          fontSize='11px'
          fontWeight='regular'
          color={colors.basic400}
        >
          {detail}
        </Typography>
      </Stack>
    </PartsInfoBox>
  );
};

export default NewPartInfoBox;
