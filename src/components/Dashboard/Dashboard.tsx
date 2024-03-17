import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Layout from "../Layout.tsx";
import MemberStatus from "./components/MemberStatus.tsx";
import TokenStatus from "./components/TokenStatus.tsx";
import CollectionStatus from "./components/CollectionStatus.tsx";
import SpaceStatus from "./components/SpaceStatus.tsx";

import { useId } from "../../Context/IdContext.tsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { id } = useId();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === "") navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MemberStatus id={id} />
          </Grid>

          <Grid item xs={12} md={6}>
            <TokenStatus id={id} />
          </Grid>

          <Grid item xs={12} md={6}>
            <CollectionStatus id={id} />
          </Grid>

          <Grid item xs={12} md={6}>
            <SpaceStatus id={id} />
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Dashboard;
