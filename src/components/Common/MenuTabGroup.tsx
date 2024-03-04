import { Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import colors from 'src/constants/colors';
import ItemContainer from './ItemContainer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Group {
  name: string;
  drones: { id: number; name: string }[];
}

interface MenuTabGroupProps {
  groups: Group[];
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

const TabItem = styled.div<{ selected: boolean }>`
  /* 선택된 상태에 따라 스타일 적용 */
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ selected }) => (selected ? colors.primary100 : colors.basic400)};
  background-color: ${({ selected }) =>
    selected ? colors.primaryOpacity10 : 'transparent'};
  font-size: '14px';
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
  &:hover {
    cursor: pointer;
    color: ${colors.primary100};
  }
`;

const MenuTabGroup: React.FC<MenuTabGroupProps> = ({ groups }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const handleTabClick = (id: number) => {
    navigate(`/drone/${id}/dashboard`);
    setSelectedTab(id);
  };

  const renderGroupTabs = () => {
    return groups.map((group, index) => (
      <TabWrapper key={index}>
        <Typography
          variant='body2'
          fontWeight='bold'
          color={colors.basic700}
          sx={{ padding: '0rem 0.5rem', marginBottom: '0.5rem' }}
        >
          {group.name}
        </Typography>
        <Divider sx={{ margin: '0rem 0.5rem 0.5rem' }} />
        <TabList>
          {group.drones.map((drone, index) => (
            <TabItem
              key={index}
              onClick={() => handleTabClick(drone.id)}
              selected={selectedTab === drone.id}
            >
              {drone.name}
            </TabItem>
          ))}
        </TabList>
      </TabWrapper>
    ));
  };

  return (
    <ItemContainer
      style={{ minWidth: '12.5rem', position: 'fixed', marginTop: '3.25rem' }}
    >
      <TabContainer>{renderGroupTabs()}</TabContainer>
    </ItemContainer>
  );
};

export default MenuTabGroup;
