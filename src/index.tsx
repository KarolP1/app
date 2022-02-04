import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { register } from "./serviceworker/serviceWorkerRegistration";
import { ThemeProvider } from "styled-components";
import { colorTheme } from "./theme/colorTheme";
import "./index.css";

export interface AuxProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AuxProps) => (
  <Router>
    <ThemeProvider theme={colorTheme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  </Router>
);
render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById("root")
);

register();
