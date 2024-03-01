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
      </div>
    </>
  );
};

export default Home;
