import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import colors from 'src/constants/colors';
import ItemContainer from 'src/components/common/ItemContainer';
import Button from 'src/components/common/Button';
import { Plus } from 'src/assets';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  &.active {
    color: ${colors.primary100};
    background-color: ${colors.primaryOpacity10};
  }
`;
//
//
//

const MenuTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchTab = location.pathname.includes('/drone-search');
  const [activeTab, setActiveTab] = React.useState(
    isSearchTab ? '드론조회' : '드론 그룹 1'
  );

  // 임시 드론 그룹 리스트
  const groupList = [
    { id: 1, name: '드론 그룹 1' },
    { id: 2, name: '드론 그룹 2' },
  ];

  const handleTabMenu = (name: string, url: string) => {
    navigate(url);
    setActiveTab(name);
  };

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
          <TabItem
            className={activeTab === '드론조회' ? 'active' : ''}
            onClick={() =>
              handleTabMenu('드론조회', '/monitoring/drone-search')
            }
          >
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
          {groupList.map((item) => (
            <TabItem
              className={activeTab === item.name ? 'active' : ''}
              onClick={() =>
                handleTabMenu(item.name, `/monitoring/drone-group/${item.id}`)
              }
            >
              <Typography fontSize='14px' fontWeight={400}>
                {item.name}
              </Typography>
            </TabItem>
          ))}
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
          text={
            <>
              <Plus /> 그룹 생성하기
            </>
          }
          buttonType='accentLight'
          onClick={() => alert('클릭')}
        />
      </TabContainer>
    </ItemContainer>
  );
};

export default MenuTab;
