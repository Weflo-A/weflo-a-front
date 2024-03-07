import React, { useState } from 'react';
import styled from 'styled-components';
import { WidthCard } from 'src/components/part/purchasepart/WidthCard'; // WidthCard 컴포넌트 import
import { productData } from 'src/assets/data/productData';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface CardProps {
  position: number;
  scale: number;
  zIndex: number;
}

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  const renderCards = () => {
    return productData.map((data, index) => {
      let position = index - currentIndex;
      if (position < 0) position += 5;
      const scale = 1 - Math.abs(position - 2) * 0.1; // 가운데 카드는 1로 유지, 양 옆 카드는 점점 작아지도록
      const zIndex = 5 - Math.abs(position - 2); // 가운데에 있는 카드는 z-index가 가장 높게 설정됨
      return (
        <Card key={index} position={position} scale={scale} zIndex={zIndex}>
          <WidthCard
            data={{
              id: data.id,
              store: data.store,
              name: data.name,
              price: data.price,
              rank: data.rank,
              image: data.image,
            }}
          />
        </Card>
      );
    });
  };

  return (
    <CardSliderContainer>
      <LeftButton onClick={handlePrev}>
        <ChevronLeftIcon
          sx={{ color: 'white', width: '24px', height: '24px' }}
        />
      </LeftButton>
      <CardRend>{renderCards()}</CardRend>
      <RightButton onClick={handleNext}>
        <ChevronRightIcon
          sx={{ color: 'white', width: '24px', height: '24px' }}
        />
      </RightButton>
    </CardSliderContainer>
  );
};

export default CardSlider;

const CardSliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const CardRend = styled.div`
  width: 870px;
  height: 206px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Card = styled.div.attrs<CardProps>((props) => ({
  style: {
    left: `${props.position * 80}px`,
    transform: `scale(${props.scale})`,
    zIndex: props.zIndex,
  },
}))<CardProps>`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease;
  position: absolute;
  left: calc(50% - 100px + ${(props) => props.position * 80}px);
  transform: scale(${(props) => props.scale});
  z-index: ${(props) => props.zIndex};

  &:hover {
    z-index: 10;
  }
`;

const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
