import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemCard = ({ item }) => {
  const handleDelete = () => {
    // TODO: Implement delete functionality
    console.log(`Deleting item with id ${item.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "25%",
        height: "380px",
        margin: "10px",
      }}
    >
      <Card sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            קטגוריה: {item.category}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            תאריך עדכון: {item.updatedAt}
          </Typography>
          <Button
            startIcon={<DeleteIcon />}
            color="error"
            onClick={handleDelete}
          >
            מחיקה
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemCard;