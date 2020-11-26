import { makeStyles } from "@material-ui/core/styles";
import { Sgreen } from "../constants";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    width: "-webkit-fill-available",
    alignItems: "center",
    backgroundColor: Sgreen,
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 5,
    justifyContent: "space-between",
    margin: theme.spacing(1, 3, 3, 3),
  },
  buttonLabel: {
    color: "limeGreen",
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonRoot: {
    backgroundColor: "#fff",
    borderRadius: 0,
    alignSelf: "center",
  },
  rootDiv: {
    height: "95vh",
    justifyContent: "center",
    display: "flex",
  },
  DialogTitle: {
    margin: theme.spacing(0, 5, 0, 0),
    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
    fontWeight: "bold",
  },
  veggieMark: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    margin: theme.spacing(1, 1, 0, 0),
  },
  dialogRoot: {
    borderRadius: 0,
    height: "95%",
  },
  headBox: {
    textOverflow: "ellipsis",
  },
  xMark: {
    color: "grey",
    marginRight: theme.spacing(2),
    fontSize: theme.spacing(4),
  },
  topPrice: {
    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
  },
  priceBox: {},
  imgGrid: {
    textAlign: "right",
  },
  titleGrid: {
    paddingBottom: theme.spacing(1),
    borderBottom: "dotted",
  },
  choiceHead: {
    fontWeight: "bold",
    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
  },
  variantText: {},
  choiceBox: {
    margin: theme.spacing(3, 0, 2, 3),
  },
  variantGrid1: {
    display: "flex",
  },
  variantBox1: {
    margin: theme.spacing(1),
    textAlignLast: "right",
  },
  variantBox2: {
    margin: theme.spacing(0.5),
    alignItems: "center",
  },
  unavailableVariant: {
    textAlign: "right",
  },
  variantContainer: {
    // margin: theme.spacing(1),
  },
  radioBtn: {
    width: theme.spacing(1),
    height: theme.spacing(1),
  },
  veggieMarkV: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    margin: theme.spacing(0),
  },
  fcl: {
    "& .MuiFormControlLabel-label": {
      fontWeight: "bold",
    },
  },
  footerBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1, 3, 0, 3),
  },
  spanStyle: {
    color: "grey",
    textAlign: "right",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 11,
    fontWeight: "800",
    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
  },
  expandPaper: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1, 3, 0, 3),
  },
  sauceLimitPaper: {
    display: "flex",
    justifyContent: "space-between",
    // margin: theme.spacing(1, 3, 0, 3),
    backgroundColor: "#fa4a5b",
    color: "#fff",
    padding: "0 30px",
  },
  activeClass: {
    borderBotton: "1px",
    margin: theme.spacing(0, 2, 0, 2),
  },
  linkBox: {
    display: "-webkit-box",
    flexFlow: "wrap",
  },
}));
