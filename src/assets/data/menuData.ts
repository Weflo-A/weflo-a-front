interface Drone {
  id: number;
  name: string;
}

interface Group {
  name: string;
  drones: Drone[];
}

export const groups: Group[] = [
  {
    name: '드론 그룹 1',
    drones: [
      { id: 1, name: 'Drone No.1' },
      { id: 2, name: 'Drone No.2' },
      { id: 3, name: 'Drone No.3' },
    ],
  },
  {
    name: '드론 그룹 2',
    drones: [
      { id: 4, name: 'Drone No.4' },
      { id: 5, name: 'Drone No.5' },
    ],
  },
];
