/*
General rules
1. camelCase instead of kebab-case for style properties
2. make use of JavaScript constants and functions to organize and calculate our baseStyles
3. style property values in StyleSheets need to be strings or numbers (but you can still use js constants and/or functions to declare them)
4. instead of pixels, React Native uses “units” that get converted into pixels
5. no shortcuts for padding or margin, (i.e. need to explicitly set paddingTop and paddingRight). – Note that you can use paddingVertical/paddingHorizontal
6. no media queries, instead just use Flexbox
 */
import { colors } from "../config/colors";
import _ from 'lodash';

export const baseColors = {
    red: colors.red
};

export const theme = {
  font: "Avenir",
  color: "#45CAB5",
  backgroundColor: colors.primary
};

export const baseStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 25
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10
  },
  buttonText: {
    color: "pink",
    fontFamily: theme.font,
    textAlign: "center"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  }
};

export const searchBarStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: theme.color,
    paddingBottom: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10,
    marginLeft: 5
  },
  buttonText: {
    color: "white",
    fontFamily: theme.font,
    textAlign: "center"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  },
  textInput: {
    flex: 1
  }
};

export const textInputStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    borderBottomWidth: 2,
    borderColor: theme.color
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontFamily: theme.font,
    textAlign: "center"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  },
  textInput: {
    paddingVertical: 5
  }
};

export const passwordInputStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    borderBottomWidth: 2,
    borderColor: theme.color
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontFamily: theme.font,
    textAlign: "center"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  },
  textInput: {
    paddingVertical: 5
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0
  }
};

export const consentItemStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: colors.primary
  },
  checkbox: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontFamily: theme.font,
    textAlign: "center"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 20,
    fontWeight: "900",
    color: "white"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: "white"
  },
  textInput: {
    paddingVertical: 10
  },
  text: {
    fontFamily: theme.font,
    textAlign: "auto",
    color: "white"
  },
  color: {}
};

export const insightItemStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    height: 220
  },
  subContainer: {
    flex: 6,
    marginHorizontal: 10,
    justifyContent: "space-evenly"
  },
  image: {
    flex: 4,
    width: null,
    height: null,
    resizeMode: "contain",
    marginHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.color,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontFamily: theme.font,
    textAlign: "center"
  },
  date: {
    fontFamily: theme.font,
    fontSize: 12,
    color: "white"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  description: {
    fontFamily: theme.font,
    textAlign: "auto",
    color: "white"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  }
};

export const financeAccountItemStyles = {
  container: {
    // flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between"
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center"
  },
  accountNameContainer: {
    flex: 6,
    justifyContent: "center"
  },
  currentBalanceContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  name: {
    fontFamily: theme.font,
    fontSize: 16
  },
  mask: {
    fontFamily: theme.font,
    fontSize: 12,
    color: "gray"
  },
  currentBalance: {
    fontFamily: theme.font,
    fontSize: 16,
    color: "green"
  },
  currentBalanceCreditCard: {
    fontFamily: theme.font,
    fontSize: 16,
    color: "black"
  },
  updatedAt: {
    fontFamily: theme.font,
    fontSize: 12,
    color: "gray"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  description: {
    fontFamily: theme.font,
    textAlign: "auto",
    color: "white"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  }
};

export const transactionItemStyles = {
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    backgroundColor: "#3F3C51",
    borderRadius: 5,
    margin: 10,
    color: "white"
  },
  dateContainer: {
    flex: 3
  },
  descriptionContainer: {
    flex: 5
  },
  amountContainer: {
    flex: 2,
    alignItems: "flex-end"
  },
  text: {
    fontFamily: theme.font,
    color: "white"
  }
};

export const pinKeypadStyles = {
  description: {
    fontFamily: theme.font,
    textAlign: "auto"
  },
  container: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.purple,
    borderWidth: 1,
    borderRadius: 40,
    margin: 10,
    height: 80,
    color: colors.white
  },
  placeholderButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 0,
    margin: 10
  },
  buttonText: {
    color: colors.white,
    fontFamily: theme.font
  },
  title: {
    color: colors.purple,
    fontFamily: theme.font,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    color: "black",
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  backspace: {
    color: "black"
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  }
};

