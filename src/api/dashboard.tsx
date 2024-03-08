import client from './client';

// 드론 대시보드
export const getDashMain = async (id: number) => {
  return await client.get(`/api/drone/detail?droneId=${id}`);
};
