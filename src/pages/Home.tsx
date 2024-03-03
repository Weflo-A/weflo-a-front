import { Plus } from 'src/assets';
import Button from 'src/components/common/Button';
import MenuTab from 'src/components/common/MenuTab';
import { DroneGroupCard } from 'src/components/Onboarding/DroneGroupSearch/DroneGroupCard';
import { DroneLists } from 'src/components/Onboarding/DroneSearch/DroneLists';
import DroneSearch from 'src/components/Onboarding/DroneSearch/DroneSearch';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Popup from 'src/components/Onboarding/Popup';
import colors from 'src/constants/colors';
import { DroneGroupList } from 'src/components/Onboarding/DroneGroupSearch/DroneGroupList';

const Home = () => {
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
          <DroneGroupList />
          {isPopupOpen && <Popup onClose={handleClosePopup} />}
          <>
            <Typography variant='h1' fontWeight='bold'>
              H1 Bold
            </Typography>
            {/* medium (500) 디폴트 */}
            <Typography variant='h1'>H1 Medium</Typography>
            <Typography variant='h1' fontWeight='regular'>
              H1 Regular
            </Typography>
            <Typography variant='h2'>H2</Typography>
            <Typography variant='h3'>H3</Typography>
            <Typography variant='body1'>body1</Typography>
            <Typography variant='body2'>body2</Typography>
            <Typography variant='caption'>caption</Typography>
          </>
        </Page>
      </div>
    </>
  );
};

export default Home;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
