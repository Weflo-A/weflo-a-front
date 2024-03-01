import styled from 'styled-components';
import { Drone1, GroupOut } from '../../../assets';
import colors from 'src/constants/colors';

const DroneGroupCard = () => {
  return (
    <Card>
      <Top>
        <Title>Drone No.04</Title>
        <Delete>
          그룹에서 제외하기 <GroupOut />
        </Delete>
      </Top>
      <Bottom>
        <Drone1 />
        <Info>
          <Box>
            <Name>모델명</Name>
            <Value>Eagle</Value>
          </Box>
          <Box>
            <Name>사용용도</Name>
            <Value>편의점 배달</Value>
          </Box>
          <Box>
            <Name>생산연도</Name>
            <Value>50,620원</Value>
          </Box>
          <Box>
            <Name>투입 비용</Name>
            <Value>50,620원</Value>
          </Box>
          <Box>
            <Name>그룹 설정 일자</Name>
            <Value>2022.11.11</Value>
          </Box>
        </Info>
      </Bottom>
    </Card>
  );
};

export { DroneGroupCard };

const Card = styled.div`
  width: 502px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--White, #fff);
  gap: 12px;
`;

const Top = styled.div`
  width: 478px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  border: 1px solid var(--Primary-Blue-30, #cbdfff);
  background: var(--Primary-Transparent-10, rgba(87, 151, 255, 0.1));
`;

const Title = styled.div`
  color: ${colors.basic700};

  /* Body/B3/Bold */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.basic400};

  /* Caption/C2/Regular */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
`;

const Bottom = styled.div`
  width: 478px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Box = styled.div`
  width: 210px;
  height: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
`;

const Name = styled.div`
  color: ${colors.basic500};
  text-align: left;

  /* Caption/C1/Regular */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

const Value = styled.div`
  color: ${colors.basic700};
  text-align: left;

  /* Caption/C1/Medium */
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
