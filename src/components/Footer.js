import React from "react";
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (

    <Box sx={{  backgroundColor:'secondary.main', padding:"19px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "30px", minWidth: "200px", maxWidth: "1440px" }}>
      <Box sx={{ color: "whitesmoke" }}>
        <Typography sx={{ color: "whitesmoke" }}variant="h5">   wheather Api</Typography>
      </Box>


      <Box sx={{ color: "whitesmoke" }}>


        <Typography>&copy; 2023 My Weather App. All rights reserved.</Typography>

      </Box>
      <Box>
        <Typography sx={{ display: "flex", justifyContent: 'flex-end', color: "white" }}>Follow us</Typography>

        <Box sx={{ display: "flex", justifyContent: 'flex-end', gap: "10px", flexDirection: "row" }} >
          <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
