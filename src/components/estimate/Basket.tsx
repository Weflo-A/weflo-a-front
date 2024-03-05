import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import BasketItem from './BasketItem';
import partsImg from 'src/assets/images/drone-parts.png';
import Button from '../common/Button';
import colors from 'src/constants/colors';

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
  gap: 0.75rem;
`;

const Basket = () => {
  // 장바구니 리스트
  const itemList = Array(3).fill({
    imgUrl: partsImg,
    name: 'X2814 900KV 3-5S Brushless Motor',
    price: 135000,
  });

  // 임시 장바구니 합계
  const totalPrice = 0;

  return (
    <BasketContainer>
      <Typography fontSize='14px'>장바구니</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <ItemList>
          {itemList.map((item, index) => (
            <BasketItem
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
            />
          ))}
        </ItemList>
        <Stack
          direction='column'
          alignItems='flex-end'
          justifyContent='center'
          gap='0.25rem'
        >
          <Stack direction='row' alignItems='center' gap='0.625rem'>
            <Typography variant='body2' color={colors.basic500}>
              총 가격
            </Typography>
            <Typography variant='h3' color={colors.accent100} fontWeight='bold'>
              {totalPrice}원
            </Typography>
          </Stack>
          <Button
            buttonType='basic'
            text='부품 구매 바로가기'
            onClick={() => alert('부품 구매 바로갑니다.')}
          />
        </Stack>
      </Stack>
    </BasketContainer>
  );
};

export default Basket;
