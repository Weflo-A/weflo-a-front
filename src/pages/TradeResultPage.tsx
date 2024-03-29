import { Typography } from '@mui/material';
import {
  TradeResult1,
  TradeResult2,
  TradeResult3,
  TradeResult4,
} from 'src/assets';
import MenuTab from 'src/components/common/MenuTab';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const TradeResultPage = () => {
  return (
    <>
      <MenuTab type='trade' />
      <div className='page'>
        <Page>
          <Typography variant='h3' fontWeight='bold' color={colors.basic700}>
            검수 결과
          </Typography>
          <Grid>
            <TradeResult1 />
            <TradeResult2 />
            <TradeResult3 />
            <TradeResult4 />
            {/* <img src={`/src/assets/images/TradeResult4.png`}></img> */}
          </Grid>
        </Page>
      </div>
    </>
  );
};

export default TradeResultPage;

const Page = styled.div`
  min-width: 1020px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 342px 664px;
  grid-template-rows: auto auto;
  gap: 10px;
  justify-content: flex-start;
`;
