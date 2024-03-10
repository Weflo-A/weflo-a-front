import colors from 'src/constants/colors';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { WefloLogo } from 'src/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDroneList } from 'src/api/dashboard';
import React from 'react';

//
//
//

const NavContainer = styled.div`
  width: 100%;
  height: 3.25rem;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.secondary};
  padding: 0rem 5rem;
  z-index: 3000;
  white-space: nowrap;
`;
const NavStack = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const RightWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
const MenuList = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
`;
const MenuItem = styled.div`
  height: 100%;
  display: flex;
  color: ${colors.basic200};
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:hover {
    color: ${colors.primary100};
    padding: 1rem 1rem 0.75rem 1rem;
    border-bottom: 0.25rem solid ${colors.primary100};
  }
  &.active {
    color: ${colors.primary100};
    padding: 1rem 1rem 0.75rem 1rem;
    border-bottom: 0.25rem solid ${colors.primary100};
  }
`;
const EmailBox = styled.div`
  display: flex;
  padding: 0.375rem 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: black;
  color: ${colors.basic400};
`;

//
//
//

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstDroneId, setFirstDroneId] = React.useState(1);

  const handleMenu = (url: string) => {
    navigate(url, {
      state: location.state ? location.state.id : location.state,
    });
  };

  //
  //
  //
  /* 임시 드론 정보 전체 리스트 */
  React.useEffect(() => {
    getDroneList(1).then((res) => {
      setFirstDroneId(res.data.data.droneList[0].id);
    });
  }, []);

  return (
    <NavContainer>
      <NavStack>
        <WefloLogo onClick={() => navigate('/monitoring/drone-search')} />
        <RightWrapper>
          <MenuList>
            <MenuItem
              className={
                location.pathname.includes('/monitoring/drone-group') ||
                location.pathname.includes('/monitoring/drone-search')
                  ? 'active'
                  : ''
              }
              onClick={() => handleMenu('/monitoring/drone-search')}
            >
              <Typography fontSize='14px' fontWeight='regular'>
                모니터링
              </Typography>
            </MenuItem>
            <MenuItem
              className={
                location.pathname.includes('/dashboard') ? 'active' : ''
              }
              onClick={() =>
                handleMenu(`/drone-group/drone/${firstDroneId}/dashboard`)
              }
            >
              <Typography fontSize='14px' fontWeight='regular'>
                대시보드
              </Typography>
            </MenuItem>
            <MenuItem
              className={
                location.pathname.includes('/estimate') ? 'active' : ''
              }
              onClick={() =>
                handleMenu(`/drone-group/drone/${firstDroneId}/estimate`)
              }
            >
              <Typography fontSize='14px' fontWeight='regular'>
                견적서
              </Typography>
            </MenuItem>
            <MenuItem
              className={location.pathname.includes('/parts') ? 'active' : ''}
              onClick={() => handleMenu(`drone-group/drone/parts/cost`)}
            >
              <Typography fontSize='14px' fontWeight='regular'>
                부품
              </Typography>
            </MenuItem>
            <MenuItem
              className={location.pathname.includes('/trade') ? 'active' : ''}
              onClick={() => handleMenu(`/drone-group/drone/trade/upload`)}
            >
              <Typography fontSize='14px' fontWeight='regular'>
                중고거래
              </Typography>
            </MenuItem>
          </MenuList>
          <EmailBox>
            <Typography variant='caption' fontWeight='regular'>
              jjung0259@gmail.com
            </Typography>
          </EmailBox>
        </RightWrapper>
      </NavStack>
    </NavContainer>
  );
};

export default NavBar;
