import styled from 'styled-components';
import { Drone1, GroupOut } from '../../../assets';

// interface Props {
//   num: number;
// }

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
          <Box>모델명</Box>
          <Box>사용 용도</Box>
          <Box>생산연도</Box>
          <Box>투입 비용</Box>
          <Box>그룹 설정 일자</Box>
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
  border: 1px solid #000;
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
  color: var(--Basic-B-700, #334155);

  /* Body/B3/Bold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--Basic-B-400, #94a3b8);

  /* Caption/C2/Regular */
  font-family: Pretendard;
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
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Basic-B-100, #f1f5f9);
  background: var(--Basic-B-50, #f8fafc);
`;
