import { Typography } from '@mui/material';
import { Trade1, Trade2, Trade3 } from 'src/assets';
import MenuTab from 'src/components/common/MenuTab';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const TradePurchasePage = () => {
  return (
    <>
      <MenuTab type='trade' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            상품 구매
          </Typography>
          <Trade1 />
          <Trade2 />
          <Trade3 />
        </Page>
      </div>
    </>
  );
};

export default TradePurchasePage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
