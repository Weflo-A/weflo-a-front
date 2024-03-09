import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import AreaChart from 'src/components/AreaChart';
import YearSelect from 'src/components/YearSelect';
import React from 'react';
import SectionHeader from 'src/components/SectionHeader';
import LineColumnChart, { AvgChartItem } from 'src/components/LineColumnChart';
import MenuTab, { Group } from 'src/components/common/MenuTab';
import Button from 'src/components/common/Button';
import ItemContainer from 'src/components/common/ItemContainer';
import Chip from 'src/components/common/Chip';
import CheckBox from 'src/components/common/CheckBox';
import { DroneGroupList } from 'src/components/onboarding/droneGroupSearch/DroneGroupList';
import {
  getDroneGroupInfo,
  getDroneGroupList,
  getDroneStateInfo,
} from 'src/api/monitoring';
import { useParams } from 'react-router-dom';

//
//
//
interface GroupInfo {
  groupInfoDetail: {
    droneCount: number;
    totalFlight: number;
    startDate: string;
  };
  costAvgTimeLines: {
    month: number;
    totalAvgCost: number;
    groupAvgCost: number;
  }[];
}

interface DroneState {
  groupAvgList: { month: number; avgScore: number }[];
  groupState: {
    avgScore: number;
    brokenType: string;
    mostFixComponent: string;
  };
}

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

const DroneGroupPage = () => {
  const { groupId } = useParams();
  const [groupYear, setGroupYear] = React.useState(2024);
  const [droneYear, setDroneYear] = React.useState(2024);
  const [groupList, setGroupList] = React.useState<Group[]>([]);
  const [groupInfo, setGroupInfo] = React.useState<GroupInfo>();
  const [dronesState, setDronesState] = React.useState<DroneState>();

  /* Drone group info */
  const renderDroneGroupInfo = () => {
    return (
      <ItemContainer style={{ padding: '0rem 1.25rem' }}>
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
                {groupInfo?.groupInfoDetail.droneCount}개
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                총 비행 횟수
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {groupInfo?.groupInfoDetail.totalFlight}회
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                그룹 시작일
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {groupInfo?.groupInfoDetail.startDate}
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
              onChange={(e) => setGroupYear(Number(e.target.value))}
            />
          </Stack>
          <LineColumnChart
            items={groupInfo?.costAvgTimeLines as AvgChartItem[]}
          />
        </Stack>
      </ItemContainer>
    );
  };

  /*Drone state info */
  const renderDroneStateInfo = () => {
    return (
      <ItemContainer style={{ padding: '0rem 1.25rem' }}>
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
                {dronesState?.groupState?.avgScore}점
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                최다 고장 유형
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {dronesState?.groupState?.brokenType} 고장
              </Typography>
            </DroneInfoItemBox>
            <DroneInfoItemBox>
              <Typography variant='caption' color={colors.basic500}>
                가장 많이 수리한 부품
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {dronesState?.groupState?.mostFixComponent}
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
              onChange={(e) => setDroneYear(Number(e.target.value))}
            />
          </Stack>
          <AreaChart items={dronesState?.groupAvgList} />
        </Stack>
      </ItemContainer>
    );
  };

  React.useEffect(() => {
    getDroneGroupList().then((res) => setGroupList(res.data.data));
    getDroneGroupInfo(Number(groupId), groupYear).then((res) =>
      setGroupInfo(res.data.data)
    );
    getDroneStateInfo(Number(groupId), droneYear).then((res) =>
      setDronesState(res.data.data)
    );
  }, []);

  React.useEffect(() => {
    getDroneGroupInfo(Number(groupId), groupYear).then((res) =>
      setGroupInfo(res.data.data)
    );
    getDroneStateInfo(Number(groupId), droneYear).then((res) =>
      setDronesState(res.data.data)
    );
  }, [droneYear, groupId]);

  //
  //
  //
  return (
    <>
      <MenuTab type='monitoring' groups={groupList} />
      <div className='page'>
        <SectionHeader title='드롭 그룹 1'>
          <Button
            text='해당 그룹에 드론 등록'
            buttonType='accentLight'
            onClick={() => alert('gg')}
          />
        </SectionHeader>
        <Stack flexDirection='column' gap='1rem'>
          {renderDroneGroupInfo()}
          {renderDroneStateInfo()}
        </Stack>
        <SectionHeader
          title='드론 목록'
          sx={{ paddingTop: '2.5rem', marginBottom: '0' }}
        >
          <Chip text='6개' />
        </SectionHeader>
        <Stack
          flexDirection='row'
          justifyContent='flex-end'
          marginBottom='1rem'
        >
          {['투입 비용 순', '등록 순', '연식 순'].map((item, index) => (
            <CheckBox key={index} label={item} />
          ))}
        </Stack>
        <DroneGroupList />
      </div>
    </>
  );
};

export default DroneGroupPage;
