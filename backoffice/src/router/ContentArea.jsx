import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import AddIteamFrom from "../components/AddIteamFrom";

const ContentArea = () => {
  const { category } = useParams();

  const items = [
    {
      id: 1,
      name: "Item 1",
      image:
        "data:image/jpeg;base64,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",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image:
        "data:image/jpeg;base64,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",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
      updatedAt: "2023-06-18",
    },
  ];

  useEffect(() => {
    alert(`fetching data to ${category}`);
  }, [category]);

  return (
    <Box
      sx={{
        padding: "20px",
        width: "85%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          עדכון ומחיקת תמונות לקטגוריה {category}
        </Typography>
        <AddIteamFrom />
      </Box>
      <Box
        sx={{
          display: "flex",
          rowGap: "25px",
          columnGap: "10%",
          justifyContent: "space-around",
          flexWrap: "wrap",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          overflowY: "auto",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ContentArea;
