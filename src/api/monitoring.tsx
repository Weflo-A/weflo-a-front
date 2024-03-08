import client from './client';

// 드론 그룹 리스트 조회
export const getDroneGroupList = async () => {
  return await client.get(`/api/drone-group`);
};
