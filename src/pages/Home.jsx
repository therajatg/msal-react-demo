import Typography from "@mui/material/Typography";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

export const Home = () => {
  return (
    <>
      <UnauthenticatedTemplate>
        <Typography variant="h6">
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Typography variant="h6">
          You are signed-in. Select profile to call Microsoft Graph.
        </Typography>
      </AuthenticatedTemplate>
    </>
  );
};

//Instead of what I did above, here I could use the isUserAuthenticated hook to show selective depending on whether the user is logged in or not.
