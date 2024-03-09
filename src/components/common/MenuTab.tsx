import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import colors from 'src/constants/colors';
import ItemContainer from 'src/components/common/ItemContainer';
import Button from 'src/components/common/Button';
import { Plus } from 'src/assets';
import { useLocation, useNavigate } from 'react-router-dom';

//
//
//

export interface Group {
  groupId: number;
  name: string;
}
export interface GroupDetail {
  groupName: string;
  droneList: { id: number; name: string; sub?: string }[];
}
export interface MenuTabProps {
  groups?: Group[];
  drones?: GroupDetail;
  type: 'dashboard' | 'parts' | 'monitoring';
}

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

const MenuTab = ({ groups, drones, type }: MenuTabProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTestDetailPage = location.pathname.includes('/test');
  const isEstimatePage = location.pathname.includes('/estimate');

  const handleTabMenu = (url: string, id?: string) => {
    navigate(url, { state: id });
  };

  /* 부품 탭 */
  const renderPartsTab = () => {
    const partsTabs = [
      {
        id: 'cost',
        name: '투입 비용 현황',
        url: '/drone-group/drone/parts/cost',
      },
      {
        id: 'manage',
        name: '부품 예측 관리',
        url: '/drone-group/drone/parts/manage',
      },
      {
        id: 'purchase',
        name: '부품 구매',
        url: '/drone-group/drone/parts/purchase',
      },
    ];
    return (
      <TabWrapper>
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{ padding: '0rem 0.5rem', marginBottom: '0.5rem' }}
        >
          부품
        </Typography>
        <Divider sx={{ margin: '0rem 0.5rem 0.5rem' }} />
        <TabList>
          {partsTabs.map((item) => {
            return (
              <TabItem
                className={
                  location.pathname.includes(`/${item.id}`) ? 'active' : ''
                }
                onClick={() => handleTabMenu(item.url)}
              >
                <Typography fontSize='14px' fontWeight={400}>
                  {item.name}
                </Typography>
              </TabItem>
            );
          })}
        </TabList>
      </TabWrapper>
    );
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
            className={
              location.pathname.includes('/drone-search') ? 'active' : ''
            }
            onClick={() => handleTabMenu('/monitoring/drone-search')}
          >
            <Typography fontSize='14px' fontWeight={400}>
              드론 조회하기
            </Typography>
          </TabItem>
        </TabList>
      </TabWrapper>
    );
  };

  /* 모니터링 내 드론 그룹 탭 */
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
          {groups?.map((item) => (
            <TabItem
              className={
                location.pathname.includes(`/drone-group/${item.groupId}`)
                  ? 'active'
                  : ''
              }
              onClick={() =>
                handleTabMenu(`/monitoring/drone-group/${item.groupId}`)
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

  /* 대시보드 내 드론 리스트 탭 */
  const renderDroneListTab = () => {
    return (
      <TabWrapper>
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{ padding: '0rem 0.5rem', marginBottom: '0.5rem' }}
        >
          {drones?.groupName}
        </Typography>
        <Divider sx={{ margin: '0rem 0.5rem 0.5rem' }} />
        <TabList>
          {drones?.droneList.map((item) => (
            <TabItem
              className={
                location.pathname.includes(`/drone/${item.id}`) ? 'active' : ''
              }
              onClick={() =>
                handleTabMenu(
                  isEstimatePage
                    ? `/drone-group/drone/${item.id}/estimate`
                    : isTestDetailPage
                      ? `/drone-group/drone/${item.id}/dashboard/test`
                      : `/drone-group/drone/${item.id}/dashboard`,
                  String(item.id)
                )
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
        {type === 'monitoring' ? renderDroneSearchTab() : null}
        {type === 'monitoring' ? renderDroneGroupTab() : null}
        {type === 'dashboard' ? renderDroneListTab() : null}
        {type === 'parts' ? renderPartsTab() : null}
        {type === 'monitoring' ? (
          <Button
            text={
              <>
                <Plus /> 그룹 생성하기
              </>
            }
            buttonType='accentLight'
            onClick={() => alert('클릭')}
          />
        ) : null}
      </TabContainer>
    </ItemContainer>
  );
};

export default MenuTab;
