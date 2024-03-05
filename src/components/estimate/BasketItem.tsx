import colors from 'src/constants/colors';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import { Tooltip, Typography } from '@mui/material';

//
//
//

interface BasketItemProp extends React.HTMLAttributes<HTMLDivElement> {
  imgUrl: string;
  name: string;
  price: number;
}

//
//
//

const ItemBox = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 4rem;
  height: 4rem;
  background-image: url(${(props) => (props.imgUrl ? props.imgUrl : null)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary100};
  z-index: 1000;
`;

const RemoveButton = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: flex;
  padding: 0.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${colors.basic600};
  z-index: 1500;
`;

//
//
//

const BasketItem = ({ imgUrl, name, price }: BasketItemProp) => {
  return (
    <Tooltip
      title={
        <Typography variant='body2' fontWeight='bold' textAlign='center'>
          {name}
          <br />
          {price}원
        </Typography>
      }
      arrow
      placement='top'
    >
      <ItemBox imgUrl={imgUrl}>
        <RemoveButton>
          <ClearIcon sx={{ color: 'white', width: '1rem', height: '1rem' }} />
        </RemoveButton>
      </ItemBox>
    </Tooltip>
  );
};

export default BasketItem;
