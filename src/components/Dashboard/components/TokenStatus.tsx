import React, { useState, useEffect } from "react";
import useKYC from "../../../hooks/useKYC.ts";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";

const TokenStatus = ({ id }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { getKycStatusOfToken } = useKYC();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKycStatusOfToken(id);
      setData(data);
      setLoading(false);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Typography>Loading token status...</Typography>;
  }
  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Token Status
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
            {data.attributes.map((attr, index) => (
              <Box key={index} sx={{ mt: 1.5 }}>
                <Typography variant="body2">
                  {attr.label}: {attr.status.label}
                </Typography>
                {attr.link && (
                  <Typography variant="body2">
                    <Link href={attr.link.url} target="_blank">
                      {attr.link.label}
                    </Link>
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

export default TokenStatus;
