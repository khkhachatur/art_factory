import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    maxWidth: "1200px",
    height: "100%",
    width: "100%",
    padding: "80px 0",
  },
  artistHolder: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
  },
  titleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonHolder: {
    padding: "0 0 80px 0",
  },
}));

export default useStyles;
