import { Plus } from 'src/assets';
import Button from 'src/components/common/Button';
import MenuTab from 'src/components/common/MenuTab';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useState } from 'react';
import colors from 'src/constants/colors';
import DroneSearch from 'src/components/Onboarding/DroneSearch/DroneSearch';
import { DroneLists } from 'src/components/Onboarding/DroneSearch/DroneLists';
import Popup from 'src/components/Onboarding/Popup';

const DroneSearchPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <MenuTab />
      <div className='page'>
        <Page>
          <Header>
            <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
              드론 조회
            </Typography>
            <Button
              text={
                <>
                  <Plus /> 드론 신규 등록
                </>
              }
              buttonType='accentLight'
              onClick={handleButtonClick}
            />
          </Header>
          <DroneSearch />
          <DroneLists />
          {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </Page>
      </div>
    </>
  );
};

export default DroneSearchPage;

const Page = styled.div`
  min-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  white-space: nowrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
