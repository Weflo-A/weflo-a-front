import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Battery, Drone1, InfoCircle } from 'src/assets';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface DroneInfo {
  name: string;
  productionYear: number;
  model: string;
  purpose: string;
  cost: number;
  accident: number;
  balance: number;
  totalScore: number;
  motorAvg: number;
  bladeAvg: number;
  escAvg: number;
}

interface Props {
  data: {
    droneInfo: DroneInfo;
  };
}

const DroneDetail = ({ data }: Props) => {
  const { id } = useParams<{ id: string }>();

  const {
    name,
    productionYear,
    model,
    purpose,
    cost,
    accident,
    balance,
    totalScore,
    motorAvg,
    bladeAvg,
    escAvg,
  } = data.droneInfo;

  if (!data.droneInfo) {
    return (
      <Typography variant='body1'>드론 정보를 찾을 수 없습니다.</Typography>
    );
  }

  return (
    <Box>
      <Title>
        <Typography variant='body1' fontWeight='bold' color='white'>
          {name}
        </Typography>
      </Title>
      <Drone1 />
      <One>
        <div>
          <Typography variant='caption' color={colors.basic400}>
            생산연도
          </Typography>
          <Typography fontSize='14px' fontWeight='bold' color='white'>
            {productionYear}
          </Typography>
        </div>
        <div>
          <Typography variant='caption' color={colors.basic400}>
            모델명
          </Typography>
          <Typography fontSize='14px' fontWeight='bold' color='white'>
            {model}
          </Typography>
        </div>
        <div>
          <Typography variant='caption' color={colors.basic400}>
            사용용도
          </Typography>
          <Typography fontSize='14px' fontWeight='bold' color='white'>
            {purpose}
          </Typography>
        </div>
      </One>
      <Two>
        <div>
          <Typography variant='caption' color={colors.basic400}>
            누적 투입 비용
          </Typography>
          <Row>
            <Typography variant='h3' fontWeight='bold' color={colors.accent100}>
              {cost.toLocaleString()}
            </Typography>
            <Typography variant='body2' color={colors.accent100}>
              원
            </Typography>
          </Row>
        </div>
        <div>
          <Typography variant='caption' color={colors.basic400}>
            주행 시 사고 확률
          </Typography>
          <Row>
            <Typography variant='h3' fontWeight='bold' color={colors.green100}>
              {accident}
            </Typography>
            <Typography variant='body2' color={colors.green100}>
              %
            </Typography>
          </Row>
        </div>
      </Two>
      <Block>
        <Typography variant='caption' color={colors.basic400}>
          최근 진단 결과
        </Typography>
        <Circle>
          <CircleSize>
            <CircularProgressbarWithChildren
              value={balance}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '16px',
                pathTransitionDuration: 0.5,

                // Colors
                pathColor: `${colors.yellow100}`,
                textColor: `${colors.yellow100}`,
                trailColor: `${colors.basic700}`,
              })}
            >
              <Typography variant='caption' color='white' lineHeight='120%'>
                밸런스
              </Typography>
              <Typography
                variant='body2'
                fontWeight='bold'
                color={colors.yellow100}
                lineHeight='120%'
              >
                {balance}%
              </Typography>
            </CircularProgressbarWithChildren>
          </CircleSize>
          <CircleSize>
            <CircularProgressbarWithChildren
              value={totalScore}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '16px',
                pathTransitionDuration: 0.5,

                // Colors
                pathColor: `${colors.green100}`,
                textColor: `${colors.green100}`,
                trailColor: `${colors.basic700}`,
              })}
            >
              <Typography variant='caption' color='white' lineHeight='120%'>
                총 점수
              </Typography>
              <Typography
                variant='body2'
                fontWeight='bold'
                color={colors.green100}
                lineHeight='120%'
              >
                {totalScore}%
              </Typography>
            </CircularProgressbarWithChildren>
          </CircleSize>
        </Circle>
      </Block>
      <Block>
        <Row>
          <Typography variant='caption' color={colors.basic400}>
            부품별 평균 수명
          </Typography>
          <InfoCircle />
        </Row>
        <Row2>
          <Column>
            <BatteryStyle />
            <ProgressBarStyle value={motorAvg} width={35} height={60} />
            <Num>
              <Typography variant='caption' fontWeight='bold' color='white'>
                {motorAvg}%
              </Typography>
            </Num>
            <Label>
              <Typography fontSize='11px' color='white'>
                Motor
              </Typography>
            </Label>
          </Column>
          <Column>
            <BatteryStyle />
            <ProgressBarStyle value={bladeAvg} width={35} height={60} />
            <Num>
              <Typography variant='caption' fontWeight='bold' color='white'>
                {bladeAvg}%
              </Typography>
            </Num>
            <Label>
              <Typography fontSize='11px' color='white'>
                Blade
              </Typography>
            </Label>
          </Column>
          <Column>
            <BatteryStyle />
            <ProgressBarStyle value={escAvg} width={35} height={60} />
            <Num>
              <Typography variant='caption' fontWeight='bold' color='white'>
                {escAvg}%
              </Typography>
            </Num>
            <Label>
              <Typography fontSize='11px' color='white'>
                ESC
              </Typography>
            </Label>
          </Column>
        </Row2>
      </Block>
    </Box>
  );
};

export { DroneDetail };

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  width: 100%;
`;

const One = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`;

const Two = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${colors.basic700};
  background: ${colors.basic900};
  gap: 13px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Row2 = styled(Row)`
  gap: 30px;
`;

const Column = styled.div`
  position: relative;
  width: 44px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Circle = styled(Row)`
  gap: 36px;
`;
const CircleSize = styled.div`
  width: 91px;
  height: 91px;
`;

const ProgressBarStyle = styled(ProgressBar)`
  position: absolute;
`;

const BatteryStyle = styled(Battery)`
  position: absolute;
  left: 0;
  z-index: 1;
`;

const Num = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 15;
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
`;
