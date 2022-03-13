import { Button, styled } from "@mui/material";

export const MyButton = styled(Button)(() => {});
export const RoundedButton = styled(MyButton)(() => ({
  borderRadius: "12px",
  marginRight: "20px",
}));
