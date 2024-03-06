import client from './client';

// 드론 그룹 내 드론 조회
export const getDroneGroupList = async (groupId: number) => {
  return await client.get(`/api/drone-groups/${groupId}/drones`);
};

// // 진단 상세
// export const getDashboardDetail = async (droneId: number, date: string) => {
//   return await client.post(`/api/drone/dashboard/detail`, {
//     droneId: droneId,
//     date: date,
//   });
// };
