import { Box, Slider, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckBox from 'src/components/common/CheckBox';
import ItemContainer from 'src/components/common/ItemContainer';
import MenuTab from 'src/components/common/MenuTab';
import Search from 'src/components/common/Search';
import BrokenPartInfoBox from 'src/components/estimate/BrokenPartInfoBox';
import colors from 'src/constants/colors';
import { brokenParts } from 'src/assets/data/estimateDummy';
import styled from 'styled-components';
import NewPartInfoBox from 'src/components/estimate/NewPartsInfoBox';
import partsImg from 'src/assets/images/drone-parts.png';
import RepairCompanyList from 'src/components/estimate/RepairCompanyList';
import RecyclePartsBox from 'src/components/estimate/RecyclePartsList';
import Basket from 'src/components/estimate/Basket';
import TotalScoreChart from 'src/components/estimate/TotalScoreChart';
import SectionTab from 'src/components/estimate/SectionTab';
import { getEstimateInfo, getTestDateList } from 'src/api/estimate';
import Button from 'src/components/common/Button';
import { BackBlue } from 'src/assets';
import { useNavigate } from 'react-router-dom';
import DateSelect from 'src/components/estimate/DateSelect';

//
//
//

interface NewParts {
  image: string;
  type: string;
  part: string;
  name: string;
  point: number;
  start: number;
  description: string;
  price: number;
}

const DroneInfoItemBox = styled.div`
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

const scoreMarks = [
  {
    value: 0,
    label: '0점',
  },
  {
    value: 100,
    label: '100점',
  },
];

const primceMarks = [
  {
    value: 0,
    label: '0원',
  },
  {
    value: 1000000,
    label: '100만원',
  },
];

//
//
//

const EstimatePage = () => {
  const navigate = useNavigate();
  const [dateList, setDateList] = React.useState([]);
  const [date, setDate] = React.useState('');
  const [newParts, setNewParts] = React.useState<NewParts[]>([]);
  const [filteredNewParts, setFilteredNewParts] = React.useState<NewParts[]>(
    []
  );

  const [partsSearch, setPartsSearch] = React.useState('');
  const [scoreRange, setScoreRange] = React.useState<number[]>([20, 37]);
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 500000]);

  const handleScoreChange = (event: Event, newValue: number | number[]) => {
    setScoreRange(newValue as number[]);
  };
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  console.log('new', newParts);
  React.useEffect(() => {
    const filteredParts = newParts.filter(
      (item) =>
        priceRange[0] < item.price &&
        item.price < priceRange[1] &&
        scoreRange[0] < item.point &&
        item.point < scoreRange[1]
    );
    setFilteredNewParts(filteredParts);
  }, [scoreRange, priceRange]);

  React.useEffect(() => {
    /* 진단 날짜 리스트 */
    getTestDateList(1)
      .then((res) => {
        setDateList(res.data.data);
        if (res.data.data.length > 0) {
          const { year, month, day } = res.data.data[0];
          setDate(`${year}-${month}-${day}`);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    /* 견적서 정보 */
    if (date) {
      getEstimateInfo(1, date).then((res) => setNewParts(res.data.data));
    }
  }, [date]);

  /* 페이지 헤더 */
  const renderPageHeader = () => {
    return (
      <Stack
        direction='row'
        gap='1.25rem'
        alignItems='center'
        marginBottom='1rem'
        justifyContent='space-between'
      >
        <Stack direction='row' gap='0.5rem'>
          <Typography variant='h2' fontWeight='bold' color={colors.accent100}>
            Drone No.1
          </Typography>
          <Typography variant='h2' fontWeight='bold' color={colors.basic700}>
            견적서
          </Typography>
          <DateSelect
            value={date}
            options={dateList}
            onChange={(e) => setDate(e.target.value)}
          />
        </Stack>
        <Button
          text={
            <>
              <BackBlue /> 모니터링으로 돌아가기
            </>
          }
          buttonType='primaryLight'
          onClick={() => navigate(`/monitoring/drone-search`)}
          style={{ width: '180px', height: '32px' }}
        />
      </Stack>
    );
  };

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

  const renderScoreChart = () => {
    return (
      <ItemContainer
        style={{
          flexDirection: 'column',
          width: '100%',
          padding: '1.25rem',
        }}
      >
        <Typography variant='body1' fontWeight='bold'>
          총 점수
        </Typography>
        <Stack direction='row' gap='1rem' alignItems='center'>
          <TotalScoreChart />
          <Stack direction='column' gap='0.5rem'>
            <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
              <Typography variant='caption' color={colors.basic500}>
                주행시 사고 확률
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                11%
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
              <Typography variant='caption' color={colors.basic500}>
                예상 부품 교체일
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                06월 15일
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
              <Typography variant='caption' color={colors.basic500}>
                이전 부품 교체일
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                02월 04일
              </Typography>
            </DroneInfoItemBox>
          </Stack>
        </Stack>
      </ItemContainer>
    );
  };

  const renderRangeBox = () => {
    return (
      <DroneInfoItemBox style={{ gap: '2.25rem', minWidth: '19rem' }}>
        <Stack
          direction='column'
          gap='0.5rem'
          alignItems='center'
          justifyContent='center'
        >
          <Typography width='100%' fontSize='14px'>
            점수 범위
          </Typography>
          <Box width='90%'>
            <Slider
              value={scoreRange}
              onChange={handleScoreChange}
              valueLabelDisplay='auto'
              marks={scoreMarks}
            />
          </Box>
          <Stack direction='row' alignItems='center' gap='1rem'>
            <Typography
              fontSize='14px'
              color={colors.primary100}
              fontWeight='bold'
            >
              최소
            </Typography>
            <Stack direction='row' alignItems='center' gap='0.5rem'>
              <RangeInput value={scoreRange[0]} />
              <Typography fontSize='14px'>점</Typography>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' gap='1rem'>
            <Typography
              fontSize='14px'
              color={colors.primary100}
              fontWeight='bold'
            >
              최대
            </Typography>
            <Stack direction='row' alignItems='center' gap='0.5rem'>
              <RangeInput value={scoreRange[1]} />
              <Typography fontSize='14px'>점</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction='column'
          gap='0.5rem'
          alignItems='center'
          justifyContent='center'
        >
          <Typography width='100%' fontSize='14px'>
            가격 범위
          </Typography>
          <Box width='90%'>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay='auto'
              min={0}
              max={1000000}
              marks={primceMarks}
            />
          </Box>
          <Stack direction='row' alignItems='center' gap='1rem'>
            <Typography
              fontSize='14px'
              color={colors.primary100}
              fontWeight='bold'
            >
              최소
            </Typography>
            <Stack direction='row' alignItems='center' gap='0.5rem'>
              <RangeInput value={priceRange[0]} />
              <Typography fontSize='14px'>원</Typography>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' gap='1rem'>
            <Typography
              fontSize='14px'
              color={colors.primary100}
              fontWeight='bold'
            >
              최대
            </Typography>
            <Stack direction='row' alignItems='center' gap='0.5rem'>
              <RangeInput value={priceRange[1]} />
              <Typography fontSize='14px'>원</Typography>
            </Stack>
          </Stack>
        </Stack>
      </DroneInfoItemBox>
    );
  };

  //
  //
  //

  return (
    <>
      <MenuTab type='dashboard' />
      <div className='page'>
        {renderPageHeader()}

        <Stack direction='column' gap='3.25rem'>
          {/* 교체가 피필요한 부품 및 총 점수 */}
          <Stack direction='row' gap='1rem'>
            {renderBrokenPartsInfo()}
            {renderScoreChart()}
          </Stack>

          <SectionTab />
          {/* 교체용 부품 구매 섹션*/}
          <ItemContainer
            style={{
              width: '100%',
              padding: '1.25rem',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Stack direction='column'>
              <Typography variant='body2' color={colors.accent100}>
                자가 수리가 가능하다면?
              </Typography>
              <Typography variant='h3' fontWeight='bold'>
                교체용 부품 구매
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Search
                value={partsSearch}
                placeholder='찾으시는 부품을 검색해보세요.'
                onChange={(e) => setPartsSearch(e.target.value)}
                onClick={() => alert('검색')}
              />
              <Stack
                flexDirection='row'
                justifyContent='flex-end'
                marginBottom='1rem'
              >
                {['점수 낮은 순', '가격 낮은 순', '가격 높은 순'].map(
                  (item, index) => (
                    <CheckBox key={index} label={item} />
                  )
                )}
              </Stack>
            </Stack>
            <Stack direction='row' gap='1rem' height='28rem'>
              {renderRangeBox()}
              <NewPartsBox>
                <Stack width='100%' direction='column' gap='0.5rem'>
                  {(filteredNewParts as NewParts[])?.map((item, index) => (
                    <NewPartInfoBox
                      id={index}
                      name={item.name}
                      imgUrl={partsImg}
                      loc={item.part}
                      parts={item.type}
                      score={item.point}
                      price={item.price}
                      detail={item.description}
                      checked={false}
                    />
                  ))}
                </Stack>
              </NewPartsBox>
            </Stack>
            <Basket />
          </ItemContainer>

          {/* 수리 업체 정보 */}
          <ItemContainer
            style={{
              width: '100%',
              padding: '1.25rem',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Stack direction='column'>
              <Typography variant='body2' color={colors.accent100}>
                자가 수리가 어렵다면?
              </Typography>
              <Typography variant='h3' fontWeight='bold'>
                수리 업체 정보
              </Typography>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <CalloutBox>
                <Typography variant='body1' color={colors.basic700}>
                  <span style={{ color: colors.accent100 }}>Eagle</span>의
                  <span style={{ color: colors.accent100 }}>모터</span>와
                  <span style={{ color: colors.accent100 }}>블레이드</span>를
                  수리할 수 있는 업체는 총{' '}
                  <span style={{ color: colors.accent100 }}>9</span>곳이
                  있습니다.
                </Typography>
              </CalloutBox>
              <Stack direction='row' gap='1.25rem'>
                {['추천 순', '가격 낮은 순', '가까운 순'].map((item, index) => (
                  <CheckBox key={index} label={item} />
                ))}
              </Stack>
            </Stack>
            <RepairCompanyList />
          </ItemContainer>

          {/* 폐기 전 재사용 가능 부품 */}
          <ItemContainer
            style={{
              width: '100%',
              padding: '1.25rem',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Stack direction='column'>
              <Typography variant='body2' color={colors.accent100}>
                수리가 불가능하다면?
              </Typography>
              <Typography variant='h3' fontWeight='bold'>
                폐기 전 재사용 가능 부품
              </Typography>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <CalloutBox>
                <Typography variant='body1' color={colors.basic700}>
                  재사용 가능 부품이 총
                  <span style={{ color: colors.accent100 }}>12개</span>
                  있습니다.
                </Typography>
              </CalloutBox>
              <Stack direction='row' gap='1.25rem'>
                {['구동부 순', '점수 높은 순', '가격 높은 순'].map(
                  (item, index) => (
                    <CheckBox key={index} label={item} />
                  )
                )}
              </Stack>
            </Stack>
            <RecyclePartsBox />
            <Basket />
          </ItemContainer>
        </Stack>
      </div>
    </>
  );
};

export default EstimatePage;

const RangeInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid ${colors.basic200};
  background: ${colors.basic50};
`;

const NewPartsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${colors.basic100});
  background: ${colors.basic100};
  overflow-y: scroll;
`;

const CalloutBox = styled.div`
  width: 100%;
  max-width: 35.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${colors.basic100};
`;
