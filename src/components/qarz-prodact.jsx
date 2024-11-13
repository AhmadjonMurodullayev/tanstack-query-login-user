import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleUser } from "../hook/useGetSingleUser";
import { Container, Typography } from "@mui/material";
import { useGetDebt } from "../hook/useGetDebt";

export default function QarzQrodact() {
  const { id } = useParams();
  const { data } = useGetSingleUser(id);
  const { data: debData } = useGetDebt({ clientId: id });

  return (
    <>
      <Container>
        <Typography variant="h4">{data.title}</Typography>
        {debData?.map((item) => {
          return <Typography variant="h5">{item.amount}</Typography>;
        })}
      </Container>
    </>
  );
}
