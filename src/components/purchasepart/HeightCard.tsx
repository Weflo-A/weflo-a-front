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

const HeightCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Card>
      <Small>
        <Button
          text={<>무료배송</>}
          buttonType='primaryLight'
          style={{ width: '66px', height: '22px' }}
        />
        <Button
          text={<>BEST</>}
          buttonType='primaryLight'
          style={{ width: '66px', height: '22px' }}
        />
      </Small>
      <Image></Image>
      <Content>
        <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
          {data.name}
        </Typography>
        <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
          {data.price}
        </Typography>
      </Content>
    </Card>
  );
};

export { HeightCard };

const Card = styled.div`
  width: 232px;
  height: 190px;
  border-radius: 8px;
  gap: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Small = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Image = styled.div`
  width: 329px;
  height: 187px;
  background-color: antiquewhite;
  border-radius: 8px;
`;

const Content = styled.div`
  width: 283px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 15px;
`;
