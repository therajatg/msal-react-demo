import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";

export const WelcomeName = () => {
  const { instance } = useMsal();
  const [name, setName] = useState("");

  useEffect(() => {
    const currentAccount = instance.getActiveAccount();
    if (currentAccount) setName(currentAccount.username);
  }, [instance]);

  return <Typography variant="h6">Welcome, {name}</Typography>;
};

//When this component mounts, we wanna get the current active account
//We are able to get the active account in this component because we have pca.addEventCallback in
