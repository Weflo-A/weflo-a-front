import { Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import RecyclePartBox from './RecyclePartBox';
import { recycleParts } from 'src/assets/data/estimateDummy';
import CheckBox from '../common/CheckBox';

const PartsBox = styled.div`
  widdth: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background: ${colors.basic100};
`;

const PartsHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr 7fr 1.5fr 3fr 2fr;
  padding: 0.75rem 1.6875rem;
  width: 100%;
  border: 1px solid ${colors.basic100};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background: white;
  /* shaow_sidebar */
  box-shadow: 0rem 1.5rem 1.625rem 0rem rgba(66, 82, 110, 0.06);
`;

const PartsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  height: 19.6875rem;
  overflow-y: scroll;
`;

const RecyclePartsList = () => {
  return (
    <PartsBox>
      <PartsHeader>
        <Typography fontSize='14px' color={colors.basic400}>
          부품 종류
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          부품 위치
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          부품 이름
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          점수
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          가격
        </Typography>
        <CheckBox />
      </PartsHeader>
      <PartsBody>
        {recycleParts.map((item, index) => (
          <RecyclePartBox
            loc={item.loc}
            name={item.name}
            score={item.score}
            price={item.price}
            key={index}
            type={item.parts}
          />
        ))}
      </PartsBody>
    </PartsBox>
  );
};

export default RecyclePartsList;
