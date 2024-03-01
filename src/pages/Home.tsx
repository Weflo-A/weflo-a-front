import { Plus } from 'src/assets';
import Button from 'src/components/common/Button';
import MenuTab from 'src/components/common/MenuTab';
import { DroneGroupCard } from 'src/components/Onboarding/DroneGroupSearch/DroneGroupCard';
import { DroneLists } from 'src/components/Onboarding/DroneSearch/DroneLists';
import DroneSearch from 'src/components/Onboarding/DroneSearch/DroneSearch';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <MenuTab />
      <div className='page'>
        <Page>
          <Header>
            <PageTitle>드론 조회</PageTitle>
            <Button
              text={
                <>
                  <Plus /> 드론 신규 등록
                </>
              }
              buttonType='accentLight'
              onClick={() => alert('신규 등록 완료')}
            />
          </Header>
          <DroneSearch />
          <DroneLists />
          <DroneGroupCard />
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

const PageTitle = styled.div`
  color: var(--Basic-B-700, #334155);

  /* Heading/H3/Bold */
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;
