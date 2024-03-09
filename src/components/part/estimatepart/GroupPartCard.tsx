import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import CheckBox from 'src/components/common/CheckBox';
import { Blade, ESC, Motor } from 'src/assets';

interface GroupPart {
  name: string;
  quantity: number;
}

interface Props {
  groupName: string;
  parts: GroupPart[];
}

const GroupPartCard: React.FC<Props> = ({ groupName, parts }: Props) => {
  const partsArray = Array.isArray(parts) ? parts : [];
  return (
    <Card>
      <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
        {groupName}
      </Typography>
      {partsArray.map((part, index) => (
        <Line key={index}>
          {part.name === 'MOTOR' && <Motor />}
          {part.name === 'BLADE' && <Blade />}
          {part.name === 'ESC' && <ESC />}
          <Typography
            variant='caption'
            fontWeight='regular'
            color={colors.basic500}
          >
            {part.name}
          </Typography>
          <Row>
            <Typography variant='caption' color={colors.basic700}>
              {part.quantity}개
            </Typography>
            <CheckBox />
          </Row>
        </Line>
      ))}
    </Card>
  );
};

export { GroupPartCard };

const Card = styled.div`
  width: 176px;
  height: 149px;
  border-radius: 8px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  /* shadow_dropdown */
  box-shadow: 0px 4px 16px 0px rgba(66, 82, 110, 0.1);
`;

const Line = styled.div`
  width: 152px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  white-space: nowrap;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
