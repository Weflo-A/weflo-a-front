import React, { useState } from 'react';
import { Close } from 'src/assets';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <PopupOverlay>
      <PopupContent>
        <SpaceBetween>
          <PopupTitle>드론 신규 등록</PopupTitle>
          <Close onClick={onClose} />
        </SpaceBetween>
        <Content>
          <Line>
            <Row>
              <PopupText>드론 ID</PopupText>
              <Essential>필수</Essential>
            </Row>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder='Drone ID'
            />
          </Line>
          <Line>
            <Row>
              <PopupText>드론 모델</PopupText>
              <Essential>필수</Essential>
            </Row>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder='Drone Model'
            />
          </Line>
          <Line>
            <Row>
              <PopupText>연식</PopupText>
              <Essential>필수</Essential>
            </Row>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder='Year'
            />
          </Line>
          <Line>
            <Row>
              <PopupText>사용 용도</PopupText>
              <Essential>필수</Essential>
            </Row>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder='Purpose of use'
            />
          </Line>
          <Line>
            <Row>
              <PopupText>드론 그룹</PopupText>
              <Essential>선택</Essential>
            </Row>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder='Drone Group'
            />
          </Line>
        </Content>
        <RightAlignedButton>
          <Button
            text={<>등록하기</>}
            buttonType='accent'
            onClick={onClose}
            style={{ width: '122px', height: '44px', fontSize: '16px' }}
          />
        </RightAlignedButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  width: 632px;
  height: 426px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const PopupTitle = styled.h2`
  margin-bottom: 10px;
  color: ${colors.basic700};

  /* Heading/H4/Bold */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Line = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  flex-direction: row;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const PopupText = styled.p`
  font-size: 16px;
  white-space: nowrap;

  color: ${colors.basic500};

  /* Body/B3/Medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const Essential = styled.span`
  margin-right: 20px;
  white-space: nowrap;
  color: ${colors.accent100};

  /* Caption/C2/Regular */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
`;

const RightAlignedButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
