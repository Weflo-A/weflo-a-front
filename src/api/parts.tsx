import client from './client';

// 전체 부품
export const getCategoryParts = async () => {
  return await client.get(`/api/components`);
};

// 드론 부품
export const getDroneParts = async (
  dronedId: number,
  point: number,
  than: number
) => {
  return await client.get(`/api/drones/{droneId}?point=${point}&than=${than}`);
};

// 연도, 월 기준 투입 비용
export const getCosts = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  return await client.get(`/api/month-costs?year=${year}&month=${month}`);
};
