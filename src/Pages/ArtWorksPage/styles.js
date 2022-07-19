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
    paddingTop: "70px",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    padding: "1px",
  },
  slider: {
    maxWidth: "100%",
  },
  imgHolder: {
    border: "1px solid rgba(196, 196, 196, 0.7)",
  },
  slideShow: {
    position: "relative",
  },
  tumbnail: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "20px 50px",
  },
  action: {
    border: "2px solid #000",
    transform: "scale(1.3)",
    transition: "all 300ms",
  },
  mainImg: {
    transition: "500ms",
    padding: "10px 15px",
  },
  actions: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  actoinButtons: {
    background: "none",
    border: "none",
    color: "#ffffff",
    fontSize: "50px",
  },
  about: {
    padding: "80px 0",
    width: "800px",
    maxWidth: "100%",
  },
  listHolder: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  list: {
    listStyleType: "none",
    padding: "0",
    gap: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "300",
    margin: "0",
  },
  NameYear: {
    padding: "0",
  },
  infoList: {
    display: "flex",
    gap: "10px",
    padding: "0",
    listStyleType: "none",
  },
  item: {
    fontSize: "18px",
    fontWeight: "400",
    justifyContent: "center",
    display: "flex",
    margin: "0",
  },
  workHolder: {
    display: "grid",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: " 1fr 1fr",
      gap: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      padding: "0 40px",
      gap: "40px",
    },
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  other: {
    padding: "80px 0",
  },
  otherHolder: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  buttonHolder: {
    display: "flex",
    paddingBottom: "80px",
    justifyContent: "center",
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    maxWidth: "100%",
    background: "#ffffff",
    padding: "45px 40px",
  },
  modalSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  modalList: {
    listStyleType: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  title1: {
    margin: "0",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    height: "60px",
    border: "1px solid #949494",
    borderRadius: "4px",
  },
  btn: {
    background: "#0E1934",
    border: "none",
    color: "white",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    padding: "15px 65px",
  },
  close: {
    display: "flex",
    justifyContent: "end",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
