import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  IconButton,
  Box,
  makeStyles,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";

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
      <Box>
        <Typography>TOUROFHEROES</Typography>
      </Box>
      <Container>
        <Grid container>
          <Grid item lg={2}>
            <Typography variant="body2">MENU</Typography>
            <List>
              <ListItem>Heroes</ListItem>
              <ListItem>Villains</ListItem>
              <ListItem>About</ListItem>
            </List>
          </Grid>
          <Grid item lg={10}>
            <Grid container>
              <Grid item>
                <Typography>HEROES</Typography>
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
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
