import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    width: props.width,
    height: props.height,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "570px",
      height: "370px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "350px",
      height: "170px",
    },
    margin: "0 auto",
    position: "relative",
  }),
  descriptionContainer: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "355px",
    height: "fit-content",
    background: "#ffffff",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "170px",
      padding: "3px 6px",
    },
    alignItems: "center",
    padding: "6px 12px",
  },
  dateBlock: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    width: "100%",
  },
  date: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    fontSize: "18px",
    fontWeight: "400",
    margin: "0",
  },
  place: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    fontSize: "12px",
    fontWeight: "400",
  },
  nameBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
    width: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      margin: "3px",
    },
    fontSize: "18px",
    fontWeight: "400",
  },
  arrowIcon: {
    [theme.breakpoints.down("xs")]: {
      width: "14px",
      height: "14px",
    },
    width: "24px",
    height: "24px",
    border: "none",
    cursor: "pointer",
  },
}));

export default useStyles;
