import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUsers } from "../server/login";
import { useNavigate } from "react-router-dom";
import { saveState } from "../config/store";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isError } = useCreateUsers();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
       
        toast.success("Sign in successful!");
        navigate("/main-layout");
      },
      onError: (err) => {
        console.log(err);
      },
    });
    console.log(data);
  };

  const onError = () => {
    toast.error("Please check the form fields and try again.");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        maxWidth: 400,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{ width: "100%" }}
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Sign In
        </Button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
}
