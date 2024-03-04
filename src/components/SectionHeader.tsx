import { Stack, StackProps, Typography } from '@mui/material';

interface SectionHeaderProp extends StackProps {
  title: string;
  children?: React.ReactElement;
}

const SectionHeader = ({
  title,
  children,
  ...stackProps
}: SectionHeaderProp) => {
  return (
    <Stack
      direction='row'
      gap='1.25rem'
      alignItems='center'
      marginBottom='1rem'
      {...stackProps}
    >
      <Typography variant='h3' fontWeight='bold'>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default SectionHeader;
