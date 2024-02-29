import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import colors from '../constants/colors';
import wefloLogo from 'src/asset/weflo-logo.png';
import styled from 'styled-components';

//
//
//

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
const MenuList = styled.div`
  display: flex;
  gap: 1rem;
`;
const MenuItem = styled.div`
  display: flex;
  height: 100%;
  color: ${colors.basic200};
  padding: 1rem 1rem 1rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:hover {
    padding-bottom: 0.75rem;
    color: ${colors.primary100};
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
  return (
    <AppBar position='static' sx={{ background: colors.secondary }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={wefloLogo} alt='weflo-logo-img' />
        <RightWrapper>
          <MenuList>
            <MenuItem>모니터링</MenuItem>
            <MenuItem>중고거래</MenuItem>
          </MenuList>
          <EmailBox>jjung0259@gmail.com</EmailBox>
        </RightWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
