import { Stack, Typography } from '@mui/material';
import { groups } from 'src/assets/data/menuData';
import ItemContainer from 'src/components/common/ItemContainer';
import MenuTabGroup from 'src/components/common/MenuTabGroup';
import DroneTestImage from 'src/components/dashboard/DroneTestImage';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import { brokenParts } from 'src/assets/data/estimateDummy';
import BrokenPartInfoBox from 'src/components/estimate/BrokenPartInfoBox';

const DroneInfoItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
  padding: 0.6875rem;
`;

const TestDetailPage = () => {
  /* 종합 진단 섹션 */
  const renderTotalTest = () => {
    return (
      <ItemContainer
        style={{ flexDirection: 'column', gap: '1rem', padding: '1.25rem' }}
      >
        <Typography variant='body1' fontWeight='bold'>
          종합 진단
        </Typography>
        <Stack direction='column' gap='0.5625rem'>
          <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
            <Typography variant='caption' color={colors.basic500}>
              주행시 사고 확률
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              11%
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
            <Typography variant='caption' color={colors.basic500}>
              예상 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              06월 15일
            </Typography>
          </DroneInfoItemBox>
          <DroneInfoItemBox style={{ width: '10.3125rem', height: '4rem' }}>
            <Typography variant='caption' color={colors.basic500}>
              이전 부품 교체일
            </Typography>
            <Typography variant='body2' fontWeight='bold'>
              02월 04일
            </Typography>
          </DroneInfoItemBox>
        </Stack>
      </ItemContainer>
    );
  };

  /* 교체가 필요한 부품 섹션 */
  const renderBrokenPartsInfo = () => {
    return (
      <ItemContainer
        style={{
          flexDirection: 'column',
          width: '100%',
          padding: '1.25rem',
          gap: '0.6875rem',
        }}
      >
        <Typography variant='body1' fontWeight='bold'>
          교체가 필요한 부품
        </Typography>
        <Stack display='grid' gridTemplateColumns='1fr 1fr 1fr 1fr'>
          <Typography variant='caption' color={colors.basic400}>
            부품
          </Typography>
          <Typography variant='caption' color={colors.basic400}>
            부품위치
          </Typography>
          <Typography variant='caption' color={colors.basic400}>
            점수
          </Typography>
        </Stack>
        <Stack direction='column' gap='0.25rem'>
          {brokenParts.map((item) => (
            <BrokenPartInfoBox
              part={item.parts}
              location={item.loc}
              score={item.score}
              warning={item.warning}
            />
          ))}
        </Stack>
      </ItemContainer>
    );
  };

  return (
    <>
      <MenuTabGroup groups={groups} />
      <div className='page'>
        <Stack direction='row' gap='1rem'>
          {/* 점수 도표 */}
          <ItemContainer></ItemContainer>
          {/* 점수 리스트 */}
          <ItemContainer></ItemContainer>
        </Stack>
        <Stack direction='row' gap='1rem'>
          {renderTotalTest()}
          {renderBrokenPartsInfo()}
          <ItemContainer></ItemContainer>
          {/* 드론 이미지*/}
          <DroneTestImage />
        </Stack>
      </div>
    </>
  );
};

export default TestDetailPage;
