import React, { useEffect, useState } from 'react';
import colors from 'src/constants/colors';
import styled from 'styled-components';

interface ProgressBarProps {
  value: number;
  width?: number;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  width = 80,
  height = 40,
}) => {
  const [progress, setProgress] = useState(0);
  const [fillColor, setFillColor] = useState(colors.green100);

  useEffect(() => {
    const progressValue = Math.min(Math.max(value, 0), 100);
    setProgress(progressValue);
    if (progressValue <= 30) {
      setFillColor(colors.red100);
    } else if (progressValue <= 70) {
      setFillColor(colors.yellow100);
    } else {
      setFillColor(colors.green100);
    }
  }, [value]);

  return (
    <Wrapper style={{ width: `${width}px`, height: `${height}px` }}>
      <svg width='100%' height='100%' viewBox={`0 0 ${width} ${height}`}>
        <rect x='0' y='0' width='100%' height='100%' fill='transparent' />
        <rect
          x='0'
          y={`${height - (progress / 100) * height}`}
          width='100%'
          height={`${(progress / 100) * height}`}
          fill={fillColor}
          rx='5px'
          ry='5px'
          style={{ transition: 'height 0.8s ease-in-out' }}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 10;

  & svg {
    margin-top: 13px;
  }
`;

export default ProgressBar;
