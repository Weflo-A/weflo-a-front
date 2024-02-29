import { Button, useTheme } from "@mui/material";

const Test = () => {
  const theme = useTheme();

  return (
    <h1>
      this is test!
      <Button color="primary" variant="contained">
        test
      </Button>
      <button
        style={{
          background: theme.palette.warning.light,
        }}
      >
        경고
      </button>
    </h1>
  );
};

export default Test;
