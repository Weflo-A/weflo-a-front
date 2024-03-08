import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import { Bigger, InfoCircle } from 'src/assets';
import Button from 'src/components/common/Button';
import Star from 'src/components/common/Star';

type Category = 'ALL' | 'BLADE' | 'MOTOR' | 'ESC' | 'OTHER';

interface ProductCardProps {
  data: {
    id: number;
    store: string;
    name: string;
    price: number;
    rank: number;
    point: number;
    image: string;
    part: string;
    type: Category;
  };
}

const WidthCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Card>
      <Top>
        <Image></Image>
        <Content>
          <Small>
            <Typography variant='caption' color={colors.basic500}>
              {data.store}
            </Typography>
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
          <Typography variant='body1' fontWeight='bold' color={colors.basic700}>
            {data.name}
          </Typography>
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
          <Left>
            <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
              {data.price.toLocaleString()} 원
            </Typography>
          </Left>
        </Content>
      </Top>
      <Bottom>
        <Factor>
          <Row>
            <InfoCircle />
            <Typography variant='caption' color={colors.basic500}>
              구매가 필요한 요인
            </Typography>
          </Row>
          <Button
            text={
              <>
                {data.part} - {data.type} {data.point}점
              </>
            }
            buttonType='accentLight'
            style={{ width: '150px', height: '22px' }}
          />
        </Factor>
        <Button
          text={
            <>
              부품 구매 바로가기 <Bigger />
            </>
          }
          buttonType='accentLight'
          onClick={() => alert('부품구매')}
          style={{ width: '160px', height: '32px' }}
        />
      </Bottom>
    </Card>
  );
};

export { WidthCard };

const Card = styled.div`
  width: 550px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  padding: 15px;
  gap: 10px;
  background: white;
  box-shadow: 0px 4px 16px 0px rgba(66, 82, 110, 0.1);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Image = styled.div`
  width: 122px;
  height: 122px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Small = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  gap: 10px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const Factor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 348px;
  height: 40px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  white-space: nowrap;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Left = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 15px;
`;
