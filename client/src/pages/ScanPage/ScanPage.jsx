import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export const ScanPage = () => {
  return (
    <Box
      sx={{
        background: "#DCDCDC",
        padding: "193px 28px 59px 28px",
        width: "360px",
        height: "764px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontWeight: 700,
          fontSize: 24,
          textAlign: "center",
        }}
      >
        Scan Product
      </Typography>
      <Box
        sx={{
          width: "304px",
          height: "264px",
          border: "1px",
          borderStyle: "dashed",
          borderColor: "#6d6d6d",
        }}
      ></Box>
      <Button
        sx={{
          width: "304px",
          height: "70px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "300px",
          fontSize: "14px",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Scan your product here and add it to your list
      </Button>
    </Box>
  );
};
