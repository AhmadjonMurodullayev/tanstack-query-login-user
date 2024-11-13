import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Button, Container, TextField } from "@mui/material";
import { useGetClients } from "../hook/useGetuser";
import { useCreateClients } from "../hook/usePostuser";
import UserName from "./user-name";

export const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { data } = useGetClients();
  const { mutate } = useCreateClients();

  const onSubmit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <Container maxWidth="sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: 20, marginBottom: 40 }}
      >
        <Box mb={2}>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            {...register("title")}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            {...register("description")}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Born Date"
            fullWidth
            variant="outlined"
            {...register("born")}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
      {data?.map((item) => (
        <UserName key={item.id} {...item} />
      ))}
    </Container>
  );
};
