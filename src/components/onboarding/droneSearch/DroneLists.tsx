import styled from 'styled-components';
import { droneListData } from '../../../assets/data/droneListData';
import colors from 'src/constants/colors';
import Button from 'src/components/common/Button';
import { Bigger } from 'src/assets';
import { useNavigate } from 'react-router-dom';
import { DroneGroupBox } from './DroneGroupBox';

interface DroneInfo {
  name: string;
  model: string;
  year: number;
  groupList: string[];
}

interface Props {
  data: DroneInfo[];
}

function DroneLists({ data }: Props) {
  const navigate = useNavigate();
  const goToDashboard = (id: number) => {
    navigate(`/drone-group/drone/${id}/dashboard`, { state: id });
  };

  return (
    <Container>
      <Wrapper>
        <Columns>
          <Column>드론 ID</Column>
          <Column>드론 모델</Column>
          <Column>연식</Column>
          <Column>드론 그룹</Column>
        </Columns>
        {data.length > 0 ? (
          <Drones>
            {data.map((data, index) => {
              return (
                <Drone key={index}>
                  <span>{data.name}</span>
                  <span>{data.model}</span>
                  <span>{data.year}</span>
                  <Groups>
                    {data.groupList.map((groupName, groupIndex) => (
                      <DroneGroupBox key={groupIndex} name={groupName} />
                    ))}
                  </Groups>
                  <Button
                    text={
                      <>
                        대시보드 <Bigger />
                      </>
                    }
                    buttonType='accentLight'
                    onClick={() => goToDashboard(index)}
                    style={{ width: '110px', height: '32px', fontSize: '14px' }}
                  />
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

export { DroneLists };

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
  white-space: nowrap;
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
