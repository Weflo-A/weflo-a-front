import styled from 'styled-components';
import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import { InfoCircle } from 'src/assets';
import { GroupCostList } from 'src/components/part/costpart/GroupCostList';
import { PartCostList } from 'src/components/part/costpart/PartCostList';
import YearSelect from 'src/components/YearSelect';
import React, { useEffect, useState } from 'react';
import { getCosts, getYearCosts } from 'src/api/parts';
import CostPieChart from 'src/components/part/costpart/CostPieChart';
import MenuTab from 'src/components/common/MenuTab';
import LineColumnChart from 'src/components/LineColumnChart';

interface GroupCostData {
  month: number;
  totalAvgCost: number;
  groupAvgCost: number;
}

interface GroupCostListProps {
  groupCosts: GroupCostData[];
}

const CostPartPage = () => {
  const [totalYear, setTotalYear] = React.useState(2024);
  const [groupYear, setGroupYear] = React.useState('2024년 3월');
  const [partYear, setPartYear] = React.useState(2024);
  const [yearStr, monthStr] = groupYear.split(' ');
  const tyear = totalYear;
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const [groupCosts, setGroupCosts] = useState([]);
  const [groupAvgCost, setGroupAvgCost] = useState([]);
  const [totalCosts, setTotalCosts] = useState([]);
  const [avgChartData, setAvgChartData] = useState<GroupCostData[]>([]);

  useEffect(() => {
    getCosts({ year, month })
      .then((res) => {
        console.log('Costs', res.data); // 확인용
        setGroupCosts(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [groupYear]);

  useEffect(() => {
    getYearCosts({ year: tyear })
      .then((res) => {
        console.log('Costs Year', tyear, res.data); // 확인용
        setAvgChartData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [totalYear]);

  return (
    <>
      <MenuTab type='parts' />
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
                <Stack direction='row' gap='1rem' width='80%'>
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
                        lineHeight='100%'
                      >
                        누적 투입 비용
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
                        lineHeight='100%'
                      >
                        월별 투입 비용
                      </Typography>
                    </Stack>
                  </ChartLabelBox>
                  <YearSelect
                    value={totalYear}
                    onChange={(e) => setTotalYear(Number(e.target.value))}
                  />
                </Stack>
              </Row>
              <LineColumnChart items={avgChartData} />
            </Total>
            <Circle>
              <Typography
                variant='body1'
                fontWeight='bold'
                color={colors.basic700}
              >
                부품별 투입 비용 비율
              </Typography>
              <Chart>
                <CostPieChart />
                <Text>
                  <Typography
                    fontSize='11px'
                    fontWeight='regular'
                    color={colors.basic500}
                  >
                    가장 많이
                    <br />
                    투입되는 부품
                  </Typography>
                  <Typography
                    variant='caption'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    Blade
                  </Typography>
                  <Typography
                    variant='body1'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    {65}%
                  </Typography>
                </Text>
              </Chart>
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
                onChange={(e) => setPartYear(Number(e.target.value))}
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
  margin-bottom: 150px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const Chart = styled.div`
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
  flex-direction: row;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.color};
  align-items: center;
`;
