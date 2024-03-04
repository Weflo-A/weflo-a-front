import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BackBlue } from 'src/assets';
import { groups } from 'src/assets/data/menuData';
import Button from 'src/components/common/Button';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import { DroneDetail } from 'src/components/dashboard/DroneDetail';
import MixChart from 'src/components/dashboard/MixChart';
import { ResultRecord } from 'src/components/dashboard/ResultRecord';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const DashBoard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <MenuTabGroup groups={groups} />
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
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                타임라인
              </Typography>
              <MixChart />
            </TimeLine>
            <Drone>
              <DroneDetail />
            </Drone>
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
  min-width: 1-00px;
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
