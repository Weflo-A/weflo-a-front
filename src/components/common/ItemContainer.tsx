import colors from 'src/constants/colors';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  border-radius: 0.75rem;
  border: 1px solid ${colors.basic200};
  background: white;
  z-index: 1000;
`;

export default ItemContainer;
