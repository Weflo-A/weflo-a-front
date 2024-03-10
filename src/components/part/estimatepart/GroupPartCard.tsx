import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import CheckBox from 'src/components/common/CheckBox';
import { Blade, ESC, Motor } from 'src/assets';
import { useEffect, useState } from 'react';

interface GroupPart {
  name: string;
  quantity: number;
}

interface Props {
  groupName: string;
  componentStatus: GroupPart[];
  onSelect: (partName: string, partNum: number, checked: boolean) => void;
}

const GroupPartCard: React.FC<Props> = ({
  groupName,
  componentStatus,
  onSelect,
}: Props) => {
  console.log('componentStatus', componentStatus);

  const partsArray = Array.isArray(componentStatus)
    ? componentStatus // 이미 배열인 경우
    : Object.entries(componentStatus).map(([name, quantity]) => ({
        name,
        quantity,
      })); // 배열 아닌 경우

  return (
    <Card>
      <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
        {groupName}
      </Typography>
      {partsArray.length === 0 ? (
        <Center>
          <Typography fontSize='12px' color={colors.basic500}>
            결과 없음
          </Typography>
        </Center>
      ) : (
        partsArray.map((part, index) => (
          <Line key={index}>
            {part.name === '모터' && <Motor />}
            {part.name === '블레이드' && <Blade />}
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
                {String(part.quantity)}개
              </Typography>
              <CheckBox
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onSelect(part.name, Number(part.quantity), e.target.checked)
                }
              />
            </Row>
          </Line>
        ))
      )}
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
  align-items: center;
  gap: 10px;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
