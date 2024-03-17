import React, { useState, useEffect } from "react";
import useKYC from "../../../hooks/useKYC.ts";
import { Box, Card, CardContent, Typography } from "@mui/material";

const SpaceStatus = ({ id }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { getKycStatusOfSpace } = useKYC();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKycStatusOfSpace(id);
      setLoading(false);
      setData(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!data && loading) {
    return <Typography>Loading space status...</Typography>;
  }

  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Space Status
        </Typography>

        {!data ? (
          <Typography>Not Found...</Typography>
        ) : (
          <>
            <Typography variant="body1">ID: {data.id}</Typography>
            <Typography
              variant="body1"
              color={data.status.label === "Started" ? "green" : "red"}
            >
              Status: {data.status.label}
            </Typography>
            <Typography variant="body1">
              Is Verified: {data.isVerified ? "Yes" : "No"}
            </Typography>
            {data.attributes &&
              data.attributes.map((attr, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  <Typography variant="body2">
                    {attr.label}: {attr.status.label}
                  </Typography>
                  {attr.link && (
                    <Typography variant="body2">
                      {/* Ensure links are appropriately rendered based on your API data */}
                    </Typography>
                  )}
                </Box>
              ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SpaceStatus;
