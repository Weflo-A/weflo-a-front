import colors from 'src/constants/colors';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { WefloLogo } from 'src/assets';
import { useLocation, useNavigate } from 'react-router-dom';
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
  z-index: 1000;
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
  const location = useLocation();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = React.useState('모니터링');
  const isMonitoringNav = location.pathname.includes('/monitoring');

  const handleMenu = (name: string, url: string) => {
    navigate(url);
    setActiveMenu(name);
  };

  //
  //
  //

  return (
    <NavContainer>
      <NavStack>
        <WefloLogo />
        <RightWrapper>
          <MenuList>
            {isMonitoringNav ? (
              <>
                <MenuItem
                  className={activeMenu === '모니터링' ? 'active' : ''}
                  onClick={() =>
                    handleMenu('모니터링', '/monitoring/drone-search')
                  }
                >
                  <Typography fontSize='14px' fontWeight='regular'>
                    모니터링
                  </Typography>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  className={activeMenu === '대시보드' ? 'active' : ''}
                  onClick={() =>
                    handleMenu(
                      '대시보드',
                      '/drone-group/:groupId/drone/:id/dashboard'
                    )
                  }
                >
                  <Typography fontSize='14px' fontWeight='regular'>
                    대시보드
                  </Typography>
                </MenuItem>
                <MenuItem
                  className={activeMenu === '견적서' ? 'active' : ''}
                  onClick={() =>
                    handleMenu(
                      '견적서',
                      '/drone-group/:groupId/drone/:id/estimate'
                    )
                  }
                >
                  <Typography fontSize='14px' fontWeight='regular'>
                    견적서
                  </Typography>
                </MenuItem>
                <MenuItem
                  className={activeMenu === '부품' ? 'active' : ''}
                  onClick={() =>
                    handleMenu('부품', '/drone-group/:groupId/drone/:id/parts')
                  }
                >
                  <Typography fontSize='14px' fontWeight='regular'>
                    부품
                  </Typography>
                </MenuItem>
              </>
            )}
            <MenuItem
              className={activeMenu === '중고거래' ? 'active' : ''}
              onClick={() =>
                handleMenu('중고거래', '/monitoring/drone-group/1')
              }
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
