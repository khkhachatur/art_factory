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
    [theme.breakpoints.down("md")]: {
      maxWidth: "1100px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "850px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "550px",
    },
    width: "100%",
    paddingTop: "70px",
  },
  mainImage: {
    height: "calc(95vh - 70px)",
    width: "100%",
    position: "relative",
  },
  artGallery: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    },
  },
  buttonsContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "30px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },

    gap: "40px",
  },
  buttonContainer: {
    background: "#ffffff",
    padding: "20px",
  },
  button: {
    padding: "17px 20px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 10px",
    },
    outline: "none",
    background: "transparent",
    border: "1px solid #000000",
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      opacity: "0.7",
    },
  },
  primaryButton: {
    background: "#003566",
  },
  buttonPrimary: {
    border: "1px solid #ffffff",
  },
  aboutUsLink: {
    textDecoration: "none",
    fontSize: "24px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#000000",
  },
  aboutUsLinkPrimary: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "600",
  },
  event: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  },
  galleryList: {
    listStyleType: "none",
    padding: "0",
    display: "flex",
  },
  pastEvents: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "80px",
  },
  artistsBlock: {
    display: "grid",
    gap: "40px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
  buttonHolder: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
}));

export default useStyles;
