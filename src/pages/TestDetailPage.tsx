import { Stack, Typography } from '@mui/material';
import ItemContainer from 'src/components/common/ItemContainer';
import DroneTestImage from 'src/components/dashboard/DroneTestImage';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import BrokenPartInfoBox from 'src/components/estimate/BrokenPartInfoBox';
import ScoreTable from 'src/components/dashboard/ScoreTable';
import ScoreAvgBox from 'src/components/dashboard/ScoreAvgBox';
import MultiplePieChart from 'src/components/dashboard/MultiplePieChart';
import ScoreRadarChart from 'src/components/dashboard/ScoreRadarChart';
import droneDefault from 'src/assets/images/test/drone1_0.png';
import Button from 'src/components/common/Button';
import { BackBlue } from 'src/assets';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import OrderSelect from 'src/components/dashboard/OrderSelect';
import MenuTab, { Drone, GroupDetail } from 'src/components/common/MenuTab';
import { getAllDrones, getDroneList, getTestDetail } from 'src/api/dashboard';
import DateSelect, { Option } from 'src/components/estimate/DateSelect';
import { getTestDateList } from 'src/api/estimate';

interface AvgScore {
  type: string;
  score: number;
}
export interface ScoreItem {
  num: string;
  part: string;
  motor: number;
  blade: number;
  esc: number;
  total: number;
}

interface WarningItem {
  part: string;
  component: string;
  score: number;
}

interface TestData {
  scoreAvgs: AvgScore[];
  scoreList: ScoreItem[];
  testInfo: {
    name: string;
    testDate: string[];
  };
  testResult: {
    droneScoreResponse: ScoreItem[];
    totalScoreResponse: {
      part1Avg: number;
      part2Avg: number;
      part3Avg: number;
      part4Avg: number;
    };
    totalScore: number;
  };
  totalScore: {
    accident: 11;
    exchangeDate: string;
    expectedDate: string;
  };
  warningList: WarningItem[];
}

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
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [drones, setDrones] = React.useState<Drone[]>();
  const [testData, setTestData] = React.useState<TestData>();
  const [dateList, setDateList] = React.useState<Option[]>([]);
  const [scoreOrder, setScoreOrder] = React.useState('');

  // 대시보드 메인 페이지의 리스트 아이템의 날짜값
  const [testDate, setTestDate] = React.useState(location.state.date);
  const [year, month, date] = testDate
    ? testDate.split('.').map((item: string) => Number(item))
    : []; // year, month, date 나누고 숫자로 만듦 => api 보낼때 형식
  const [selectedDate, setSelectedDate] = React.useState(''); // 선택된 값 형식

  // 대시보드 메인에서 상세로 이동시 (날짜값)
  React.useEffect(() => {
    getAllDrones().then((res) => {
      setDrones(res.data.data);
    });
    if (testDate) {
      getTestDetail(Number(id), 2000 + year, month, date).then((res) => {
        console.log('대시보드->메인', year, month, date);
        setSelectedDate(`${2000 + year}-${month}-${date}`);
        setTestData(res.data.data);
        const newDateList = res.data.data.testInfo.testDate?.map(
          (item: string) => {
            const [year_s, month_s, date_s] = item.split(' ');
            return {
              year: Number(year_s.slice(0, -1)),
              month: Number(month_s.slice(0, -1)),
              day: Number(date_s.slice(0, -1)),
            };
          }
        );
        setDateList(newDateList);
      });
    }
  }, []);

  // 메뉴탭 이동시 id 변경
  // 첫번째 날짜값으로 조회
  React.useEffect(() => {
    getTestDateList(Number(id)).then((res) => {
      setDateList(res.data.data);
      if (res.data.data.length > 0) {
        const { year, month, day } = res.data.data[0];
        console.log('탭이동', year, month, day);
        setSelectedDate(`${year}-${month}-${day}`);
        getTestDetail(Number(id), year, month, day).then((res) => {
          console.log(res.data.data);
          setTestData(res.data.data);
        });
      }
    });
  }, [id]);

  // id는 고정인채 날짜만 변경시
  React.useEffect(() => {
    const [year, month, date] = selectedDate
      .split('-')
      .map((item) => Number(item));
    if (year > 2000) {
      console.log('selectedDate 변경', year, month, date);
      getTestDetail(Number(id), year, month, date).then((res) => {
        console.log(res.data.data);
        setTestData(res.data.data);
      });
    }
  }, [selectedDate]);

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
            {testData?.testInfo.name}
          </Typography>
          <Typography variant='h2' fontWeight='bold' color={colors.basic700}>
            대시보드
          </Typography>
          <DateSelect
            value={selectedDate}
            options={dateList}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
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
          <ScoreRadarChart
            items={testData?.testResult.totalScoreResponse}
            totalScore={testData?.testResult.totalScore}
          />
          <Stack width='100%' display='grid' gridTemplateColumns='1fr 1fr'>
            {testData?.testResult.droneScoreResponse.map((item) => (
              <MultiplePieChart
                title={item.part}
                series={[item.motor, item.blade, item.esc]}
              />
            ))}
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
          />
        </Stack>
        <ScoreTable items={testData?.scoreList} />
        <Stack direction='row' gap='0.5rem'>
          {testData?.scoreAvgs.map((item) => (
            <ScoreAvgBox type={item.type} score={item.score} />
          ))}
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
              {testData?.totalScore.accident}%
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox>
            <Typography variant='caption' color={colors.basic500}>
              예상 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              {testData?.totalScore.exchangeDate}
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox>
            <Typography variant='caption' color={colors.basic500}>
              이전 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              {testData?.totalScore.expectedDate}
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
          {testData?.warningList.map((item, index) => (
            <BrokenPartInfoBox
              part={item.component}
              location={item.part}
              score={item.score}
              warning={index < 2}
            />
          ))}
        </Stack>
      </ItemContainer>
    );
  };

  return (
    <>
      <MenuTab type='dashboard' drones={drones} />
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
