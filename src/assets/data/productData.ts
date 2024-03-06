export interface Product {
  id: number;
  store: string;
  name: string;
  price: string;
  rank: number;
  image: string;
}

export const productData: Product[] = [
  {
    id: 1,
    store: 'A 스토어',
    name: '4pcs / 2pairs Gemfan 51499 허리케인 블레이드 프로펠러',
    price: '135,000원',
    rank: 4.1,
    image: '',
  },
  {
    id: 2,
    store: 'B 스토어',
    name: '어쩌고 블레이드 프로펠러',
    price: '135,000원',
    rank: 4.1,
    image: '',
  },
  {
    id: 3,
    store: 'B 스토어',
    name: '뭐시기 블레이드 프로펠러',
    price: '135,000원',
    rank: 4.1,
    image: '',
  },
  {
    id: 2,
    store: 'C 스토어',
    name: '어쩌고 블레이드 프로펠러 어쩌고',
    price: '135,000원',
    rank: 4.1,
    image: '',
  },
  {
    id: 3,
    store: 'D 스토어',
    name: '뭐시기 블레이드 프로펠러 뭐시기',
    price: '135,000원',
    rank: 4.1,
    image: '',
  },
];
