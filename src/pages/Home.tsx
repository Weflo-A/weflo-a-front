import Button from 'src/components/Button';
import NavBar from 'src/components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <Button
        text='텍스트'
        buttonType='accentLight'
        onClick={() => alert('테스트')}
      />
    </>
  );
};

export default Home;
