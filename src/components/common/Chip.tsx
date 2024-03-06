import colors from 'src/constants/colors';
import styled from 'styled-components';

interface ChipProp extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: string;
  background?: string;
}

const ChipBox = styled.div`
  display: flex;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const Chip = ({
  text,
  color = colors.primary100,
  background = colors.primaryOpacity20,
  ...props
}: ChipProp) => {
  return (
    <ChipBox style={{ color: color, background: background, ...props.style }}>
      {text}
    </ChipBox>
  );
};

export default Chip;
