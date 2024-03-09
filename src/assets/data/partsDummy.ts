export interface Parts {
  id: number;
  part: string;
  model: string;
  num: number;
  price: number;
  total: number;
}

export const partsDummy: Parts[] = [
  {
    id: 1,
    part: 'ESC 301',
    model: 'EAGLE',
    num: 192,
    price: 20000,
    total: 3840000,
  },
  {
    id: 2,
    part: 'ESC 573',
    model: 'MDT-1600',
    num: 144,
    price: 16380,
    total: 2358720,
  },
  {
    id: 3,
    part: 'ESC 120',
    model: 'SHIFT',
    num: 67,
    price: 25800,
    total: 1728600,
  },
  {
    id: 4,
    part: 'ESC 786',
    model: 'PABLO',
    num: 48,
    price: 21000,
    total: 1008000,
  },
  {
    id: 5,
    part: 'ESC 008',
    model: 'PABLO',
    num: 22,
    price: 35280,
    total: 776160,
  },
];
