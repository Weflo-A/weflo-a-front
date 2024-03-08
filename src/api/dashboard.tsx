import client from './client';

// 드론 그룹 내 드론 조회
export const getDroneList = async (groupId: number) => {
  return await client.get(`/api/drone-group/${groupId}/drones`);
};
