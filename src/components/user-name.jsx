import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import { useDelete } from "../hook/userDelete";
import { useEdit } from "../hook/userEdit";

export default function UserName({ id, title, description, born }) {
  const { mutate: deleteClient } = useDelete();
  const { mutate: editClient } = useEdit();

  const handleDelete = () => {
    deleteClient(id, {
      onSuccess: () => {
        console.log("Client deleted successfully.");
      },
    });
  };

  const handleEdit = () => {
    const newTitle = prompt("Enter new title", title);
    const newDesc = prompt("Enter new description", description);
    const newBorn = prompt("Enter new born date", born);

    if (newTitle && newDesc && newBorn) {
      editClient({
        id,
        data: { title: newTitle, description: newDesc, born: newBorn },
      });
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: 3,
        borderRadius: 2,
        mt: 2,
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Familiya: {description}
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Berilgan so'mma: {born}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          size="small"
        >
          DELETE
        </Button>
        <Button
          onClick={handleEdit}
          variant="contained"
          color="secondary"
          size="small"
        >
          EDIT
        </Button>
      </Stack>
    </Box>
  );
}
