import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import Button from '../common/Button';

interface ProductCardProps {
  data: {
    id: number;
    store: string;
    name: string;
    price: string;
    rank: number;
    image: string;
  };
}

const SquareCard: React.FC<ProductCardProps> = ({ data }) => {
  return <div>카드</div>;
};

export { SquareCard };
