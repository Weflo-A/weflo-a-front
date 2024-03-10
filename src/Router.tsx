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
import ScrollToTop from './components/common/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Navigate replace to='/monitoring/drone-search' />}
          />
          {/* 드론 검색(조회) */}
          <Route
            path='/monitoring/drone-search'
            element={<DroneSearchPage />}
          />
          {/* 드론 목록 */}
          <Route
            path='/monitoring/drone-group/:groupId'
            element={<DroneGroupPage />}
          />
          {/* 중고 거래 */}
          <Route path='/trade' element={<PurchasePartPage />} />
          {/* 대시보드 메인 */}
          <Route
            path='/drone-group/drone/:id/dashboard'
            element={<DashBoard />}
          />
          {/* 대시보드 진단 상세 */}
          <Route
            path='/drone-group/drone/:id/dashboard/test'
            element={<TestDetailPage />}
          />
          {/* 견적서 */}
          <Route
            path='/drone-group/drone/:id/estimate'
            element={<EstimatePage />}
          />
          {/* 부품 구매 */}
          <Route
            path='/drone-group/drone/parts/purchase'
            element={<PurchasePartPage />}
          />
          {/* 부품 예측 관리 */}
          <Route
            path='/drone-group/drone/parts/manage'
            element={<EstimatePartPage />}
          />
          {/* 투입 비용 현황 */}
          <Route
            path='/drone-group/drone/parts/cost'
            element={<CostPartPage />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
