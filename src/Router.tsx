import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import DashBoard from './pages/DashBoard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/dashboard/*' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
