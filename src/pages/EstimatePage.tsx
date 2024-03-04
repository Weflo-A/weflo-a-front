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

//
//
//

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
  const [partsSearch, setPartsSearch] = React.useState('');
  const [scoreRange, setScoreRange] = React.useState<number[]>([20, 37]);
  const [priceRange, setPriceRange] = React.useState<number[]>([20, 37]);

  const handleScoreChange = (event: Event, newValue: number | number[]) => {
    setScoreRange(newValue as number[]);
  };
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  /* 페이지 헤더 */
  const renderPageHeader = () => {
    return (
      <Stack
        direction='row'
        gap='1.25rem'
        alignItems='center'
        marginBottom='1rem'
      >
        <Stack direction='row' gap='0.5rem'>
          <Typography variant='h2' fontWeight='bold' color={colors.accent100}>
            Drone No.1
          </Typography>
          <Typography variant='h2' fontWeight='bold' color={colors.basic700}>
            견적서
          </Typography>
        </Stack>
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
        <Stack direction='row' gap='1rem'>
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
      <MenuTab />
      <div className='page'>
        {renderPageHeader()}

        <Stack direction='column' gap='3.25rem'>
          {/* 교체가 피필요한 부품 및 총 점수 */}
          <Stack direction='row' gap='1rem'>
            {renderBrokenPartsInfo()}
            {renderScoreChart()}
          </Stack>

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
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <NewPartInfoBox
                        id={index}
                        name='X2814 900KV 3-5S Brushless Motor'
                        imgUrl={partsImg}
                        loc='구동부 01'
                        parts='모터'
                        score={2}
                        price={135000}
                        detail='하이파워 사양의 소형 멀티콥터를 위한 아웃러너 모터(920KV)
DJI 및 호환 계열 F330/F450/F550/S500/TBS500 등과 같은 소형 클래스 쿼드, 헥사콥터에 적합한 모터
프롭은 3S/4S 공히 동사의 9x4.5in Self-Lock Propeller (DJI/Universal Type)사용'
                        checked={false}
                      />
                    ))}
                </Stack>
              </NewPartsBox>
            </Stack>
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
                  <span color={colors.accent100}>Eagle</span>의
                  <span color={colors.accent100}>모터</span>와
                  <span color={colors.accent100}>블레이드</span>를 수리할 수
                  있는 업체는 총 <span color={colors.accent100}>9</span>곳이
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
                  <span color={colors.accent100}>12개</span>
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
  height: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${colors.basic100});
  background: ${colors.basic100};
  overflow-y: scroll;
`;

const CalloutBox = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${colors.basic100};
`;