export const dashboardCardViewStyles = {
  meterWrapper: {
    flex: 5,
    textAlign: "center",
    alignItems: "center"
    //backgroundColor: '#2F2D3C',
  },
  chartContainer: {
    flex: 1,
    overflow: "visible",
    borderRightColor: "gray",
    borderRightWidth: 1,
    marginRight: 35
  },
  chart: {
    flex: 1
  },
  speedometer: {
    marginTop: 10,
    height: 280,
    width: 280,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 140,
    overflow: "hidden",
    borderColor: "#3f3d52",
    borderWidth: 20,
    paddingBottom: 0,
    backgroundColor: "#2F2D3C",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  expanded: {
    paddingTop: 5,
    paddingBottom: 10,
    flex: 2,
    alignItems: "center",
    backgroundColor: "#2F2D3C"
  },
  meterLabel: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  dateRange: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  meterButtons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    flex: 1
  },
  meterButtonLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 5
  },
  meterButtonSave: {
    backgroundColor: '#00A79D',
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  meterButtonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F2D3C"
  },
  meterButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center"
  },
  meterButtonNeed: {
    backgroundColor: '#FF71AE',
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  meterButtonWant: {
    backgroundColor: '#60A1FE',
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  meterDate: {
    color: "#858483",
    fontSize: 10,
    marginTop: 0,
    marginLeft: 170
  },
  meterText: {
    color: "#7dc46c",
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
    textAlign: "center"
  },
  meterCategory: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center"
  },
  list: {
    backgroundColor: colors.primary
  },
  cardList: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.white,
    paddingBottom: 25
  },
  horizontalList: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#2F2D3C"
  },
  cashflowTotals: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20
  },
  remaining: {
    flex: 1,
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  remainingAmount: {
    flex: 1,
    color: "white",
    fontSize: 18,
    alignItems: "flex-end",
    textAlign: "right",
    marginRight: 20
  },
  actual: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    padding: 0,
    margin: 0
  },
  possible: {
    color: "#8f88b5",
    fontWeight: "bold",
    textAlign: "right",
    padding: 0,
    margin: 0
  },
  graphHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  stats: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    textAlign: "right",
    marginRight: 28
  },
  graphHeader: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10
  },
  progressContainer: {
    backgroundColor: "#49475c",
    color: "white",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 350
  },
  cashflowContainer: {
    backgroundColor: "#49475c",
    color: "white",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    height: 400
  },
  myCashFlowContainer: {
    backgroundColor: "#49475c",
    color: "white",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 22,
    marginBottom: 30
  },
  subContainerLeft: {
    flex: 2
  },
  subContainerLeftText: {
    color: "#8f88b5",
    fontSize: 15,
    marginLeft: 15,
    fontWeight: "bold"
  },
  headerProgressContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 3
  },
  subContainerImage: {},
  subContainerWrapper: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  graphContainer: {
    flex: 3,
    marginBottom: 20,
    marginLeft: 10
  },
  cardHeaderRow: {
    flex: 1,
    flexDirection: "column"
  },
  cardTitle: {
    width: "100%"
  },
  headerText: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    textAlign: "center"
  },
  cashflowHeaderText: {
    marginTop: 25,
    paddingBottom: 25,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    textAlign: "center"
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 19,
    marginLeft: 20,
    paddingTop: 7,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  linearWrapper: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  },
  meterOverall: {
    color: "white"
  },
  containerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 19,
    margin: 10,
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1.0,
    alignSelf: "stretch"
  },
  meterCardContainer: {
    flexDirection: "row",
    backgroundColor: "#696880",
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 19,
    marginLeft: 20,
    paddingTop: 7,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  subContainerRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  date: {
    fontFamily: theme.font,
    fontSize: 13,
    color: "gray",
    textAlign: "right",
    alignSelf: "stretch"
  },
  title: {
    fontFamily: theme.font,
    fontSize: 13,
    color: "gray",
    flexDirection: "row",
    flex: 2,
    marginRight: 10
  },
  meterCardSubContainer: {
    color: "white",
    textAlign: "left",
    paddingTop: -5
  },
  meterCardTitleLeft: {
    fontFamily: theme.font,
    fontSize: 10,
    color: "white",
    textAlign: "left",
    flex: 2,
    marginLeft: 8,
    paddingTop: 15
  },
  meterCardTitleRight: {
    fontFamily: theme.font,
    fontSize: 10,
    color: "white",
    flex: 2,
    paddingTop: 15,
    marginLeft: 5
  },
  starLeft: {
    color: "gray",
    textAlign: "left",
    paddingTop: -5
  },
  titleLeft: {
    fontFamily: theme.font,
    fontSize: 10,
    color: "gray",
    textAlign: "left",
    flex: 2,
    marginLeft: 8,
    paddingTop: 15
  },
  titleRight: {
    fontFamily: theme.font,
    fontSize: 10,
    color: "gray",
    flex: 2,
    paddingTop: 15,
    marginLeft: 5
  },
  meterCardDescription: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    paddingTop: 0,
    flex: 4
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    paddingTop: 0,
    flex: 4
  },
  textHighlight: {
    fontFamily: theme.font,
    color: theme.color
  },
  dateContainer: {
    flex: 1
  },
  descriptionContainer: {
    flex: 5
  },
  amountContainer: {
    flex: 2,
    alignItems: "flex-end"
  },
  text: {
    fontFamily: theme.font
  }
};
export const Styles = _.bindAll({}, [])
