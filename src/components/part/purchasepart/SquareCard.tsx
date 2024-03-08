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

const SquareCard: React.FC<ProductCardProps> = ({ data }) => {
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
      <Store>
        <Typography variant='caption' color={colors.accent100}>
          {data.store}
        </Typography>
      </Store>
      <Image></Image>
      <Content>
        <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
          {data.name}
        </Typography>
        <Space>
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
        </Space>
      </Content>
    </Card>
  );
};

export { SquareCard };

const Card = styled.div`
  width: 329px;
  height: 316px;
  border-radius: 12px;
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
  top: 40px;
  left: 10px;
`;

const Store = styled.div`
  background-color: ${colors.accent20};
  text-align: center;
  border-radius: 12px 12px 0 0;
`;

const Image = styled.div`
  width: 329px;
  height: 187px;
  background-color: #b1b1b1;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
  text-align: left;
  gap: 5px;
  padding: 15px;
`;

const Space = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
