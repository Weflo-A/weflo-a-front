import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Tooltip } from '@mui/material';
import drone1_1 from 'src/assets/images/test/drone1_1.png';
import drone1_2 from 'src/assets/images/test/drone1_2.png';
import drone1_3 from 'src/assets/images/test/drone1_3.png';
import drone1_4 from 'src/assets/images/test/drone1_4.png';
import React from 'react';

const ImageContainer = styled.div<{ imgUrl: string }>`
  position: relative;
  max-width: 27.25rem;
  width: 100%;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : null)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

interface DroneTestImageProp {
  imgUrl: string;
}

const InfoChip = styled.div`
  padding: 0.125rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${colors.basic200};
  color: ${colors.basic600};
  &:hover {
    background: red;
    color: white;
  }
`;

const DroneTestImage = ({ imgUrl }: DroneTestImageProp) => {
  const [droneImg, setDroneImg] = React.useState(imgUrl);
  return (
    <>
      <ImageContainer imgUrl={droneImg}>
        <Tooltip
          title='모터 점수 17% 빠른 교체가 필요합니다'
          arrow
          onMouseOver={() => setDroneImg(drone1_1)}
          onMouseLeave={() => setDroneImg(imgUrl)}
        >
          <InfoChip style={{ position: 'absolute', right: 30, top: 30 }}>
            구동부 1
          </InfoChip>
        </Tooltip>
        <Tooltip
          title='모터 점수 17% 빠른 교체가 필요합니다'
          arrow
          onMouseOver={() => setDroneImg(drone1_2)}
          onMouseLeave={() => setDroneImg(imgUrl)}
        >
          <InfoChip style={{ position: 'absolute', right: 10, bottom: 80 }}>
            구동부 2
          </InfoChip>
        </Tooltip>
        <Tooltip
          title='모터 점수 17% 빠른 교체가 필요합니다'
          arrow
          onMouseOver={() => setDroneImg(drone1_3)}
          onMouseLeave={() => setDroneImg(imgUrl)}
        >
          <InfoChip style={{ position: 'absolute', left: 30, bottom: 30 }}>
            구동부 3
          </InfoChip>
        </Tooltip>
        <Tooltip
          title='모터 점수 17% 빠른 교체가 필요합니다'
          arrow
          onMouseOver={() => setDroneImg(drone1_4)}
          onMouseLeave={() => setDroneImg(imgUrl)}
        >
          <InfoChip style={{ position: 'absolute', left: 10, top: 80 }}>
            구동부 4
          </InfoChip>
        </Tooltip>
      </ImageContainer>
    </>
  );
};

export default DroneTestImage;
