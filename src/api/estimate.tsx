import client from './client';

// 진단 날짜 조회
export const getTestDateList = async (droneId: number) => {
  return await client.get(`/api/drones/${droneId}/test-results`);
};

// 견적서 조회
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

// 드론 그룹 내 드론 조회
export const getDroneGroupList = async (groupId: number) => {
  return await client.get(`/api/drone-groups/${groupId}/drones`);
};

// export const getDroneEstimate = async (droneId: number, date: string) => {
//   return await client.get(`/api/drones/${droneId}/test-results?year=${year}&month=${}`);
// };

// // 진단 상세
// export const getDashboardDetail = async (droneId: number, date: string) => {
//   return await client.post(`/api/drone/dashboard/detail`, {
//     droneId: droneId,
//     date: date,
//   });
// };
