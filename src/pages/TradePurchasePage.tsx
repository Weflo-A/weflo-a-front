import { Typography } from '@mui/material';
import { TradeBuy1, TradeBuy2, TradeBuy3, TradeBuy4 } from 'src/assets';
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
          <Grid>
            <TradeBuy1 style={{ gridColumn: '1', gridRow: '1 / span3' }} />
            <TradeBuy2 />
            <TradeBuy3 />
            <TradeBuy4 />
          </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 202px 802px;
  grid-template-rows: 69px 396px 396px;
  gap: 10px;
  justify-content: flex-start;
`;
