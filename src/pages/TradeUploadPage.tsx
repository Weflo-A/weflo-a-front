import { Typography } from '@mui/material';
import { Trade1, Trade2, Trade3 } from 'src/assets';
import MenuTab from 'src/components/common/MenuTab';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const TradeUploadPage = () => {
  return (
    <>
      <MenuTab type='trade' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            상품 등록
          </Typography>
          <Grid>
            <Trade1 />
            <Trade3 style={{ gridColumn: '2', gridRow: '1 / span 2' }} />
            <Trade2 />
          </Grid>
        </Page>
      </div>
    </>
  );
};

export default TradeUploadPage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 372px 632px;
  grid-template-rows: auto auto;
  gap: 10px;
  justify-content: flex-start;
`;
