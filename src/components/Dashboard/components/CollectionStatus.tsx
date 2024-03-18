import React, { useState, useEffect } from "react";
import useKYC from "../../../hooks/useKYC.ts";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";

const CollectionStatus = ({ id }) => {
  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const { getKycStatusOfCollection } = useKYC();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKycStatusOfCollection(id);
      setData(data);
      setLoading(false);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Typography>Loading collection status...</Typography>;
  }
  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Collection Status
        </Typography>

        {!data ? (
          <Typography color="gray">Not Found...</Typography>
        ) : (
          <>
            <Typography variant="body1">ID: {data.id}</Typography>
            <Typography
              variant="body1"
              color={data.status.label === "Not Started" ? "red" : "green"}
            >
              Status: {data.status.label}
            </Typography>
            <Typography variant="body1">
              Is Verified: {data.isVerified ? "Yes" : "No"}
            </Typography>
            {data.attributes.map((attr, index) => (
              <Box key={index} sx={{ mt: 1 }}>
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

export default CollectionStatus;
