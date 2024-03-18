import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useIdContext } from "./IdContext";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { useId } from "../../Context/IdContext.tsx";
import { useCookies } from "react-cookie";

const MockLogin = () => {
  const [cookieId, setCookieId] = useCookies(["id"]);

  const [inputId, setInputId] = useState("test");
  const { setId } = useId();
  const navigate = useNavigate();

  const handleLogin = () => {
    setId(inputId);
    navigate("/dashboard");
    setCookieId("id", inputId, { path: "/" });
  };

  useEffect(() => {
    if (cookieId.id && cookieId.id !== "") {
      setId(cookieId.id);
      navigate("/dashboard");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookieId]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={"#191919"}
    >
      <Box width="40vw" bgcolor="#8fa1f3" height="40vh" borderRadius={4}>
        <Grid
          container
          direction={"column"}
          p={4}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          height="100%"
          mx={"auto"}
          gap={2}
        >
          <Typography variant="h4" color="white" fontWeight="bold">
            AuditOne Test App
          </Typography>

          <TextField
            label="Enter your ID"
            variant="filled"
            sx={{
              "& .MuiFilledInput-input": {
                backgroundColor: "white",
              },
              "& .MuiFilledInput-root": {
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                },
                "&.Mui-focused": {
                  backgroundColor: "white",
                },
              },
            }}
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            variant="contained"
            style={{ marginLeft: "8px" }}
          >
            Login
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default MockLogin;
