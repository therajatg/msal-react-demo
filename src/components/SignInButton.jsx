import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleSignin = () => {
    //This will direct the user to azure ad and prompt him to sign in with there username and password. scope so that we have access tp access token and user info sent.
    instance.loginRedirect({
      scopes: ["user.read"],
    });
  };

  return (
    <Button color="inherit" onClick={handleSignin}>
      Sign in
    </Button>
  );
};
