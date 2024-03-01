import { Typography } from '@mui/material';
import Button from 'src/components/Button';
import MenuTab from 'src/components/MenuTab';

const Home = () => {
  return (
    <>
      <MenuTab />
      <div className='page'>
        여기서부터 페이지 공간
        <Button
          text='텍스트'
          buttonType='accent'
          onClick={() => alert('테스트')}
        />
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
      </div>
    </>
  );
};

export default Home;
