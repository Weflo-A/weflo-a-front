import client from './client';

// 진단 날짜 리스트 조회
export const getTestDateList = async (droneId: number) => {
  return await client.get(`/api/drones/${droneId}/test-results`);
};

// 견적서 부품 리스트 조회
export const getEstimateInfo = async (droneId: number, dateValue: string) => {
  const newDate = new Date(dateValue);
  const year = Number(newDate.getFullYear());
  const month = Number(newDate.getMonth()) + 1;
  const date = Number(newDate.getDate());
  console.log(year, month, date);
  return await client.get(
    `/api/drones/${droneId}/test-results?year=${year}&month=${month}&day=${date}`
  );
};

// 교체가 필요한 부품 및 총점수 조회
export const getTopSectionInfo = async (droneId: number, dateValue: string) => {
  const newDate = new Date(dateValue);
  const year = Number(newDate.getFullYear());
  const month = Number(newDate.getMonth()) + 1;
  const date = Number(newDate.getDate());
  console.log(year, month, date);
  return await client.get(
    `/api/drones/${droneId}/test-results?year=${year}&month=${month}&day=${date}&mode=TOP-SECTION`
  );
};

// 수리 업체 조회
export const getRepairCompany = async (model: string, type: string[]) => {
  return await client.get(`/api/repair-stores?model=${model}&type=${type}`);
};

// 장바구니 총합 조회
export const getBasketList = async (checkedList: string[]) => {
  return await client.get(`api/components?names=${checkedList}`);
};

// 드론 모델 명 조회
export const getDroneModel = async (droneId: number) => {
  return await client.get(`api/drone/${droneId}`);
};
