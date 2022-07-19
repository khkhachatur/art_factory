import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  artistImg: {
    borderRadius: "200px",
    width: "40%",
    height: "50%",
  },
  artistCard: (props) => ({
    width: props.width,
    height: props.height,
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.7)",
      borderRadius: "5px",
      padding: "10px 0",
    },
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  }),
  artist: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  discription: {
    color: "#000000",
    listStyleType: "none",
    display: "block",
    padding: "0",
    margin: "0",
    transition: "0.3s",
    "&:hover": {
      opacity: "0.7",
    },
  },
  name: {
    fontSize: "18px",
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
  position: {
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontWeight: "400",
  },
  country: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontWeight: "300",
  },
  artistGallery: {
    listStyleType: "none",
    display: "flex",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    gap: "16px",
  },
  artistGalleryItem: {
    width: "100%",
  },
}));

export default useStyles;
