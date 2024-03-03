import { Typography } from '@mui/material';
import { groups } from 'src/assets/data/menuData';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import MixChart from 'src/components/dashboard/MixChart';
import { ResultRecord } from 'src/components/dashboard/ResultRecord';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const DashBoard = () => {
  return (
    <>
      <MenuTabGroup groups={groups} />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            대시보드
          </Typography>
          <Component>
            <TimeLine>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                타임라인
              </Typography>
              <MixChart />
            </TimeLine>
            <Drone></Drone>
            <Record>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                진단 기록
              </Typography>
              <ResultRecord />
            </Record>
            <Breakdown>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                고장 유형
              </Typography>
            </Breakdown>
          </Component>
        </Page>
      </div>
    </>
  );
};

export default DashBoard;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
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
`;

const Drone = styled.div`
  grid-row: span 2;
  grid-column: 3;
  min-width: 308px;
  width: 100%;
  height: 710px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
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
