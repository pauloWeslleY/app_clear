import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme/theme";
import "./sass/global.scss";

const element = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(element).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
      </ChakraProvider>
   </React.StrictMode>
);
