import colors from 'src/constants/colors';
import styled from 'styled-components';

interface Props {
  num: number;
}

const DroneGroupBox: React.FC<Props> = ({ num }) => {
  return <Group>드론 그룹 {num}</Group>;
};

export { DroneGroupBox };

const Group = styled.div`
  width: 90px;
  height: 22px;
  display: inline-flex;
  padding: 2px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${colors.basic700};
  color: var(--White, #fff);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;
