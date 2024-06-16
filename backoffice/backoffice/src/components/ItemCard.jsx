import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCard = ({ item }) => {
  const handleDelete = () => {
    // TODO: Implement delete functionality
    console.log(`Deleting item with id ${item.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            קטגוריה: {item.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
    </Grid>
  );
};

export default ItemCard;