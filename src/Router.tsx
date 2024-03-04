import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DroneGroupPage from './pages/DroneGroupPage';
import DroneSearchPage from './pages/DroneSearhPage';
import NavBar from './components/common/NavBar';
import EstimatePage from './pages/EstimatePage';

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
        <Route
          path='/drone-group/:groupId/drone/:id/dashboard'
          element={<DroneSearchPage />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/dashboard/test'
          element={<DroneSearchPage />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/estimate'
          element={<EstimatePage />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/parts'
          element={<DroneSearchPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
