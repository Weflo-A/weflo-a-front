import colors from 'src/constants/colors';
import styled from 'styled-components';
import Chip from '../common/Chip';
import { Stack, Typography } from '@mui/material';

interface RepairCompanyProp {
  logo: string;
  name: string;
  tag: string[];
  cost: number[];
  type?: 'best' | 'recommend';
}

const CardBox = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${colors.basic200};
  background: white;

  /* shadow_dropdown */
  box-shadow: 0px 4px 16px 0px rgba(66, 82, 110, 0.1);
  &.best {
    border: 1px solid ${colors.accent100};
  }
`;

const RepairCompanyCard = ({
  logo,
  name,
  tag,
  cost,
  type,
}: RepairCompanyProp) => {
  return (
    <CardBox className={type === 'best' ? 'best' : ''}>
      {type ? (
        <Chip
          style={{ position: 'absolute', zIndex: 1000 }}
          text={type === 'best' ? '가장 추천' : '추천'}
          color={type === 'best' ? 'white' : colors.accent100}
          background={
            type === 'best' ? colors.accent100 : colors.accentOpacity20
          }
        />
      ) : null}

      <Stack
        maxWidth='18rem'
        width='100%'
        alignItems='center'
        direction='column'
        padding='1.25rem'
        gap='1.25rem'
      >
        <img
          style={{
            width: '13.1875rem',
            height: '4.375rem',
          }}
          src={logo}
          alt={name}
        />
        <Stack width='100%' direction='column' gap='0.75rem'>
          <Typography variant='body1' fontWeight='bold'>
            {name}
          </Typography>
          <Stack direction='row' flexWrap='wrap' gap='0.25rem'>
            {tag.map((item) => (
              <Chip
                key={item}
                text={item}
                color={colors.primary100}
                background={colors.primaryOpacity20}
                style={{ flexShrink: 0 }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack width='100%' direction='column'>
          <Typography variant='caption' color={colors.basic500}>
            예상 수리 비용
          </Typography>
          <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
            {`${cost[0]} ~ ${cost[1]}`}
          </Typography>
        </Stack>
      </Stack>
    </CardBox>
  );
};

export default RepairCompanyCard;
