import { Stack, Typography } from '@mui/material';
import ItemContainer from 'src/components/common/ItemContainer';
import DroneTestImage from 'src/components/dashboard/DroneTestImage';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import { brokenParts } from 'src/assets/data/estimateDummy';
import BrokenPartInfoBox from 'src/components/estimate/BrokenPartInfoBox';
import ScoreTable from 'src/components/dashboard/ScoreTable';
import ScoreAvgBox from 'src/components/dashboard/ScoreAvgBox';
import MultiplePieChart from 'src/components/dashboard/MultiplePieChart';
import ScoreRadarChart from 'src/components/dashboard/ScoreRadarChart';
import droneDefault from 'src/assets/images/test/drone-0.png';
import Button from 'src/components/common/Button';
import { BackBlue } from 'src/assets';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSelect from 'src/components/dashboard/OrderSelect';
import MenuTab from 'src/components/common/MenuTab';

const DroneInfoItemBox = styled.div`
  min-width: 10.375rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
  padding: 0.6875rem;
`;

//
//
//

const TestDetailPage = () => {
  const navigate = useNavigate();

  const [scoreOrder, setScoreOrder] = React.useState('');

  /* 페이지 헤더 */
  const renderPageHeader = () => {
    return (
      <Stack
        direction='row'
        gap='1.25rem'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='row' gap='0.5rem'>
          <Typography variant='h2' fontWeight='bold' color={colors.accent100}>
            Drone No.1
          </Typography>
          <Typography variant='h2' fontWeight='bold' color={colors.basic700}>
            견적서
          </Typography>
        </Stack>
        <Button
          text={
            <>
              <BackBlue /> 모니터링으로 돌아가기
            </>
          }
          buttonType='primaryLight'
          onClick={() => {
            navigate(`/monitoring/drone-search`);
          }}
        />
      </Stack>
    );
  };

  /* 점수 도표 */
  const renderScoreChart = () => {
    return (
      <ItemContainer
        style={{
          width: '100%',
          flexDirection: 'row',
          padding: '1.25rem',
          alignItems: 'center',
        }}
      >
        <Stack
          width='100%'
          direction='row'
          display='grid'
          gridTemplateColumns='1fr 1fr'
        >
          <ScoreRadarChart />
          <Stack width='100%' display='grid' gridTemplateColumns='1fr 1fr'>
            <MultiplePieChart title='구동부 01' series={[50, 30, 70]} />
            <MultiplePieChart title='구동부 02' series={[40, 30, 50]} />
            <MultiplePieChart title='구동부 03' series={[70, 30, 50]} />
            <MultiplePieChart title='구동부 04' series={[90, 80, 70]} />
          </Stack>
        </Stack>
      </ItemContainer>
    );
  };
  /* Score List */
  const renderScoreList = () => {
    return (
      <ItemContainer
        style={{
          minWidth: '20rem',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.25rem',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='body1' fontWeight='bold'>
            Score List
          </Typography>
          <OrderSelect
            style={{ height: '6.9375rem' }}
            value={scoreOrder}
            onChange={(e) => setScoreOrder(e.target.value)}
            options={[
              '총점 순',
              '모터 점수 순',
              '블레이드 점수 순',
              'ESC 점수 순',
            ]}
          ></OrderSelect>
        </Stack>
        <ScoreTable />
        <Stack direction='row' gap='0.5rem'>
          <ScoreAvgBox type='모터' score={70} />
          <ScoreAvgBox type='모터' score={70} />
          <ScoreAvgBox type='모터' score={70} />
          <ScoreAvgBox type='모터' score={70} />
        </Stack>
      </ItemContainer>
    );
  };

  /* 종합 진단 섹션 */
  const renderTotalTest = () => {
    return (
      <ItemContainer
        style={{ flexDirection: 'column', gap: '1rem', padding: '1.25rem' }}
      >
        <Typography variant='body1' fontWeight='bold'>
          종합 진단
        </Typography>
        <Stack direction='column' gap='0.5625rem'>
          <DroneInfoItemBox>
            <Typography variant='caption' color={colors.basic500}>
              주행시 사고 확률
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              11%
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox>
            <Typography variant='caption' color={colors.basic500}>
              예상 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              06월 15일
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox>
            <Typography variant='caption' color={colors.basic500}>
              이전 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              02월 04일
            </Typography>
          </DroneInfoItemBox>
        </Stack>
      </ItemContainer>
    );
  };

  /* 교체가 필요한 부품 섹션 */
  const renderBrokenPartsInfo = () => {
    return (
      <ItemContainer
        style={{
          flexDirection: 'column',
          width: '100%',
          padding: '1.25rem',
          gap: '0.6875rem',
        }}
      >
        <Typography variant='body1' fontWeight='bold'>
          교체가 필요한 부품
        </Typography>
        <Stack display='grid' gridTemplateColumns='1fr 1fr 1fr 1fr'>
          <Typography variant='caption' color={colors.basic400}>
            부품
          </Typography>
          <Typography variant='caption' color={colors.basic400}>
            부품위치
          </Typography>
          <Typography variant='caption' color={colors.basic400}>
            점수
          </Typography>
        </Stack>
        <Stack direction='column' gap='0.25rem'>
          {brokenParts.map((item) => (
            <BrokenPartInfoBox
              part={item.parts}
              location={item.loc}
              score={item.score}
              warning={item.warning}
            />
          ))}
        </Stack>
      </ItemContainer>
    );
  };

  return (
    <>
      <MenuTab type='dashboard' />
      <div
        className='page'
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {renderPageHeader()}
        <Stack direction='row' gap='1rem'>
          {renderScoreChart()}
          {renderScoreList()}
        </Stack>
        <Stack direction='row' gap='1rem'>
          {renderTotalTest()}
          {renderBrokenPartsInfo()}
          <DroneTestImage imgUrl={droneDefault} />
        </Stack>
      </div>
    </>
  );
};

export default TestDetailPage;
