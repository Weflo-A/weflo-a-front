import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import Button from 'src/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BladeAccent, ESCAccent, MotorAccent } from 'src/assets';
import { GroupPartCard } from './GroupPartCard';

interface GroupPart {
  groupName: string;
  componentStatus: { name: string; quantity: number }[];
}

interface Props {
  period: string;
  partsData: GroupPart[];
}

const WeekPartCard: React.FC<Props> = ({ period, partsData }: Props) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/drone-group/drone/parts/purchase');
  };

  return (
    <Card>
      <Left>
        <div>
          <Typography variant='h4' fontWeight='bold' color={colors.basic700}>
            <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
              {period}
            </Typography>
            내로 필요할 것으로 예측되는 부품
          </Typography>
        </div>
        <GroupCard>
          <ChevronLeft
            sx={{ color: '#CBD5E1', width: '24px', height: '24px' }}
          />
          {partsData.map((data, index) => (
            <GroupPartCard
              key={index}
              groupName={data.groupName}
              parts={data.componentStatus}
            />
          ))}
          <ChevronRight
            sx={{ color: '#CBD5E1', width: '24px', height: '24px' }}
          />
        </GroupCard>
        <Bottom>
          <Box>
            <Typography fontSize='12px' color={colors.basic500}>
              선택항목
            </Typography>
            <AccentBox>
              <MotorAccent />
              모터 {12}개
            </AccentBox>
            <AccentBox>
              <BladeAccent />
              블레이드 {30}개
            </AccentBox>
            <AccentBox>
              <ESCAccent />
              ESC {2}개
            </AccentBox>
          </Box>
          <Button
            text={
              <>
                부품 구매 바로가기 <ChevronRight />
              </>
            }
            buttonType='accent'
            onClick={handleButtonClick}
            style={{ width: '194px', height: '44px', fontSize: '18px' }}
          />
        </Bottom>
      </Left>
    </Card>
  );
};

export { WeekPartCard };

const Card = styled.div`
  width: 100%;
  height: 351px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 882px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 632px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`;

const AccentBox = styled.div`
  height: 23px;
  display: flex;
  padding: 4px 12px 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: ${colors.accentOpacity20};
  color: ${colors.accent100};
  font-size: 14px;
  white-space: nowrap;
`;
