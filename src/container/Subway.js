import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Radio,
  Typography,
} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import React, { useRef, useState } from "react";
import useStyles from "./styles";
import veggieMark from "../veggieMark.png";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import FlatList from "flatlist-react";
import {
  breadVariants,
  firstVariants,
  sauceVariants,
  vegetableVariants,
  secondVariants,
  preparationVariants,
} from "./choices";
import { Sgreen } from "../constants";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addOption, finalList, removeOption } from "../actions/options";
import { Link, animateScroll as scroll, Element } from "react-scroll";
import "../App.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const options = {
  title: "Regular 6 Inch Sub-Free savoury danish Veg Combo (15 cm, 6 Inch)",
  price: "372",
};

const choiceTitles = [
  "First 6 Inch Sub",
  "Second 6 Inch Sub",
  "Bread",
  "Preparation",
  "Sauce Any (3)",
  "Vegetables",
];
const choiceLinks = [
  { id: "firstV", name: "First 6 Inch Sub" },
  { id: "secondV", name: "Second 6 Inch Sub" },
  { id: "breadV", name: "Bread" },
  { id: "prepV", name: "Preparation" },
  { id: "sauceV", name: "Sauce Any (3)" },
  { id: "vegeV", name: "Vegetables" },
];

const GreenRadio = withStyles({
  root: {
    background: "transparent",
    width: "1em",
    color: "grey",
    "&$checked": {
      color: Sgreen,
    },
  },
  checked: {},
})((props) => (
  <Radio
    disableRipple={true}
    disableTouchRipple={true}
    disableFocusRipple={true}
    size="small"
    color="default"
    {...props}
  />
));

const GreenCheckbox = withStyles({
  root: {
    width: "1em",
    color: "grey",
    "&$checked": {
      color: Sgreen,
    },
  },
  checked: {},
})((props) => (
  <Checkbox
    disableRipple={true}
    disableTouchRipple={true}
    disableFocusRipple={true}
    size="small"
    color="default"
    {...props}
  />
));

