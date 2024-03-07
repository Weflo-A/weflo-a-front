import styled from 'styled-components';
import { Typography } from '@mui/material';
import { parts } from 'src/assets/data/menuData';
import colors from 'src/constants/colors';
import { InfoCircle, RectangleBlue } from 'src/assets';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import CheckBox from 'src/components/common/CheckBox';
import { WeekPartCard } from 'src/components/part/estimatepart/WeekPartCard';
import { periodData } from 'src/assets/data/periodData';

const EstimatePartPage = () => {
  return (
    <>
      <MenuTabGroup groups={parts} type='parts' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            부품 구매
          </Typography>
          <Caution>
            <InfoCircle />
            <Typography variant='body2' color={colors.basic700}>
              본 페이지에서는 대시보드에서 확인된 교체 부품 가격만이 비용으로
              표시됩니다
            </Typography>
          </Caution>
          <Filter>
            <FilterBtn>
              <CheckBox label='그룹별' />
              <CheckBox label='모델별' />
            </FilterBtn>
          </Filter>
          <Content>
            <Line>
              <TimeLine>
                <Rectangle>
                  {periodData.map((data) => (
                    <Div>
                      <StyledRectangleBlue />
                      <Text>{data.period}</Text>
                    </Div>
                  ))}
                </Rectangle>
              </TimeLine>
            </Line>
            <WeekCard>
              {periodData.map((data) => (
                <WeekPartCard period={data.period} />
              ))}
            </WeekCard>
          </Content>
        </Page>
      </div>
    </>
  );
};

export default EstimatePartPage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 100px;
`;

const Caution = styled.div`
  width: 100%;
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

const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 313px;
  border-radius: 8px;
  border: 1px solid ${colors.basic200};
  background: white;
`;

const FilterBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Line = styled.div`
  min-width: 120px;
  height: 1524px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TimeLine = styled.div`
  width: 4px;
  height: 1524px;
  background: linear-gradient(
    180deg,
    #5797ff 0%,
    #5797ff 53.4%,
    rgba(108, 150, 218, 0) 100%
  );
`;

const Rectangle = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  position: absolute;
  top: 175px;
  left: 0%;
`;

const WeekCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Div = styled.div`
  position: relative;
`;

const StyledRectangleBlue = styled(RectangleBlue)`
  position: relative;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;
