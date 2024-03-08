import React from 'react';
import { styled } from '@mui/material/styles';
import { StarFill, StarNone } from 'src/assets';

const StarContainer = styled('div')({
  display: 'flex',
});

const Star: React.FC<{ star: number }> = ({ star }) => {
  const filledStars = new Array(Math.floor(star)).fill(0);
  const emptyStars = new Array(5 - Math.floor(star)).fill(0);

  return (
    <StarContainer>
      {/* 색칠된 별 */}
      {filledStars.map((_, index) => (
        <StarFill key={index} />
      ))}
      {/* 색칠 안된 별*/}
      {emptyStars.map((_, index) => (
        <StarNone key={index} />
      ))}
    </StarContainer>
  );
};

export default Star;
