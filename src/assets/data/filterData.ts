interface FilterDataType {
  id: string;
  label: string;
  filterName: string;
}

export const modelFilterData: FilterDataType[] = [
  {
    id: 'all',
    label: '전체',
    filterName: '드론모델',
  },
  {
    id: 'eagle',
    label: 'EAGLE',
    filterName: '드론모델',
  },
  {
    id: 'mdt-1600',
    label: 'MDT-1600',
    filterName: '드론모델',
  },
  {
    id: 'shift',
    label: 'SHIFT',
    filterName: '드론모델',
  },
  {
    id: 'vl-2240r',
    label: 'VL-2240R',
    filterName: '드론모델',
  },
];

export const yearFilterData: FilterDataType[] = [
  {
    id: 'all',
    label: '전체',
    filterName: '연식',
  },
  {
    id: '2024',
    label: '2024',
    filterName: '연식',
  },
  {
    id: '2023',
    label: '2023',
    filterName: '연식',
  },
  {
    id: '2022',
    label: '2022',
    filterName: '연식',
  },
  {
    id: '2021',
    label: '2021',
    filterName: '연식',
  },
];

export const groupFilterData: FilterDataType[] = [
  {
    id: 'all',
    label: '전체',
    filterName: '드론그룹',
  },
  {
    id: 'group1',
    label: '드론그룹 1',
    filterName: '드론그룹',
  },
  {
    id: 'group2',
    label: '드론그룹 2',
    filterName: '드론그룹',
  },
  {
    id: 'group3',
    label: '드론그룹 3',
    filterName: '드론그룹',
  },
];
