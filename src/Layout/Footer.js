import React from "react";
import "../CSS/Layout.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {

  return (
    <div className="Footer">
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation showLabels>

          <BottomNavigationAction
            label="View my Github Profile"
            icon={
              <img
              src="GitHub.svg"
              alt="Github Invertocat Logo"
              style={{ width: "auto", height: 24 }}
            />
            }
            component={Link}
            to="https://github.com/devzi100"
          />

          <BottomNavigationAction
            label="Send me an Email"
            icon={<EmailIcon />}
            component={Link}
            to="mailto:contact@devendattani.com"
          />

          <BottomNavigationAction
            label="View my LinkedIn&reg; Profile"
            icon={
              <img
                src="LinkedIn.png"
                alt="LinkedIn In Logo"
                style={{ width: "auto", height: 24 }}
              />
            }
            component={Link}
            to="https://www.linkedin.com/in/devendattani/"
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default Footer;
