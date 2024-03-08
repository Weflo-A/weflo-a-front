import styled from 'styled-components';
import { Typography } from '@mui/material';
import { parts } from 'src/assets/data/menuData';
import colors from 'src/constants/colors';
import { InfoCircle } from 'src/assets';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import { GroupCostList } from 'src/components/part/costpart/GroupCostList';
import { PartCostList } from 'src/components/part/costpart/PartCostList';
import YearSelect from 'src/components/YearSelect';
import React, { useEffect, useState } from 'react';
import LineColumnChart from 'src/components/LineColumnChart';
import { getCosts } from 'src/api/parts';

interface GroupCostData {
  name: string;
  purpose: string;
  droneCount: number;
  monthCost: number;
}

interface GroupCostListProps {
  groupCosts: GroupCostData[];
}

const CostPartPage = () => {
  const [totalYear, setTotalYear] = React.useState('2024년');
  const [groupYear, setGroupYear] = React.useState('2024년 3월');
  const [partYear, setPartYear] = React.useState('2024년');
  const [yearStr, monthStr] = groupYear.split(' ');
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const [groupCosts, setGroupCosts] = useState([]);

  useEffect(() => {
    getCosts({ year, month })
      .then((res) => {
        console.log('Costs', res.data); // 확인용
        setGroupCosts(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [groupYear]);

  return (
    <>
      <MenuTabGroup groups={parts} type='parts' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            투입 비용 현황
          </Typography>
          <Caution>
            <InfoCircle />
            <Typography variant='body2' color={colors.basic700}>
              본 페이지에서는 대시보드에서 확인된 교체 부품 가격만이 비용으로
              표시됩니다
            </Typography>
          </Caution>
          <Row>
            <Total>
              <Row>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                  color={colors.basic700}
                >
                  전체 투입 비용
                </Typography>
                <YearSelect
                  value={totalYear}
                  onChange={(e) => setTotalYear(e.target.value)}
                />
              </Row>
              <LineColumnChart />
            </Total>
            <Circle>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                부품별 투입 비용 비율
              </Typography>
            </Circle>
          </Row>
          <Group>
            <Space>
              <Typography
                variant='h4'
                fontWeight='bold'
                color={colors.basic700}
              >
                {month}월 그룹별 평균 투입 비용 순위
              </Typography>
              <YearSelect
                value={groupYear}
                onChange={(e) => setGroupYear(e.target.value)}
              />
            </Space>
            <GroupCostList groupCosts={groupCosts} />
          </Group>
          <Part>
            <Space>
              <Typography
                variant='h4'
                fontWeight='bold'
                color={colors.basic700}
              >
                부품별 누적 비용 순위
              </Typography>
              <YearSelect
                value={partYear}
                onChange={(e) => setPartYear(e.target.value)}
              />
            </Space>
            <PartCostList />
          </Part>
        </Page>
      </div>
    </>
  );
};

export default CostPartPage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Caution = styled.div`
  width: 1020px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
`;

const Space = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Total = styled.div`
  width: 763px;
  height: 343px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 15px;
`;

const Circle = styled.div`
  width: 245px;
  height: 343px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 15px;
`;

const Group = styled.div`
  width: 1020px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Part = styled.div`
  width: 1020px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
