import { Stack, Typography } from '@mui/material';
import colors from 'src/constants/colors';
import styled from 'styled-components';
import arrowIcon from 'src/assets/icon/arrow-right.svg';

const SectionBox = styled.div`
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0.75rem;
  background: ${colors.secondary};
  padding: 0.625rem;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: -1.75rem;
`;

const LinkItem = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTab = () => {
  return (
    <SectionBox>
      <LinkItem>
        <Typography fontSize='11px' color={colors.basic300} textAlign='center'>
          자가 수리가 가능하다면?
        </Typography>
        <Typography
          variant='body2'
          fontWeight='bold'
          color='white'
          textAlign='center'
        >
          교체용 부품 구매
        </Typography>
      </LinkItem>
      <Stack direction='row'>
        <img src={arrowIcon} />
        <img src={arrowIcon} />
      </Stack>
      <LinkItem>
        <Typography fontSize='11px' color={colors.basic300} textAlign='center'>
          자가 수리가 어렵다면?
        </Typography>
        <Typography
          variant='body2'
          fontWeight='bold'
          color='white'
          textAlign='center'
        >
          수리 업체 정보
        </Typography>
      </LinkItem>
      <Stack direction='row'>
        <img src={arrowIcon} />
        <img src={arrowIcon} />
      </Stack>
      <LinkItem>
        <Typography fontSize='11px' color={colors.basic300} textAlign='center'>
          수리가 불가능하다면?
        </Typography>
        <Typography
          variant='body2'
          fontWeight='bold'
          color='white'
          textAlign='center'
        >
          폐기 전 재사용 가능 부품
        </Typography>
      </LinkItem>
    </SectionBox>
  );
};

export default SectionTab;
