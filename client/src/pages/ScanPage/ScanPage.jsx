import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export const ScanPage = () => {
  return (
    <Box sx={{
        background: "#DCDCDC",
    }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontWeight: 700,
          lineHeight: 28,
        }}
      >
        Scan Product
      </Typography>
      <Box></Box>
      <Button>Scan Your Product</Button>
    </Box>
  );
};
