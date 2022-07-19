import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subscribeSection: {
    width: "100%",
    margin: "0 auto",
    marginTop: "80px",
    border: "1px solid #000000",
    display: "grid",
    [theme.breakpoints.down(450)]: {
      gridTemplateColumns: "1fr",
    },
    gridTemplateColumns: "1fr 1fr",
  },
  subscribeImageBlock: {
    width: "100%",
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
    [theme.breakpoints.down(450)]: {
      height: "200px",
    },
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
    [theme.breakpoints.down("md")]: {
      margin: " 12px 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "6px 0",
      fontSize: "16px",
    },
    fontSize: "24px",
    fontWeight: "500",
  },
  subscribeDescription: {
    fontFamily: "Montserrat",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "8px 0",
      fontSize: "12px",
    },
    fontWeight: "400",
  },
  subscribeButton: {
    background: "#003566",
    border: "none",
    padding: "13px 45px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "10px 25px",
    },
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      opacity: "0.9",
    },
  },
  title: {
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
    gap: "9px",
  },
  gender: {
    display: "flex",
    gridTemplateColumns: "1fr 1fr",
    listStyleType: "none",
    padding: "0",
    gap: "9px",
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
