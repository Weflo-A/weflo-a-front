import colors from 'src/constants/colors';
import wefloLogo from 'src/asset/weflo-logo.png';
import styled from 'styled-components';

//
//
//

const NavContainer = styled.div`
  width: 100%;
  height: 3.25rem;
  position: 'absolute';
  top: 0;
  left: 0;
  box-sizing: border-box;
  background: ${colors.secondary};
  padding: 0rem 5rem;
`;
const NavStack = styled.div`
  height: 100%;
  display: flex;
  flexdirection: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
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
    <NavContainer>
      <NavStack>
        <img src={wefloLogo} alt='weflo-logo-img' />
        <RightWrapper>
          <MenuList>
            <MenuItem>모니터링</MenuItem>
            <MenuItem>중고거래</MenuItem>
          </MenuList>
          <EmailBox>jjung0259@gmail.com</EmailBox>
        </RightWrapper>
      </NavStack>
    </NavContainer>
  );
};

export default NavBar;
