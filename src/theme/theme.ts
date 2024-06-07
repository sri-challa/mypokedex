import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./Components/CustomButton";
import { switchTheme } from "./Components/CustomSwitch";

const colors = {
  normal: {
    50: "#f6f5ef",
    100: "#eae9dd",
    200: "#d7d5bf",
    300: "#bebd98",
    400: "#a8a77a",
    500: "#898959",
    600: "#6b6c44",
    700: "#545437",
    800: "#44452f",
    900: "#3b3c2b",
    950: "#1e1f14",
  },
  fighting: {
    50: "#fdf3f3",
    100: "#fde4e3",
    200: "#fbcfcd",
    300: "#f7adaa",
    400: "#f17d78",
    500: "#e6534d",
    600: "#d23630",
    700: "#c22e28",
    800: "#922622",
    900: "#7a2522",
    950: "#420f0d",
  },
  flying: {
    50: "#f5f4fe",
    100: "#eeeafd",
    200: "#dfd8fc",
    300: "#c7b9f9",
    400: "#a98ff3",
    500: "#9065ed",
    600: "#8045e2",
    700: "#7033ce",
    800: "#5e2aad",
    900: "#4f248e",
    950: "#311560",
  },
  poison: {
    50: "#fdf6fd",
    100: "#faecfb",
    200: "#f3d9f5",
    300: "#ebbaed",
    400: "#df91e1",
    500: "#cc66cf",
    600: "#b247b2",
    700: "#a33ea1",
    800: "#792f77",
    900: "#642b61",
    950: "#40123e",
  },
  ground: {
    50: "#fcf8ee",
    100: "#f6eccf",
    200: "#ecd89b",
    300: "#e2bf65",
    400: "#dbaa44",
    500: "#d38d2d",
    600: "#ba6e25",
    700: "#9b5022",
    800: "#7f4121",
    900: "#69361e",
    950: "#3b1b0d",
  },
  rock: {
    50: "#f9f9ed",
    100: "#f2f2cf",
    200: "#e6e3a2",
    300: "#d7ce6d",
    400: "#caba45",
    500: "#b6a136",
    600: "#a0842e",
    700: "#816327",
    800: "#6c5127",
    900: "#5d4426",
    950: "#352513",
  },
  bug: {
    50: "#fdfde8",
    100: "#f7facd",
    200: "#f0f6a0",
    300: "#e1ed69",
    400: "#d0e03b",
    500: "#a6b91a",
    600: "#8b9e12",
    700: "#697813",
    800: "#535f15",
    900: "#465116",
    950: "#252d06",
  },
  ghost: {
    50: "#f9f7fc",
    100: "#f2eff8",
    200: "#e4def0",
    300: "#d1c4e3",
    400: "#b4a0d2",
    500: "#967abb",
    600: "#735797",
    700: "#634982",
    800: "#523d6b",
    900: "#473659",
    950: "#291b37",
  },
  steel: {
    50: "#f5f6f8",
    100: "#ecedf3",
    200: "#dddee8",
    300: "#c7c8da",
    400: "#b7b7ce",
    500: "#9d9bb9",
    600: "#8a85a6",
    700: "#777191",
    800: "#615d76",
    900: "#514f60",
    950: "#302e38",
  },
  fire: {
    50: "#fef7ee",
    100: "#fdeed7",
    200: "#fad8ae",
    300: "#f6bc7b",
    400: "#f19646",
    500: "#ee8130",
    600: "#de5f18",
    700: "#b84816",
    800: "#933a19",
    900: "#763218",
    950: "#40170a",
  },
  water: {
    50: "#f0f4fe",
    100: "#dde6fc",
    200: "#c3d4fa",
    300: "#99b9f7",
    400: "#6390f0",
    500: "#4670eb",
    600: "#3152df",
    700: "#283ecd",
    800: "#2735a6",
    900: "#253183",
    950: "#1b2050",
  },
  grass: {
    50: "#f2faeb",
    100: "#e1f4d3",
    200: "#c5eaac",
    300: "#a0db7b",
    400: "#7ac74c",
    500: "#60ae34",
    600: "#488a26",
    700: "#396a21",
    800: "#30551f",
    900: "#2a491e",
    950: "#13270c",
  },
  electric: {
    50: "#fefce8",
    100: "#fdf8c4",
    200: "#fcf08c",
    300: "#fae04a",
    400: "#f7d02c",
    500: "#e6b30c",
    600: "#c78b07",
    700: "#9e630a",
    800: "#834e10",
    900: "#6f4014",
    950: "#412107",
  },
  psychic: {
    50: "#fff1f4",
    100: "#ffe3e9",
    200: "#ffccd9",
    300: "#ffa2b9",
    400: "#fe6e96",
    500: "#f95587",
    600: "#e51961",
    700: "#c20e52",
    800: "#a20f4c",
    900: "#8b1046",
    950: "#4e0322",
  },
  ice: {
    50: "#f1faf9",
    100: "#dbf2f0",
    200: "#bae7e5",
    300: "#96d9d6",
    400: "#54bcb9",
    500: "#39a19f",
    600: "#328588",
    700: "#2e6d70",
    800: "#2d5a5d",
    900: "#294b50",
    950: "#173235",
  },
  dragon: {
    50: "#f3f2ff",
    100: "#eae7ff",
    200: "#d8d3ff",
    300: "#bbafff",
    400: "#9882ff",
    500: "#784fff",
    600: "#6f35fc",
    700: "#5a19e8",
    800: "#4b15c2",
    900: "#3f139f",
    950: "#24096c",
  },
  dark: {
    50: "#f6f4f0",
    100: "#e8e4d9",
    200: "#d3c9b5",
    300: "#b9a98b",
    400: "#a48e6b",
    500: "#957e5d",
    600: "#80674e",
    700: "#705746",
    800: "#58453b",
    900: "#4d3d36",
    950: "#2c201c",
  },
  fairy: {
    50: "#fbf4f8",
    100: "#f8ebf2",
    200: "#f2d8e6",
    300: "#e8b9d2",
    400: "#d685ad",
    500: "#ca6a96",
    600: "#b54d78",
    700: "#9b3b60",
    800: "#813350",
    900: "#6d2e45",
    950: "#411626",
  },
  stellar: {
    50: "#f5f7fa",
    100: "#eaeef4",
    200: "#d0d9e7",
    300: "#a6bad3",
    400: "#7694ba",
    500: "#5476a3",
    600: "#44628d",
    700: "#364c6e",
    800: "#30425c",
    900: "#2c3a4e",
    950: "#1d2534",
  },
};

const fonts = {
  body: "Poetsen One, sans-serif",
};

const textStyles = {
  heading: {
    fontFamily: "Reddit Mono",
    fontWeight: 800,
    fontSize: "18px",
  },
  subHeading: {
    fontFamily: "Reddit Mono",
    fontWeight: 700,
    fontSize: "16px",
  },
  content: {
    fontFamily: "Reddit Mono",
    fontWeight: 500,
    fontSize: "14px",
  },
};

const components = {
  Button: buttonTheme,
  Switch: switchTheme,
};

export const theme = extendTheme({ colors, fonts, textStyles, components });
