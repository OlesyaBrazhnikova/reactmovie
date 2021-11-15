import React, { useState } from "react";
import Splash from "./SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "lightblue",
  color: "#39445a",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#39445a",
  titleColor: "lightpink",
  color: "white",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const App = () => {
	const [theme, setTheme] = useState("light")
	return (
		<ThemeProvider theme={themes[theme]}>
			<Splash theme={theme} setTheme={setTheme}/>
		</ThemeProvider>
	);
}

export default App;