import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckBox from 'src/components/common/CheckBox';
import ItemContainer from 'src/components/common/ItemContainer';
import MenuTab from 'src/components/common/MenuTab';
import Search from 'src/components/common/Search';
import BrokenPartInfoBox from 'src/components/estimate/BrokenPartInfoBox';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import { brokenParts } from 'src/assets/data/estimateDummy';

//
//
//

const EstimatePage = () => {
  const [partsSearch, setPartsSearch] = React.useState('');

  const renderPageHeader = () => {
    return (
      <Stack
        direction='row'
        gap='1.25rem'
        alignItems='center'
        marginBottom='1rem'
      >
        <Stack direction='row' gap='0.5rem'>
          <Typography variant='h2' fontWeight='bold' color={colors.accent100}>
            Drone No.1
          </Typography>
          <Typography variant='h2' fontWeight='bold' color={colors.basic700}>
            견적서
          </Typography>
        </Stack>
      </Stack>
    );
  };
  return (
    <>
      <MenuTab />
      <div className='page'>
        {renderPageHeader()}
        <Stack direction='row' gap='1rem'>
          <ItemContainer
            style={{
              flexDirection: 'column',
              width: '100%',
              padding: '1.25rem',
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
          <ItemContainer style={{ width: '100%', padding: '1.25rem' }}>
            <Typography variant='body1' fontWeight='bold'>
              총 점수
            </Typography>
          </ItemContainer>
        </Stack>

        {/* 교체용 부품 구매 섹션*/}
        <Stack direction='column'>
          <ItemContainer
            style={{
              width: '100%',
              padding: '1.25rem',
              flexDirection: 'column',
            }}
          >
            <Stack direction='column'>
              <Typography variant='body2' color={colors.accent100}>
                자가 수리가 가능하다면?
              </Typography>
              <Typography variant='h3' fontWeight='bold'>
                교체용 부품 구매
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Search
                value={partsSearch}
                placeholder='찾으시는 부품을 검색해보세요.'
                onChange={(e) => setPartsSearch(e.target.value)}
                onClick={() => alert('검색')}
              />
              <Stack
                flexDirection='row'
                justifyContent='flex-end'
                marginBottom='1rem'
              >
                {['점수 낮은 순', '가격 낮은 순', '가격 높은 순'].map(
                  (item, index) => (
                    <CheckBox key={index} label={item} />
                  )
                )}
              </Stack>
            </Stack>
          </ItemContainer>
        </Stack>
      </div>
    </>
  );
};

export default EstimatePage;
