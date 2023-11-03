import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EventType, PublicClientApplication } from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    clientId: "b9f34cc3-d157-4593-8b9a-dff4b939f3c1",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "/",
  },
});

//redirectUri has relative path, so we don't have to change it when deploying

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    // console.log(event);
    pca.setActiveAccount(event.payload.account);
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App msalInstance={pca} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

//We have instantiated PublicClientApplication outside the react component tree, so that it does noit get re-instantiated every time app loads or refreshes.
//addEventCallback => msaljs fires an event erery time a users signs in, new account added, if tries to get access token etc etc. msal has various events, here we are checking the login success event. THis is also outside our component tree. If you are using this inside the component tree, remember to unregister the event when component unmounts. w did this to get name of user if he's logged in.
//When you log in msal sends a lot of info like tokens, user info etc. console.log event and see for yourself.
