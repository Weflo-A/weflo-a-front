import client from './client';

// 드론 그룹 내 드론 조회
export const getDroneList = async (groupId: number) => {
  return await client.get(`/api/drone-group/${groupId}/drones`);
};

// 드론 대시보드
export const getDashMain = async (id: number) => {
  return await client.get(`/api/drone/detail?droneId=${id}`);
};

// 진단 상세
export const getTestDetail = async (
  droneId: number,
  year: number,
  month: number,
  day: number
) => {
  return await client.post(`/api/drone/dashboard/detail`, {
    droneId: droneId,
    year: year,
    month: month,
    day: day,
  });
};

export const getAllDrones = async () => {
  return await client.get(`/api/drone`);
};
