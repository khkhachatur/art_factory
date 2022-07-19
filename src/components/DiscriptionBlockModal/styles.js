import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subscribeSection: {
    width: "100%",
    margin: "0 auto",
    marginTop: "80px",
    border: "1px solid #000000",
    display: "grid",
    [theme.breakpoints.down(450)]: {
      gridTemplateColumns: " 1fr",
    },
    gridTemplateColumns: "1fr 1fr",
    fontFamily: "Montserrat",
  },
  subscribeImageBlock: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "180px",
      padding: "15px",
    },
    height: "300px",
    padding: "40px",
  },
  subscribeDescriptionBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: "0 30px",
  },
  subscribeTitle: {
    fontFamily: "Montserrat",
    fontStyle: "italic",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px 0",
    },
  },
  subscribeDescription: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px 0",
      fontSize: "12px",
    },
    fontSize: "20px",
    fontWeight: "400",
  },
  subscribeButton: {
    background: "#003566",
    border: "none",
    padding: "13px 45px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      padding: "8px 25px",
    },
    transition: "all 0.3s",
    "&:hover": {
      opacity: "0.9",
    },
  },

  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    background: "#ffffff",
    padding: "45px 90px",
  },
  title: {
    display: "flex",
    margin: "0",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
  inputTitle: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "Inter",
    margin: "0",
  },
  inputList: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    padding: "0",
    gap: "15px",
  },
  gender: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    padding: "15px 0",
  },
  close: {
    display: "grid",
    gridTemplateColumns: "10fr 1fr",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    width: "300px",
    height: "50px",
    borderRadius: "4px",
    border: "0.87553px solid #949494",
  },
  inputAge: {
    width: "120px",
    height: "50px",
    borderRadius: "3.5px",
    border: "0.87553px solid #949494",
  },
  btnSubsribe: {
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#FFFFFF",
    background: "#0E1934",
    borderRadius: "8px",
    border: "none",
    width: "300px",
    height: "40px",
  },
}));

export default useStyles;
