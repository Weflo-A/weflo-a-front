import React from 'react';
import styled from 'styled-components';
import colors from 'src/constants/colors';
import Button from 'src/components/common/Button';
import { Bigger } from 'src/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { droneListData } from 'src/assets/data/droneListData';

interface ResultRecordProp {
  groupId: number;
  droneId?: number;
}
function ResultRecord({ groupId }: ResultRecordProp) {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedDrone = droneListData[0];
  if (!selectedDrone) {
    return (
      <Container>
        <NoData>
          <span>결과 없음</span>
        </NoData>
      </Container>
    );
  }

  const goToDashboard = (id: number) => {
    navigate(`/drone-group/drone/${id}/estimate`, {
      state: location.state,
    });
  };

  return (
    <Container>
      <Columns>
        <Column>진단 일시</Column>
        <Column>진단 장소</Column>
        <Column>종합 점수</Column>
      </Columns>
      <Drones onClick={() => navigate(`test`)}>
        {selectedDrone.diagnosis.map((data, index) => (
          <Drone key={index}>
            <span>{data.date}</span>
            <span>{data.place}</span>
            <span>{data.score}</span>
            <Button
              text={
                <>
                  견적서 <Bigger />
                </>
              }
              buttonType='accentLight'
              onClick={(e) => {
                e.stopPropagation();
                goToDashboard(selectedDrone.id);
              }}
              style={{ width: '95px', height: '32px', fontSize: '14px' }}
            />
          </Drone>
        ))}
      </Drones>
    </Container>
  );
}

export { ResultRecord };

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
`;

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-sizing: border-box;
  padding: 0px 15px;
`;

const Column = styled.span`
  display: flex;
  height: 30px;
  align-items: center;
  border-radius: 34px;

  color: ${colors.basic400};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;

const Drones = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  cursor: pointer;
  padding-right: 15px;

  color: ${colors.basic700};

  /* Body/B3/Medium */
  font-size: 14px;
  line-height: 150%; /* 21px */
`;
