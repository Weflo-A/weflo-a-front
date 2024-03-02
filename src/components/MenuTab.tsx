import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import colors from 'src/constants/colors';
import Button from './Button';

//
//
//

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  gap: 1.5rem;
`;
const TabWrapper = styled.div``;
const TabList = styled.div`
  gap: 0.25rem;
`;
const TabItem = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    color: ${colors.primary100};
    background-color: ${colors.primaryOpacity10};
  }
`;
//
//
//

const MenuTab = () => {
  /* 드론 조회하기 탭 */
  const renderDroneSearchTab = () => {
    return (
      <TabWrapper>
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{ padding: '0rem 0.5rem', marginBottom: '0.5rem' }}
        >
          드론
        </Typography>
        <Divider sx={{ margin: '0rem 0.5rem 0.5rem' }} />
        <TabList>
          <TabItem>
            <Typography fontSize='14px' fontWeight={400}>
              드론 조회하기
            </Typography>
          </TabItem>
        </TabList>
      </TabWrapper>
    );
  };

  /* 드론 그룹 탭 */
  const renderDroneGroupTab = () => {
    return (
      <TabWrapper>
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{ padding: '0rem 0.5rem', marginBottom: '0.5rem' }}
        >
          드론 그룹
        </Typography>
        <Divider sx={{ margin: '0rem 0.5rem 0.5rem' }} />
        <TabList>
          <TabItem>
            <Typography fontSize='14px' fontWeight={400}>
              드론 그룹1
            </Typography>
          </TabItem>
          <TabItem>
            <Typography fontSize='14px' fontWeight={400}>
              드론 그룹2
            </Typography>
          </TabItem>
        </TabList>
      </TabWrapper>
    );
  };

  return (
    <ItemContainer
      style={{ minWidth: '12.5rem', position: 'fixed', marginTop: '3.25rem' }}
    >
      <TabContainer>
        {renderDroneSearchTab()}
        {renderDroneGroupTab()}
        <Button
          text='그룹 생성하기'
          buttonType='accentLight'
          onClick={() => alert('클릭')}
        />
      </TabContainer>
    </ItemContainer>
  );
};

export default MenuTab;
