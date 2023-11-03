import Button from "@mui/material/Button";
import { useMsal } from "@azure/msal-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleSignout = () => {
    instance.logoutRedirect();
  };

  return (
    <Button color="inherit" onClick={handleSignout}>
      Sign out
    </Button>
  );
};

//We can customize the signout as well as signin process as the api takes in a bunch of parameters (logoutRedirect)
