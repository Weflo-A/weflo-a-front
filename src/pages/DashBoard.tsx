import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDashMain } from 'src/api/dashboard';
import { BackBlue } from 'src/assets';
import { groups } from 'src/assets/data/menuData';
import Button from 'src/components/common/Button';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import { DroneDetail } from 'src/components/dashboard/DroneDetail';
import FailurePieChart from 'src/components/dashboard/FailurePieChart';
import MixChart from 'src/components/dashboard/MixChart';
import { ResultRecord } from 'src/components/dashboard/ResultRecord';
import colors from 'src/constants/colors';
import styled from 'styled-components';

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

interface Test {
  testDate: string;
  space: string;
  point: number;
  testResultId: number;
}

interface TimeLine {
  date: string;
  motorPoint: number;
  bladePoint: number;
  escPoint: number;
}

interface DroneGroup {
  groupName: string;
  droneList: { name: string }[];
}

const DashBoard = () => {
  const navigate = useNavigate();
  const { groupId, id } = useParams();
  const [mainData, setMainData] = useState<{
    droneInfo: DroneInfo;
    testList: Test[];
    timeLine: TimeLine[];
    droneGroup: DroneGroup[];
  } | null>(null);

  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    getDashMain(Number(id))
      .then((res) => {
        console.log('Dashboard main', res); // 확인용
        setMainData(res.data.data); // mainData 상태 업데이트
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {mainData && <MenuTabGroup groups={groups} type='dashboard' />}
      <div className='page'>
        <Page>
          <Top>
            <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
              대시보드
            </Typography>
            <Button
              text={
                <>
                  <BackBlue /> 모니터링으로 돌아가기
                </>
              }
              buttonType='primaryLight'
              onClick={handleButtonClick}
              style={{ width: '180px', height: '32px' }}
            />
          </Top>
          <Component>
            <TimeLine>
              <ChartTop>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                  color={colors.basic700}
                >
                  타임라인
                </Typography>
                <ChartLabelBox>
                  <Stack
                    flexDirection='row'
                    gap='0.3125rem'
                    alignItems='center'
                  >
                    <LabelSquare color={colors.accent100} />
                    <Typography
                      variant='caption'
                      fontWeight='regular'
                      color={colors.basic500}
                    >
                      모터
                    </Typography>
                  </Stack>
                  <Stack
                    flexDirection='row'
                    gap='0.3125rem'
                    alignItems='center'
                  >
                    <LabelSquare color={colors.accent50} />
                    <Typography
                      variant='caption'
                      fontWeight='regular'
                      color={colors.basic500}
                    >
                      블레이드
                    </Typography>
                  </Stack>
                  <Stack
                    flexDirection='row'
                    gap='0.3125rem'
                    alignItems='center'
                  >
                    <LabelSquare color={colors.accent30} />
                    <Typography
                      variant='caption'
                      fontWeight='regular'
                      color={colors.basic500}
                    >
                      ESC
                    </Typography>
                  </Stack>
                </ChartLabelBox>
                <Typography
                  variant='caption'
                  fontWeight='regular'
                  color={colors.basic400}
                >
                  2023년 12월 - 2024년 04월
                </Typography>
              </ChartTop>
              <div>
                {mainData && <MixChart timeLine={mainData.timeLine} />}
                <ChartBottom>
                  <BlockOrange>부품 교체일</BlockOrange>
                  <BlockPrimary>예상 진단일</BlockPrimary>
                </ChartBottom>
              </div>
            </TimeLine>
            <Drone>
              {mainData && (
                <DroneDetail data={{ droneInfo: mainData.droneInfo }} />
              )}
            </Drone>
            <Record>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                진단 기록
              </Typography>
              {mainData && (
                <ResultRecord
                  groupId={Number(groupId)}
                  data={{ testList: mainData.testList }}
                />
              )}
            </Record>
            <Breakdown>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                고장 유형
              </Typography>
              <Chart>
                <FailurePieChart />
                <Text>
                  <Typography
                    fontSize='11px'
                    fontWeight='regular'
                    color={colors.basic500}
                  >
                    가장 빈도수 높은
                    <br />
                    고장 유형
                  </Typography>
                  <Typography
                    variant='caption'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    Blade 고장
                  </Typography>
                  <Typography
                    variant='body1'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    {45}%
                  </Typography>
                </Text>
              </Chart>
            </Breakdown>
          </Component>
        </Page>
      </div>
    </>
  );
};

export default DashBoard;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Component = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 372fr 308fr 308fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
`;

const TimeLine = styled.div`
  grid-column: 1 / span 2;
  min-width: 696px;
  width: 100%;
  height: 348px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Drone = styled.div`
  grid-row: span 2;
  grid-column: 3;
  min-width: 308px;
  width: 100%;
  height: 710px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  padding: 20px;
  background: linear-gradient(180deg, #09101c 0%, #2e4263 100%);
`;

const Record = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1;
  min-width: 372px;
  width: 100%;
  height: 343px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px;
  gap: 6px;
`;

const Breakdown = styled.div`
  grid-column: 2;
  min-width: 308px;
  width: 100%;
  height: 343px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px;
`;

const ChartTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  gap: 20px;
  white-space: nowrap;
`;

const ChartLabelBox = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.basic100};
  gap: 1.5rem;
`;

const LabelSquare = styled.div<{ color: string }>`
  display: flex;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.color};
`;

const ChartBottom = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-left: 30px;
`;

const BlockOrange = styled.div`
  width: 85px;
  display: inline-flex;
  padding: 2px 12px 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${colors.accent100};
  background: var(--Accent-Transparent-20, rgba(255, 124, 0, 0.2));
  color: ${colors.accent100};
  font-size: 12px;
  line-height: 150%; /* 18px */
  grid-column: 4;
  white-space: nowrap;
`;

const BlockPrimary = styled.div`
  width: 85px;
  display: inline-flex;
  padding: 2px 12px 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${colors.basic300};
  background: ${colors.basic200};
  color: ${colors.basic600};
  font-size: 12px;
  line-height: 150%; /* 18px */
  grid-column: 7;
  white-space: nowrap;
`;

const Chart = styled.div`
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
