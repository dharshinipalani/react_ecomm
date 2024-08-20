import { Box, styled } from "@mui/material";

export const LoginPageContainer = styled(Box)(() => ({
    marginTop: "2rem",
    padding: "3rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

export const LoginFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  gap: "1rem",
  boxSizing: "border-box",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)",
}));