import { Drone1, Drone2, Drone3 } from '..';

export interface Drone {
  id: number;
  name: string;
  model: string;
  year: number;
  group: number[];
  usage: string;
  cost: string;
  groupSetupDate: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const droneListData: Drone[] = [
  {
    id: 0,
    name: 'DRONE NO.1',
    model: 'EAGLE',
    year: 2022,
    group: [1, 3],
    usage: '편의점 배달',
    cost: '50,620원',
    groupSetupDate: '2022.11.11',
    image: Drone1,
  },

  {
    id: 1,
    name: 'DRONE NO.2',
    model: 'Falcon',
    year: 2021,
    group: [1],
    usage: '식료품 배달',
    cost: '60,000원',
    groupSetupDate: '2021.01.28',
    image: Drone2,
  },
  {
    id: 2,
    name: 'DRONE NO.3',
    model: 'EAGLE',
    year: 2024,
    group: [1, 2],
    usage: '의류 배달',
    cost: '50,620원',
    groupSetupDate: '2024.03.03',
    image: Drone3,
  },
  {
    id: 3,
    name: 'DRONE NO.4',
    model: 'EAGLE',
    year: 2023,
    group: [2],
    usage: '전자제품 배달',
    cost: '50,620원',
    groupSetupDate: '2024.02.16',
    image: Drone1,
  },
];
