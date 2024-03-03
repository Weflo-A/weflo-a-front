import { Stack, Typography } from '@mui/material';

interface SectionHeaderProp {
  title: string;
  children?: React.ReactElement;
}

const SectionHeader = ({ title, children }: SectionHeaderProp) => {
  return (
    <Stack
      direction='row'
      gap='1.25rem'
      alignItems='center'
      marginBottom='1rem'
    >
      <Typography variant='h3' fontWeight='bold'>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default SectionHeader;
