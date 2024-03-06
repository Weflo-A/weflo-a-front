import { Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const ScoreTableBox = styled.div`
  widdth: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background: ${colors.basic100};
`;

const ScoreTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr;
  padding: 0.5rem 1.75rem;
  width: 100%;
  border: 1px solid ${colors.basic100};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background: white;
  /* shaow_sidebar */
  box-shadow: 0rem 1.5rem 1.625rem 0rem rgba(66, 82, 110, 0.06);
`;

const ScoreTableBody = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  overflow-y: scroll;
`;

const ScoreListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.basic200};
  background: white;
`;

const ScoreTable = () => {
  // 임시 점수 리스트
  const droneScoreList = Array(5).fill({
    loc: '01',
    motor: 11,
    blade: 21,
    esc: 31,
    total: 63,
  });

  return (
    <ScoreTableBox>
      <ScoreTableHeader>
        <Typography fontSize='14px' color={colors.basic400}>
          NO
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          모터
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          블레이드
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          ESC
        </Typography>
        <Typography fontSize='14px' color={colors.basic400}>
          총점수
        </Typography>
      </ScoreTableHeader>
      <ScoreTableBody>
        {droneScoreList.map((item, index) => (
          <ScoreListItem key={index}>
            <Typography fontSize='11px' color={colors.basic700}>
              {item.loc}
            </Typography>
            <Typography fontSize='11px' color={colors.basic700}>
              {item.motor}
            </Typography>
            <Typography fontSize='11px' color={colors.basic700}>
              {item.blade}
            </Typography>
            <Typography fontSize='11px' color={colors.basic700}>
              {item.esc}
            </Typography>
            <Typography fontSize='11px' color={colors.basic700}>
              {item.total}
            </Typography>
          </ScoreListItem>
        ))}
      </ScoreTableBody>
    </ScoreTableBox>
  );
};

export default ScoreTable;
