import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DroneGroupPage from './pages/DroneGroupPage';
import DroneSearchPage from './pages/DroneSearhPage';
import NavBar from './components/common/NavBar';
import EstimatePage from './pages/EstimatePage';
import DashBoard from './pages/DashBoard';
import CostPartPage from './pages/CostPartPage';
import EstimatePartPage from './pages/EstimatePartPage';
import PurchasePartPage from './pages/PurchasePartPage';
import TestDetailPage from './pages/TestDetailPage';

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
        <Route path='/monitoring/trade' element={<DroneSearchPage />} />
        <Route path='/trade' element={<DroneSearchPage />} />
        {/* 드론 [대시보드, 견적서, 부품], 중고거래 */}
        <Route
          path='/drone-group/drone/:id/dashboard'
          element={<DashBoard />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/dashboard/test'
          element={<TestDetailPage />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/dashboard/test'
          element={<DroneSearchPage />}
        />
        <Route
          path='/drone-group/:groupId/drone/:id/estimate'
          element={<EstimatePage />}
        />
        <Route path='/drone-group/drone/1/parts' element={<CostPartPage />} />
        <Route
          path='/drone-group/drone/2/parts'
          element={<EstimatePartPage />}
        />
        <Route
          path='/drone-group/drone/3/parts'
          element={<PurchasePartPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
