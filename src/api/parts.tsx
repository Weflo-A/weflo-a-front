import client from './client';

// 카테고리별 부품
export const getParts = async (type: string[]) => {
  return await client.get(`/api/components?type=${type}`);
};
