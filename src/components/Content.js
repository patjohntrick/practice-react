import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import {
  Typography,
  Grid,
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Content = () => {
  return (
    <Box>
      <Grid container sx={{ alignItems: "center", marginBottom: 2 }}>
        <Grid item>
          <Typography
            variant="h5"
            sx={{
              borderLeft: "15px solid #22a5e2",
              borderBottom: "2px solid #22a5e2",
              padding: "2px 10px",
              fontWeight: "bold",
              color: "#434343",
            }}
          >
            HEROES
          </Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <AddIcon variant="secondary" fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <CachedIcon variant="secondary" fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>

      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#f9f9f9",
          marginBottom: 3,
          borderRadius: 0,
          paddingTop: 1,
          boxShadow: "1px 1px 1px rgba(0, 0, 0, .1)",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: "#1b1b1b" }}>
            John Patrick Resurreccion
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: "#8e8e8e" }}
            color="text.secondary"
          >
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            backgroundColor: "white",
            borderTop: "1px solid #cccccc",
          }}
        >
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
              "&:not(:first-of-type)": {
                marginLeft: 0,
                borderLeft: "1px solid #cccccc",
              },
            }}
            startIcon={<BorderColorIcon />}
          >
            Edit
          </Button>
        </CardActions>
      </Card>

      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#f9f9f9",
          marginBottom: 3,
          borderRadius: 0,
          paddingTop: 1,
          boxShadow: "1px 1px 1px rgba(0, 0, 0, .1)",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: "#1b1b1b" }}>
            John Patrick Resurreccion
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: "#8e8e8e" }}
            color="text.secondary"
          >
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            backgroundColor: "white",
            borderTop: "1px solid #cccccc",
          }}
        >
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
              "&:not(:first-of-type)": {
                marginLeft: 0,
                borderLeft: "1px solid #cccccc",
              },
            }}
            startIcon={<BorderColorIcon />}
          >
            Edit
          </Button>
        </CardActions>
      </Card>

      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#f9f9f9",
          marginBottom: 3,
          borderRadius: 0,
          paddingTop: 1,
          boxShadow: "1px 1px 1px rgba(0, 0, 0, .1)",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: "#1b1b1b" }}>
            John Patrick Resurreccion
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: "#8e8e8e" }}
            color="text.secondary"
          >
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
            backgroundColor: "white",
            borderTop: "1px solid #cccccc",
          }}
        >
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            sx={{
              width: "100%",
              marginLeft: 0,
              borderRadius: 0,
              color: "rgba(0, 0, 0, .6)",
              textTransform: "capitalize",
              "&:not(:first-of-type)": {
                marginLeft: 0,
                borderLeft: "1px solid #cccccc",
              },
            }}
            startIcon={<BorderColorIcon />}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Content;
