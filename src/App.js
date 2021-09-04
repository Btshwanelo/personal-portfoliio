import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Container, Grid } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,51,77,1) 6%, rgba(54,103,194,1) 56%, rgba(6,75,164,1) 98%, rgba(0,99,255,1) 100%);`,
    height: "300px",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "10erm",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3rem"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    display: "flex",
    paddingBottom: theme.spacing(4),
    justifyContent: "left",
    justifyItems: "left"
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Portfiolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
      <Typography variant="h4" className={classes.blogTitle}>
          Bucibo Tshwanelo Portfolio
        </Typography>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.button}>
                <Button size="large" variant="contained" color="secondary">
                  View live
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={1} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
