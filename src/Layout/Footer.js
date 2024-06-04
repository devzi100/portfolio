import React, { useEffect, useState } from "react";
import "../CSS/Layout.css";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const [gitHub, setGitHub] = useState("Browse My Github Profile");
  const [email, setEmail] = useState("Send Me An Email");
  const [linkedIn, setLinkedIn] = useState("View My LinkedIn® Profile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 482) {
        setGitHub("Github");
        setEmail("Email");
        setLinkedIn("LinkedIn");
      } else {
        setGitHub("Browse My Github Profile");
        setEmail("Send me an Email");
        setLinkedIn("Visit My LinkedIn® Profile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="Footer">
          <BottomNavigation className="FooterBar" showLabels sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: 3 }}>
          <BottomNavigationAction
            label={gitHub}
            icon={
              <img
              src="assets/GitHub.svg"
              alt="Github Invertocat Logo"
              style={{ width: "auto", height: 24 }}
            />
            }
            component={Link}
            to="https://github.com/devzi100"
          />

          <BottomNavigationAction
            label={email}
            icon={<EmailIcon />}
            component={Link}
            to="mailto:contact@devendattani.com"
          />

          <BottomNavigationAction
            label={linkedIn}
            icon={
              <img
                src="assets/LinkedIn.png"
                alt="LinkedIn In Logo"
                style={{ width: "auto", height: 24 }}
              />
            }
            component={Link}
            to="https://www.linkedin.com/in/devendattani/"
          />
        </BottomNavigation>

    </div>
  );
}

export default Footer;
