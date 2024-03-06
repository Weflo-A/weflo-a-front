import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import CheckBox from 'src/components/common/CheckBox';
import { Blade, ESC, Motor } from 'src/assets';

function GroupPartCard() {
  return (
    <Card>
      <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
        드론 그룹 1
      </Typography>
      <Line>
        <Motor />
        <Typography
          variant='caption'
          fontWeight='regular'
          color={colors.basic500}
        >
          모터
        </Typography>
        <Row>
          <Typography variant='caption' color={colors.basic700}>
            {20}개
          </Typography>
          <CheckBox />
        </Row>
      </Line>
      <Line>
        <Blade />
        <Typography
          variant='caption'
          fontWeight='regular'
          color={colors.basic500}
        >
          블레이드
        </Typography>
        <Row>
          <Typography variant='caption' color={colors.basic700}>
            {18}개
          </Typography>
          <CheckBox />
        </Row>
      </Line>
      <Line>
        <ESC />
        <Typography
          variant='caption'
          fontWeight='regular'
          color={colors.basic500}
        >
          ESC
        </Typography>
        <Row>
          <Typography variant='caption' color={colors.basic700}>
            {2}개
          </Typography>
          <CheckBox />
        </Row>
      </Line>
    </Card>
  );
}

export { GroupPartCard };

const Card = styled.div`
  width: 176px;
  height: 149px;
  border-radius: 8px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  /* shadow_dropdown */
  box-shadow: 0px 4px 16px 0px rgba(66, 82, 110, 0.1);
`;

const Line = styled.div`
  width: 152px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  white-space: nowrap;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
