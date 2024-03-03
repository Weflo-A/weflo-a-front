import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import AreaChart from 'src/components/AreaChart';
import YearSelect from 'src/components/YearSelect';
import React from 'react';
import SectionHeader from 'src/components/SectionHeader';
import LineColumnChart from 'src/components/LineColumnChart';
import MenuTab from 'src/components/common/MenuTab';
import Button from 'src/components/common/Button';
import ItemContainer from 'src/components/Common/ItemContainer';

//
//
//

const DroneInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 1.25rem 1.25rem 0rem;
`;
const DroneInfoItemBox = styled.div`
  width: 10.3125rem;
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
  padding: 0.6875rem;
`;
const StyledDivider = styled.div`
  width: 0.5rem;
  height: auto;
  display: flex;
  background: ${colors.basic100};
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

//
//
//

const DroneGroup = () => {
  const [groupYear, setGroupYear] = React.useState('2024년');
  const [droneYear, setDroneYear] = React.useState('2024년');

  /* Drone group info */
  const renderDroneGroupInfo = () => {
    return (
      <ItemContainer style={{ padding: '0rem 1.25rem', minWidth: '850px' }}>
        <DroneInfoWrapper>
          <Typography variant='body1' fontWeight='bold'>
            드론 그룹 1 정보
          </Typography>
          <Stack direction='column' gap='0.5rem'>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                총 드론수
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                6개
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                총 비행 횟수
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                138회
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                그룹 시작일
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                2022.07.28
              </Typography>
            </DroneInfoItemBox>
          </Stack>
        </DroneInfoWrapper>
        <StyledDivider />
        <Stack
          display='flex'
          flexDirection='column'
          padding='1.25rem 0rem 0rem 1.25rem'
          width='100%'
          alignItems='center'
          justifyContent='center'
        >
          <Stack direction='row' gap='1rem' width='80%'>
            <ChartLabelBox>
              <Stack flexDirection='row' gap='0.3125rem' alignItems='center'>
                <LabelSquare color={colors.accent100} />
                <Typography
                  variant='caption'
                  fontWeight='regular'
                  color={colors.basic500}
                >
                  월별 드론 1대당 평균 투입 비용
                </Typography>
              </Stack>
              <Stack flexDirection='row' gap='0.3125rem' alignItems='center'>
                <LabelSquare color={colors.accent30} />
                <Typography
                  variant='caption'
                  fontWeight='regular'
                  color={colors.basic500}
                >
                  월별 그룹 1 드론 1대당 평균 투입 비용
                </Typography>
              </Stack>
            </ChartLabelBox>
            <YearSelect
              value={groupYear}
              onChange={(e) => setGroupYear(e.target.value)}
            />
          </Stack>
          <LineColumnChart />
        </Stack>
      </ItemContainer>
    );
  };

  /*Drone state info */
  const renderDroneStateInfo = () => {
    return (
      <ItemContainer style={{ padding: '0rem 1.25rem', minWidth: '850px' }}>
        <DroneInfoWrapper>
          <Typography variant='body1' fontWeight='bold'>
            드론 평균 상태
          </Typography>
          <Stack direction='column' gap='0.5rem'>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                평균 드론 점수
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                81점
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                최다 고장 유형
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                블레이드 고장
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                가장 많이 수리한 부품
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                블레이드 210
              </Typography>
            </DroneInfoItemBox>
          </Stack>
        </DroneInfoWrapper>
        <StyledDivider />
        <Stack
          display='flex'
          flexDirection='column'
          padding='1.25rem 0rem 0rem 1.25rem'
          width='100%'
          alignItems='center'
          justifyContent='center'
        >
          <Stack direction='row' gap='1rem' width='80%'>
            <ChartLabelBox>
              <Stack flexDirection='row' gap='0.3125rem' alignItems='center'>
                <LabelSquare color={colors.accent100} />
                <Typography
                  variant='caption'
                  fontWeight='regular'
                  color={colors.basic500}
                >
                  그룹1 드론 평가 점수
                </Typography>
              </Stack>
            </ChartLabelBox>
            <YearSelect
              value={droneYear}
              onChange={(e) => setDroneYear(e.target.value)}
            />
          </Stack>
          <AreaChart />
        </Stack>
      </ItemContainer>
    );
  };

  //
  //
  //
  return (
    <>
      <MenuTab />
      <div className='page'>
        <SectionHeader title='드롭 그룹 1'>
          <Button
            text='해당 그룹에 드론 등록'
            buttonType='accentLight'
            onClick={() => alert('gg')}
          />
        </SectionHeader>
        {renderDroneGroupInfo()}
        {renderDroneStateInfo()}
      </div>
    </>
  );
};

export default DroneGroup;
