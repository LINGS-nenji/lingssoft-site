/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Kit 2 PRO React base styles
import colors from "assets/theme/base/colors";
import breakpoints from "assets/theme/base/breakpoints";
import typography from "assets/theme/base/typography";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";
import globals from "assets/theme/base/globals";

// Material Kit 2 PRO React helper functions
import boxShadow from "assets/theme/functions/boxShadow";
import hexToRgb from "assets/theme/functions/hexToRgb";
import linearGradient from "assets/theme/functions/linearGradient";
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 PRO React components base styles for @mui material components
import list from "assets/theme/components/list";
import listItem from "assets/theme/components/list/listItem";
import listItemText from "assets/theme/components/list/listItemText";
import card from "assets/theme/components/card";
import cardMedia from "assets/theme/components/card/cardMedia";
import cardContent from "assets/theme/components/card/cardContent";
import button from "assets/theme/components/button";
import iconButton from "assets/theme/components/iconButton";
import input from "assets/theme/components/form/input";
import inputLabel from "assets/theme/components/form/inputLabel";
import inputOutlined from "assets/theme/components/form/inputOutlined";
import textField from "assets/theme/components/form/textField";
import menu from "assets/theme/components/menu";
import menuItem from "assets/theme/components/menu/menuItem";
import switchButton from "assets/theme/components/form/switchButton";
import divider from "assets/theme/components/divider";
import tableContainer from "assets/theme/components/table/tableContainer";
import tableHead from "assets/theme/components/table/tableHead";
import tableCell from "assets/theme/components/table/tableCell";
import linearProgress from "assets/theme/components/linearProgress";
import breadcrumbs from "assets/theme/components/breadcrumbs";
import slider from "assets/theme/components/slider";
import avatar from "assets/theme/components/avatar";
import tooltip from "assets/theme/components/tooltip";
import appBar from "assets/theme/components/appBar";
import tabs from "assets/theme/components/tabs";
import tab from "assets/theme/components/tabs/tab";
import stepper from "assets/theme/components/stepper";
import step from "assets/theme/components/stepper/step";
import stepConnector from "assets/theme/components/stepper/stepConnector";
import stepLabel from "assets/theme/components/stepper/stepLabel";
import stepIcon from "assets/theme/components/stepper/stepIcon";
import select from "assets/theme/components/form/select";
import formControlLabel from "assets/theme/components/form/formControlLabel";
import formLabel from "assets/theme/components/form/formLabel";
import checkbox from "assets/theme/components/form/checkbox";
import radio from "assets/theme/components/form/radio";
import autocomplete from "assets/theme/components/form/autocomplete";
import flatpickr from "assets/theme/components/flatpickr";
import container from "assets/theme/components/container";
import popover from "assets/theme/components/popover";
import buttonBase from "assets/theme/components/buttonBase";
import icon from "assets/theme/components/icon";
import svgIcon from "assets/theme/components/svgIcon";
import link from "assets/theme/components/link";
import dialog from "assets/theme/components/dialog";
import dialogTitle from "assets/theme/components/dialog/dialogTitle";
import dialogContent from "assets/theme/components/dialog/dialogContent";
import dialogContentText from "assets/theme/components/dialog/dialogContentText";
import dialogActions from "assets/theme/components/dialog/dialogActions";
import swiper from "assets/theme/components/swiper";

const baseThemeConfig = {
  breakpoints: { ...breakpoints },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
        ...swiper,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
};

const buildPalette = (mode = "light") => {
  const isDark = mode === "dark";

  if (isDark) {
    return {
      ...colors,
      mode,
      background: {
        ...(colors.background || {}),
        default: "#0c111f",
        paper: "#161b2b",
      },
      text: {
        ...(colors.text || {}),
        main: "#e1e6ff",
        focus: "#ffffff",
        primary: "#ffffff",
        secondary: "#b9c1e6",
      },
      primary: {
        main: "#5c7cfa",
        focus: "#4263eb",
      },
      secondary: {
        main: "#49516f",
        focus: "#343a55",
      },
      info: {
        main: "#4db5ff",
        focus: "#1971c2",
      },
      success: {
        main: "#51cf66",
        focus: "#40c057",
      },
      warning: {
        main: "#fcc419",
        focus: "#fab005",
      },
      error: {
        main: "#ff6b6b",
        focus: "#fa5252",
      },
      light: {
        main: "#20263b",
        focus: "#1b2033",
      },
      dark: {
        main: "#f1f4ff",
        focus: "#dce2ff",
      },
      grey: {
        100: "#1a2133",
        200: "#232a3f",
        300: "#2c334c",
        400: "#3a425e",
        500: "#4a5373",
        600: "#637092",
        700: "#8491b9",
        800: "#aeb9e0",
        900: "#d7dff8",
      },
      gradients: {
        ...colors.gradients,
        primary: {
          main: "#5c7cfa",
          state: "#364fc7",
        },
        secondary: {
          main: "#30354c",
          state: "#1f2233",
        },
        info: {
          main: "#4db5ff",
          state: "#1a6ad8",
        },
        success: {
          main: "#51cf66",
          state: "#2b8a3e",
        },
        warning: {
          main: "#fcc419",
          state: "#e0a100",
        },
        error: {
          main: "#ff6b6b",
          state: "#d62828",
        },
        light: {
          main: "#2b3247",
          state: "#1d2438",
        },
        dark: {
          main: "#101322",
          state: "#05060d",
        },
      },
    };
  }

  return {
    ...colors,
    mode,
    background: {
      ...(colors.background || {}),
      default: colors.background?.default || "#f0f2f5",
      paper: "#ffffff",
    },
    text: {
      ...(colors.text || {}),
      main: colors.text?.main || "#7b809a",
      focus: colors.text?.focus || colors.text?.main || "#7b809a",
      primary: colors.dark?.main || "#344767",
      secondary: colors.text?.main || "#7b809a",
    },
  };
};

export const buildTheme = (mode = "light") =>
  createTheme({
    ...baseThemeConfig,
    palette: buildPalette(mode),
  });

const theme = buildTheme();

export default theme;
