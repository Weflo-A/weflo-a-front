import styled from 'styled-components';
import { Typography } from '@mui/material';
import { parts } from 'src/assets/data/menuData';
import colors from 'src/constants/colors';
import { InfoCircle } from 'src/assets';
import MenuTabGroup from 'src/components/common/MenuTabGroup';

const EstimatePartPage = () => {
  return (
    <>
      <MenuTabGroup groups={parts} type='parts' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            부품 구매
          </Typography>
          <Caution>
            <InfoCircle />
            <Typography variant='body2' color={colors.basic700}>
              본 페이지에서는 대시보드에서 확인된 교체 부품 가격만이 비용으로
              표시됩니다
            </Typography>
          </Caution>
        </Page>
      </div>
    </>
  );
};

export default EstimatePartPage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Caution = styled.div`
  width: 1020px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary30};
  background: ${colors.primaryOpacity10};
`;
