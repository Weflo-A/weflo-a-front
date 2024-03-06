import styled from 'styled-components';
import colors from 'src/constants/colors';
import Button from 'src/components/common/Button';
import { Bigger } from 'src/assets';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { droneListData } from 'src/assets/data/droneListData';

function GroupCostList() {
  return (
    <Container>
      <Wrapper>
        <Columns>
          <Column>순위</Column>
          <Column>그룹별</Column>
          <Column>사용용도</Column>
          <Column>드론 수</Column>
          <Column>한달 간 누적 투입 비용</Column>
          <Column>한 대당 평균 투입 비용</Column>
        </Columns>
        {droneListData.length > 0 ? (
          <Drones>
            {droneListData.map((data) => {
              return (
                <Drone key={data.id}>
                  <span>1</span>
                  <span>드론 그룹1</span>
                  <span>{data.usage}</span>
                  <span>드론 수</span>
                  <span>572,000원</span>
                  <Typography
                    variant='h4'
                    fontWeight='bold'
                    color={colors.accent100}
                  >
                    123,000원
                  </Typography>
                </Drone>
              );
            })}
          </Drones>
        ) : (
          <NoData>
            <span>결과 없음</span>
          </NoData>
        )}
      </Wrapper>
    </Container>
  );
}

export { GroupCostList };

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2.5fr 0.8fr;
  gap: 12px;
  padding-right: 15px;
  box-sizing: border-box;
`;

const Column = styled.span`
  display: flex;
  height: 30px;
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  padding: 0px 15px;

  color: ${colors.basic400};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;

const Drones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Groups = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
`;

const NoData = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Drone = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  flex-shrink: 0;
  padding: 0px 15px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2.5fr 0.8fr;
  gap: 12px;
  cursor: pointer;
  padding-right: 15px;

  color: ${colors.basic700};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;
