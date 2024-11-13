import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateClientLoan } from "../hook/useQarzPost";
import { useGetClients } from "../hook/useGetuser";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function Qarz() {
  const { handleSubmit, reset, register } = useForm();
  const [selectedClient, setSelectedClient] = useState("");
  const { data: clients, isLoading } = useGetClients();
  const { mutate: createLoan } = useCreateClientLoan();

  const submit = (data) => {
    if (selectedClient) {
      createLoan({ ...data, clientId: selectedClient });
      reset();
    } else {
      alert("Please select a client.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add Client Loan
      </Typography>
      <form onSubmit={handleSubmit(submit)}>
        <FormControl fullWidth >
          <InputLabel>Select Client</InputLabel>
          <Select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            label="Select Client"
          >
            {isLoading ? (
              <MenuItem value="">
                <em>Loading clients...</em>
              </MenuItem>
            ) : (
              clients?.map((client) => (
                <Me
                nuItem  key={client.id} value={client.id}>
                  {client.name}
                </Me>
              ))
            )}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Beriladigan summa"
          margin="normal"
          {...register("amount", { required: true })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Loan
        </Button>
      </form>
    </Box>
  );
}
