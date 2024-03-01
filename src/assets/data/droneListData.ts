export interface Drone {
  id: number;
  name: string;
  model: string;
  year: number;
  group: number[];
}

export const droneListData: Drone[] = [
  {
    id: 0,
    name: 'DRONE NO.4',
    model: 'EAGLE',
    year: 2022,
    group: [1, 3],
  },
  {
    id: 1,
    name: 'DRONE NO.4',
    model: 'EAGLE',
    year: 2022,
    group: [1],
  },
  {
    id: 2,
    name: 'DRONE NO.4',
    model: 'EAGLE',
    year: 2022,
    group: [1, 2],
  },
  {
    id: 3,
    name: 'DRONE NO.4',
    model: 'EAGLE',
    year: 2022,
    group: [2],
  },
];
