import styled from 'styled-components';
import { Drone1, GroupOut } from '../../../assets';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';

interface DroneGroupCardProps {
  data: {
    name: string;
    model: string;
    year: number;
    usage: string;
    cost: string;
    groupSetupDate: string;
  };
}

const DroneGroupCard: React.FC<DroneGroupCardProps> = ({ data }) => {
  return (
    <Card>
      <Top>
        <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
          {data.name}
        </Typography>
        <Delete>
          <Typography
            fontSize='11px'
            fontWeight='regular'
            color={colors.basic400}
          >
            그룹에서 제외하기 <GroupOut />
          </Typography>
        </Delete>
      </Top>
      <Bottom>
        <Drone1 />
        <Info>
          <Box>
            <Typography variant='caption' color={colors.basic500}>
              모델명
            </Typography>
            <Typography variant='caption' color={colors.basic500}>
              {data.model}
            </Typography>
          </Box>
          <Box>
            <Typography variant='caption' color={colors.basic500}>
              사용용도
            </Typography>
            <Typography variant='caption' color={colors.basic500}>
              {data.usage}
            </Typography>
          </Box>
          <Box>
            <Typography variant='caption' color={colors.basic500}>
              생산연도
            </Typography>
            <Typography variant='caption' color={colors.basic500}>
              {data.year}
            </Typography>
          </Box>
          <Box>
            <Typography variant='caption' color={colors.basic500}>
              투입 비용
            </Typography>
            <Typography variant='caption' color={colors.basic500}>
              {data.cost}
            </Typography>
          </Box>
          <Box>
            <Typography variant='caption' color={colors.basic500}>
              그룹 설정 일자
            </Typography>
            <Typography variant='caption' color={colors.basic500}>
              {data.groupSetupDate}
            </Typography>
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
  background: white;
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
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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
  text-align: left;
`;
