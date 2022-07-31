import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Box,
} from "@mui/material";
import Content from "./components/Content";
import { SiReact } from "react-icons/si";

// const useStyles = makeStyles({
//   content: {
//     display: "flex",
//     gap: 2,
//   },
//   btn: {
//     backgroundColor: "#ff8849",
//     color: "red",
//   },
// });

function App() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#292929", padding: "15px 0" }}>
        <Container>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#59cdf4", fontSize: 20, marginRight: 2 }}>
              <SiReact />
            </Typography>
            <Typography
              sx={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: "700",
              }}
              component="p"
            >
              tour
              <Typography
                component="span"
                sx={{ color: "#c0c0c0", fontWeight: "700" }}
              >
                of
              </Typography>
              <Typography
                component="span"
                sx={{ color: "#59cdf4", fontWeight: "700" }}
              >
                heroes
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Typography
              variant="body2"
              color="GrayText"
              gutterBottom
              sx={{ fontSize: 12, letterSpacing: 1 }}
            >
              MENU
            </Typography>
            <List>
              <ListItem
                sx={{
                  backgroundColor: "#22a5e2",
                  color: "white",
                  borderRadius: 1,
                }}
              >
                Heroes
              </ListItem>
              <ListItem>Villains</ListItem>
              <ListItem>About</ListItem>
            </List>
          </Grid>
          <Grid item sm={9}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
