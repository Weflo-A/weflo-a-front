import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import BasketItem from './BasketItem';
import partsImg from 'src/assets/images/drone-parts.png';
import Button from '../common/Button';
import colors from 'src/constants/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { NewParts } from 'src/pages/EstimatePage';

export interface BasketData {
  totalScore: number;
  checkedComponentList: NewParts[];
}
interface BasketProps {
  items?: BasketData;
}

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

const Basket = ({ items }: BasketProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  // 임시 장바구니 합계

  return (
    <BasketContainer>
      <Typography fontSize='14px'>장바구니</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <ItemList>
          {items?.checkedComponentList?.map((item, index) => (
            <BasketItem
              key={index}
              imgUrl={partsImg}
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
              {items?.totalScore}원
            </Typography>
          </Stack>
          <Button
            buttonType='basic'
            text='부품 구매 바로가기'
            onClick={() =>
              navigate(`/drone-group/drone/parts/cost`, {
                state: location.state,
              })
            }
          />
        </Stack>
      </Stack>
    </BasketContainer>
  );
};

export default Basket;
