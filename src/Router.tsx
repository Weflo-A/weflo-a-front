import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DroneGroupPage from './pages/DroneGroupPage';
import DroneSearchPage from './pages/DroneSearhPage';
import NavBar from './components/common/NavBar';
import DashBoard from './pages/DashBoard';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Navigate replace to='/monitoring/drone-search' />}
        />
        {/* 모니터링, 중고거래 */}
        <Route path='/monitoring/drone-search' element={<DroneSearchPage />} />
        <Route
          path='/monitoring/drone-group/:groupId'
          element={<DroneGroupPage />}
        />
        {/* 드론 [대시보드, 견적서, 부품], 중고거래 */}
        <Route path='/drone/:id/dashboard' element={<DashBoard />} />
        <Route path='/drone/:id/dashboard/test' element={<DroneSearchPage />} />
        <Route path='/drone/:id/estimate' element={<DroneSearchPage />} />
        <Route path='/drone/:id/parts' element={<DroneSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