const Subway = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [PaperElev, setPaperElev] = useState(0);
  const chosenOptions = useSelector((state) => state);
  // console.log(chosenOptions, "chosenOptions");
  const finalOptions = useSelector((state) => state.finalList);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePaperElevOn = () => {
    setPaperElev(5);
  };
  const handlePaperElevOff = () => {
    setPaperElev(0);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [firstV, setFirstV] = useState(firstVariants);
  const [secondV, setSecondV] = useState(secondVariants);
  const [breadV, setBreadV] = useState(breadVariants);
  const [prepV, setPrepV] = useState(preparationVariants);
  const [sauceV, setSauceV] = useState(sauceVariants);
  const [vegeV, setVegeV] = useState(vegetableVariants);

  const [firstVC, setFirstVC] = useState("First 6 Inch Sub_Chatpata Chana");
  const [secondVC, setSecondVC] = useState("Second 6 Inch Sub_Chatpata Chana");
  const [breadVC, setBreadVC] = useState("Bread_Multigrain");
  const [prepVC, setPrepVC] = useState("Preparation_Plain Bread");

  var optionsArray = [firstVC, secondVC, breadVC, prepVC];
  var concatedArray = optionsArray.concat(chosenOptions.options);
  var finalArray = concatedArray.map((item) => item.split("_").pop());

  const sendFinalList = () => {
    dispatch(finalList(concatedArray));
    console.log("All your Choice here: ", concatedArray);
  };

  const [choiceExpansion, setChoiceExpansion] = useState(false);
  const handleExpandYes = () => {
    setChoiceExpansion(true);
  };
  const handleExpandNo = () => {
    setChoiceExpansion(false);
  };

  const [firstMOv, setFirstMOv] = useState(null);
  const handleFirstMOv = (id) => {
    setFirstMOv(id);
  };
  const handleFirstMot = () => {
    setFirstMOv(null);
  };

  const firstVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        justifyContent="space-between"
        style={{ cursor: "pointer" }}
        onClick={() => (variant.stock ? handleFirstRadio(variant.id) : null)}
        onMouseEnter={() => handleFirstMOv(variant.id)}
        onMouseLeave={handleFirstMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenRadio checked={firstVC === variant.id} value={variant.id} />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: firstMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handleFirstRadio = (id) => {
    setFirstVC(id);
    // dispatch(addOption(id));
  };

  const [secondMOv, setSecondMOv] = useState(null);
  const handleSecondMOv = (id) => {
    setSecondMOv(id);
  };
  const handleSecondMot = () => {
    setSecondMOv(null);
  };

  const secondVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        justifyContent="space-between"
        style={{ cursor: "pointer" }}
        onClick={() => (variant.stock ? handleSecondRadio(variant.id) : null)}
        onMouseEnter={() => handleSecondMOv(variant.id)}
        onMouseLeave={handleSecondMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenRadio checked={secondVC === variant.id} value={variant.id} />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: secondMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handleSecondRadio = (id) => {
    setSecondVC(id);
    // dispatch(addOption(id));
  };

  const [breadMOv, setBreadMOv] = useState(null);
  const handleBreadMOv = (id) => {
    setBreadMOv(id);
  };
  const handleBreadMot = () => {
    setBreadMOv(null);
  };

  const breadVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        justifyContent="space-between"
        style={{ cursor: "pointer" }}
        onClick={() => (variant.stock ? handleBreadRadio(variant.id) : null)}
        onMouseEnter={() => handleBreadMOv(variant.id)}
        onMouseLeave={handleBreadMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenRadio checked={breadVC === variant.id} value={variant.id} />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: breadMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handleBreadRadio = (id) => {
    setBreadVC(id);
    // dispatch(addOption(id));
  };

  const [prepMOv, setPrepMOv] = useState(null);
  const handlePrepMOv = (id) => {
    setPrepMOv(id);
  };
  const handlePrepMot = () => {
    setPrepMOv(null);
  };
  const prepVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        justifyContent="space-between"
        style={{ cursor: "pointer" }}
        onClick={() => (variant.stock ? handlePrepRadio(variant.id) : null)}
        onMouseEnter={() => handlePrepMOv(variant.id)}
        onMouseLeave={handlePrepMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenRadio checked={prepVC === variant.id} value={variant.id} />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: prepMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handlePrepRadio = (id) => {
    setPrepVC(id);
    // dispatch(addOption(id));
  };

  const [sauceMOv, setSauceMOv] = useState(null);
  const handleSauceMOv = (id) => {
    setSauceMOv(id);
  };
  const handleSauceMot = () => {
    setSauceMOv(null);
  };

  const [sauceLimit, setSauceLimit] = useState(false);
  const handleSauceLimit = () => {
    setSauceLimit(true);
    setTimeout(() => {
      setSauceLimit(false);
    }, 1000);
  };

  const sauceVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        style={{ cursor: "pointer" }}
        justifyContent="space-between"
        onClick={() =>
          variant.stock ? handleSauceRadio(variant.id, variant.checked) : null
        }
        onMouseEnter={() => handleSauceMOv(variant.id)}
        onMouseLeave={handleSauceMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenCheckbox
            disabled={variant.stock ? false : true}
            checked={variant.checked}
            value={variant.checked}
          />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: sauceMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handleSauceRadio = (id, val) => {
    const updated1 = sauceV.map((item) =>
      item.id == id ? { ...item, checked: !val } : item
    );

    if (updated1.filter((obj) => obj.checked === true).length <= 3) {
      setSauceV(updated1);
      if (val == false) {
        dispatch(addOption(id));
      } else {
        dispatch(removeOption(id));
      }
    } else {
      handleSauceLimit();
    }
  };

  const [vegeMOv, setVegeMOv] = useState(null);
  const handleVegeMOv = (id) => {
    setVegeMOv(id);
  };
  const handleVegeMot = () => {
    setVegeMOv(null);
  };

  const vegeVars = (variant) => {
    return (
      <Box
        key={variant.id}
        display="flex"
        className={classes.variantBox2}
        alignItems="left"
        justifyContent="space-between"
        style={{ cursor: "pointer" }}
        onClick={() =>
          variant.stock ? handleVegeRadio(variant.id, variant.checked) : null
        }
        onMouseEnter={() => handleVegeMOv(variant.id)}
        onMouseLeave={handleVegeMot}
      >
        <Box>
          <img className={classes.veggieMarkV} src={veggieMark} />
          <GreenCheckbox checked={variant.checked} value={variant.checked} />
          <span
            style={{
              fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
              color: !variant.stock && "grey",
              fontWeight: vegeMOv == variant.id ? "bold" : null,
            }}
          >
            {variant.title}
          </span>
        </Box>
        {!variant.stock && (
          <Box>
            <span className={classes.spanStyle}>Unavailable</span>
          </Box>
        )}
      </Box>
    );
  };
  const handleVegeRadio = (id, val) => {
    const updated2 = vegeV.map((item) =>
      item.id == id ? { ...item, checked: !val } : item
    );
    setVegeV(updated2);
    if (val == false) {
      dispatch(addOption(id));
    } else {
      dispatch(removeOption(id));
    }
  };

  const myRef = useRef(null);
  const goTo = () => {
    console.log(myRef.current);
  };

  return (
    <div className={classes.rootDiv}>
      <Button
        onClick={handleClickOpen}
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
        variant="contained"
      >
        Add +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className={classes.dialogRoot}
        TransitionComponent={Transition}
      >
        <Grid
          container
          style={{
            flexDirection: "row",
            display: "flex",
            padding: "15px 0px 15px 15px",
          }}
        >
          <Grid item className={classes.imgGrid} lg={1} sm={1} md={1} xs={1}>
            <img className={classes.veggieMark} src={veggieMark} />
          </Grid>
          <Grid
            className={classes.titleGrid}
            item
            lg={11}
            sm={11}
            md={11}
            xs={11}
          >
            <Box display="flex" className={classes.headBox} alignItems="center">
              <Typography noWrap className={classes.DialogTitle}>
                Customise "{options.title}"
              </Typography>

              <CloseSharpIcon
                className={classes.xMark}
                onClick={handleClose}
                fontSize="large"
              />
            </Box>
            <Box
              display="flex"
              className={classes.priceBox}
              alignItems="center"
            >
              <Typography
                noWrap
                color="textSecondary"
                className={classes.topPrice}
              >
                &#8377;{options.price}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            flexDirection: "row",
            display: "flex",
            padding: 15,
          }}
        >
          <Grid item className={classes.imgGrid} lg={1} sm={1} md={1} xs={1}>
            {/* <img className={classes.veggieMark} src={veggieMark} /> */}
          </Grid>
          <Grid
            className={classes.linkGrid}
            item
            lg={11}
            sm={11}
            md={11}
            xs={11}
          >
            <Box className={classes.linkBox} alignItems="center">
              {choiceLinks.map((item) => (
                <li className="liList">
                  <Link
                    activeClass="active"
                    className="inactive"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    containerId={"dialogContent"}
                  >
                    Choice of {item.name}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>
        </Grid>
        <DialogContent
          id="dialogContent"
          style={{ paddingTop: 5 }}
          dividers={true}
        >
          <Element name="firstV">
            <Box
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[0]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[0]}
              </Typography>
            </Box>
            <FlatList list={firstV} renderItem={firstVars} />
          </Element>
          <Element name="secondV">
            <Box
              id="secondV"
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[1]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[1]}
              </Typography>
            </Box>
            <FlatList list={secondV} renderItem={secondVars} />
          </Element>
          <Element name="breadV">
            <Box
              id="breadV"
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[2]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[2]}
              </Typography>
            </Box>
            <FlatList list={breadV} renderItem={breadVars} />
          </Element>
          <Element name="prepV">
            <Box
              id="prepV"
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[3]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[3]}
              </Typography>
            </Box>
            <FlatList list={prepV} renderItem={prepVars} />
          </Element>
          <Element name="sauceV">
            <Box
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[4]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[4]}
              </Typography>
              <Typography color="textSecondary" variant="caption">
                &nbsp;{"(Optional)"}
              </Typography>
            </Box>
            <FlatList list={sauceV} renderItem={sauceVars} />
          </Element>
          <Element name="vegeV">
            <Box
              display="flex"
              className={classes.choiceBox}
              alignItems="center"
            >
              <Typography
                key={choiceTitles[5]}
                variant="h6"
                className={classes.choiceHead}
              >
                Choice of {choiceTitles[5]}
              </Typography>
              <Typography color="textSecondary" variant="caption">
                &nbsp;{"(Optional)"}
              </Typography>
            </Box>
            <FlatList list={vegeV} renderItem={vegeVars} />
          </Element>
        </DialogContent>
        <DialogActions className={classes.sauceLimitPaper}>
          <Collapse in={sauceLimit}>
            <Paper elevation={0} className={classes.sauceLimitPaper}>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                  margin: "15px 0px 15px 0px",
                }}
                variant="body2"
              >
                You can select a maximum of 3 Choice of Sauce Any (3).
              </Typography>
            </Paper>
          </Collapse>
        </DialogActions>
        <DialogActions>
          <Grid style={{ flexDirection: "column" }} container>
            <Collapse in={choiceExpansion}>
              <Paper elevation={0} className={classes.expandPaper}>
                <Typography
                  className={classes.finalArray}
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                  }}
                  variant="body2"
                >
                  {finalArray.join(", ")}
                </Typography>
                <Typography
                  onClick={handleExpandNo}
                  style={{
                    fontSize: 12,
                    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                    cursor: "pointer",
                  }}
                  variant="body2"
                >
                  Hide
                </Typography>
              </Paper>
            </Collapse>
            <Collapse in={!choiceExpansion}>
              <Box className={classes.footerBox}>
                <Typography
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                  }}
                  variant="body2"
                >
                  {firstVC.split("_").pop()}, {secondVC.split("_").pop()}
                </Typography>
                <Typography
                  onClick={handleExpandYes}
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                    cursor: "pointer",
                  }}
                  variant="body2"
                >
                  +{finalArray.length - 2} Add On
                </Typography>
              </Box>
            </Collapse>
            <Paper
              elevation={PaperElev}
              onMouseEnter={handlePaperElevOn}
              onMouseLeave={handlePaperElevOff}
              onClick={sendFinalList}
              className={classes.paper}
              style={{ cursor: "pointer" }}
            >
              <Typography
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                }}
                variant="subtitle1"
              >
                Total &#8377;{options.price}
              </Typography>
              <Typography
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
                }}
                variant="subtitle1"
              >
                ADD ITEM
              </Typography>
            </Paper>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Subway;
