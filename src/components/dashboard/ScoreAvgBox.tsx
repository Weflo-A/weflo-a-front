import { Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface ScoreAvgBoxProp {
  type: string;
  score: number;
}

const ScoreBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  gap: 0.125rem;
`;

const ScoreAvgBox = ({ type, score }: ScoreAvgBoxProp) => {
  return (
    <ScoreBox>
      <Typography
        fontSize='11px'
        fontWeight='regular'
        color={colors.basic500}
        textAlign='center'
      >
        {type}
        <br />
        평균 점수
      </Typography>
      <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
        {score}
      </Typography>
    </ScoreBox>
  );
};

export default ScoreAvgBox;
