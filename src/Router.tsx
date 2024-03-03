import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import DroneGroup from './pages/DroneGroup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/drone-group/:id' element={<DroneGroup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
