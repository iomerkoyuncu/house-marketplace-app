import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	palette: {
		background: {
			default: "#b2dfdb",
		},
		primary: {
			main: "#00796b",
		},
	},
});
