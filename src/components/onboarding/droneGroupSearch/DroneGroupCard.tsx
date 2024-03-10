import styled from 'styled-components';
import { GroupOut } from '../../../assets';
import droneImg from 'src/assets/images/Drone1.svg';
import colors from 'src/constants/colors';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';

interface DroneGroupCardProps {
  data: {
    id: number;
    name: string;
    model: string;
    year: number;
    usage: string;
    cost: number;
    groupSetupDate: string;
    groupId: number;
  };
}

const DroneGroupCard: React.FC<DroneGroupCardProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Stack width='100%' direction='row' gap='1rem' alignItems='center'>
        <Top>
          <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
            {data.name}
          </Typography>
          <Typography
            fontSize='11px'
            fontWeight='regular'
            color={colors.basic400}
            display='flex'
            alignItems='center'
            gap='0.375rem'
          >
            그룹에서 제외하기 <GroupOut />
          </Typography>
        </Top>
        <Button
          text='대시보드'
          buttonType='accentLight'
          onClick={() =>
            navigate(`/drone-group/drone/${data.id}/dashboard`, {
              state: data.id,
            })
          }
          style={{ height: '100%' }}
        />
      </Stack>

      <Bottom>
        {/* 화면 크기에 따른 비율 변경을 위해 img 태그로 감싸서 사용했습니다 */}
        <img src={droneImg} style={{ objectFit: 'cover', width: '50%' }} />
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
              {data.cost.toLocaleString()}원
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
  width: 100%;
  padding: 0.75rem 0.75rem 1.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: white;
  gap: 12px;
`;

const Top = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-sizing: 'border-box';
`;

const Box = styled.div`
  width: 100%;
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
