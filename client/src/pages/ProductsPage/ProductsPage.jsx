import { ProductParticle } from "../../components/ProductParticle/ProductParticle";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

export const ProductsPage = () => {
  return (
    <>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h4">
          Product
        </Typography>
        <Button variant="text">Sort By</Button>
      </Toolbar>
      <ProductParticle/>
      <ProductParticle/>
      <ProductParticle/>
    </>
  );
};
