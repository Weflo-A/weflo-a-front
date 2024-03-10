import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import Button from 'src/components/common/Button';
import Star from 'src/components/common/Star';

interface ProductCardProps {
  data: {
    id: number;
    store: string;
    name: string;
    price: number;
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
      <Image>
        <img src={data.image} />
      </Image>
      <Content>
        <Typography
          height='32px'
          fontSize='14px'
          fontWeight='bold'
          color={colors.basic700}
        >
          {data.name}
        </Typography>
        <Gap>
          <Row>
            <Star star={data.rank} />
            <Row>
              <Typography
                fontSize='14px'
                lineHeight='100%'
                color={colors.accent100}
              >
                {data.rank}
              </Typography>
              <Typography
                fontSize='11px'
                fontWeight='regular'
                lineHeight='100%'
                color={colors.basic400}
              >
                / 5
              </Typography>
            </Row>
          </Row>
          <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
            {data.price.toLocaleString()} 원
          </Typography>
        </Gap>
      </Content>
    </Card>
  );
};

export { HeightCard };

const Card = styled.div`
  width: 233px;
  height: 300px;
  border-radius: 8px;
  gap: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 40px 0px rgba(72, 99, 147, 0.2);
    transition: all 0.5s ease-out;
  }
`;

const Small = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Image = styled.div`
  width: 232px;
  height: 190px;
  border-radius: 8px;
  img {
    width: 232px;
    height: 190px;
  }
`;

const Content = styled.div`
  width: 233px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 15px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
