import { Plus } from 'src/assets';
import Button from 'src/components/common/Button';
import MenuTab, { Group } from 'src/components/common/MenuTab';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import colors from 'src/constants/colors';
import DroneSearch from 'src/components/onboarding/droneSearch/DroneSearch';
import { DroneLists } from 'src/components/onboarding/droneSearch/DroneLists';
import Popup from 'src/components/onboarding/Popup';
import { getDroneGroupList } from 'src/api/monitoring';

const DroneSearchPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groupList, setGroupList] = React.useState<Group[]>([]);

  React.useEffect(() => {
    getDroneGroupList().then((res) => setGroupList(res.data.data));
  }, []);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <MenuTab type='monitoring' groups={groupList} />
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
          {/* <DroneLists /> */}
          {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </Page>
      </div>
    </>
  );
};

export default DroneSearchPage;

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
