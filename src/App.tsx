import React from "react";
import { Container, Paper, Input, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Style";
import { MyButton, RoundedButton } from "./styles/MyButtton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper
          elevation={4}
          sx={{
            padding: "2rem",
            margin: "2rem",
          }}
        >
          <Input fullWidth placeholder="First Name" />
          <Input fullWidth placeholder="Last Name" />
          <Input fullWidth placeholder="Email" />
          <Input fullWidth placeholder="Website" />
          <RoundedButton
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
          >
            Submit
          </RoundedButton>
          <MyButton
            variant="contained"
            color="secondary"
            sx={{ marginTop: "20px" }}
          >
            Cancel
          </MyButton>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
