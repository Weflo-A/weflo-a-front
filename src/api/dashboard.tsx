import client from './client';

// 드론 그룹 내 드론 조회
export const getDroneList = async (groupId: number) => {
  return await client.get(`/api/drone-group/${groupId}/drones`);
};

// 드론 대시보드
export const getDashMain = async (id: number) => {
  return await client.get(`/api/drone/detail?droneId=${id}`);
};

// 드론 조회
export const postSearch = async () => {
  return await client.post(`/api/drone/search`);
};
