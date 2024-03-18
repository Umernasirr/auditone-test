import * as React from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { useId } from "../Context/IdContext.tsx";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Layout = ({ children }) => {
  const { setId } = useId();
  const navigate = useNavigate();
  const [_, setCookieId] = useCookies(["id"]);

  const handleLogout = () => {
    setId("");
    navigate("/");
    // removing login cookie
    setCookieId("id", null, { path: "/" });
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User ID: test
          </Typography>

          <Button color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
