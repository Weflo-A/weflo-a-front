export interface Product {
  id: number;
  store: string;
  name: string;
  price: number;
  rank: number;
  image: string;
  category: Category;
}

export type Category = 'all' | 'blade' | 'motor' | 'esc' | 'other';

export const productData: Product[] = [
  {
    id: 1,
    store: 'A 스토어',
    name: '4pcs / 2pairs Gemfan 51499 허리케인 블레이드 프로펠러',
    price: 135000,
    rank: 4.1,
    image: '',
    category: 'blade',
  },
  {
    id: 2,
    store: 'B 스토어',
    name: '어쩌고 블레이드 프로펠러',
    price: 135000,
    rank: 4.1,
    image: '',
    category: 'motor',
  },
  {
    id: 3,
    store: 'B 스토어',
    name: '뭐시기 블레이드 프로펠러',
    price: 135000,
    rank: 4.1,
    image: '',
    category: 'blade',
  },
  {
    id: 4,
    store: 'C 스토어',
    name: '어쩌고 블레이드 프로펠러 어쩌고',
    price: 135000,
    rank: 4.1,
    image: '',
    category: 'esc',
  },
  {
    id: 5,
    store: 'D 스토어',
    name: '뭐시기 블레이드 프로펠러 뭐시기',
    price: 135000,
    rank: 4.1,
    image: '',
    category: 'blade',
  },
];
