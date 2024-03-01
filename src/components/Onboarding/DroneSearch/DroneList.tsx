import styled from 'styled-components';
import { droneListData } from '../../../assets/data/droneListData';
import { DroneGroupBox } from './DroneGroupBox';

function DroneList() {
  return (
    <Container>
      <Wrapper>
        <Columns>
          <Column>드론 ID</Column>
          <Column>드론 모델</Column>
          <Column>연식</Column>
          <Column>드론 그룹</Column>
        </Columns>
        {droneListData.length > 0 ? (
          <Drones>
            {droneListData.map((data) => {
              return (
                <Drone key={data.id}>
                  <span>{data.name}</span>
                  <span>{data.model}</span>
                  <span>{data.year}</span>
                  <Groups>
                    {data.group.map((num) => (
                      <DroneGroupBox key={num} num={num} />
                    ))}
                  </Groups>
                </Drone>
              );
            })}
          </Drones>
        ) : (
          <NoData>
            <span>데이터 없음</span>
          </NoData>
        )}
      </Wrapper>
    </Container>
  );
}

export { DroneList };

const Container = styled.div`
  display: flex;
  width: 1020px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid var(--Basic-B-200, #e2e8f0);
  background: #fff;
  font-family: 'Pretendard';
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
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

  color: var(--Basic-B-400, #94a3b8);

  /* Body/B3/Medium */
  /* font-family: 'Pretendard'; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
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
  width: 980px;
  height: 52px;
  flex-shrink: 0;
  padding: 0px 15px;
  border-radius: 8px;
  border: 1px solid var(--Basic-B-100, #f1f5f9);
  background: var(--Basic-B-50, #f8fafc);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  gap: 12px;
  cursor: pointer;
  padding-right: 15px;

  color: var(--Basic-B-700, #334155);

  /* Body/B3/Medium */
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
