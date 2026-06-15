import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { footerStyles } from "./footerStyles";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box sx={footerStyles.root}>
      <Container maxWidth="lg">
        <Typography sx={footerStyles.text}>
          © {year} Sathish Kumar.
          All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;