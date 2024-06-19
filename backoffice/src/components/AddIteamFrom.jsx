import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import addData from "../../../firebase/controllers/addData.js"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

const AddImageForm = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    imageName: "",
    category: "",
    notes: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
      imageName: file.name,
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedFormData = {
      ...formData,
      updateDate: format(new Date(), "dd/MM/yyyy HH:mm:ss", { locale: he }),
      category,
    };
    console.log("🚀 ~ handleSubmit ~ updatedFormData:", updatedFormData);
    try {
      const updata = await addData(updatedFormData, category);
      console.log("🚀 ~ handleSubmit ~ updata:", updata);
      setOpen(false);
      navigate(`/new-item/${category}`);
    } catch (error) {
      console.error("Error during submit: ", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      image: null,
      imageName: "",
      category: "",
      notes: "",
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        הוסף תמונה חדשה
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", flexGrow: 1 }}
          >
            הוספת תמונה חדשה
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-image"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="upload-image">
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    borderRadius: 1,
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {formData.image ? (
                    <>
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="uploaded"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                      <Typography sx={{ mt: 1 }} variant="body2">
                        לחץ כאן לשינוי התמונה
                      </Typography>
                    </>
                  ) : (
                    <>
                      <AddPhotoAlternateIcon sx={{ fontSize: 48 }} />
                      <Typography>
                        גרור ושחרר תמונה כאן, או לחץ לבחירה
                      </Typography>
                    </>
                  )}
                </Box>
              </label>
            </Box>

            <Box sx={{ flex: 1 }}>
              <TextField
                autoFocus
                margin="dense"
                id="imageName"
                name="imageName"
                label="שם התמונה"
                type="text"
                fullWidth
                value={formData.imageName}
                onChange={handleChange}
                required
              />
              <TextField
                margin="dense"
                id="updateDate"
                label="תאריך עדכון"
                type="text"
                fullWidth
                value={format(new Date(), "dd/MM/yyyy HH:mm:ss", {
                  locale: he,
                })}
                InputProps={{
                  readOnly: true,
                  style: { backgroundColor: "#f0f0f0" },
                }}
              />
              <TextField
                margin="dense"
                id="category"
                value={category}
                label="קטגוריה"
                type="text"
                fullWidth
                InputProps={{
                  readOnly: true,
                  style: { backgroundColor: "#f0f0f0" },
                }}
              />
              <TextField
                margin="dense"
                id="notes"
                name="notes"
                label="הערות"
                type="text"
                fullWidth
                value={formData.notes}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleSubmit}>שמור</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddImageForm;
