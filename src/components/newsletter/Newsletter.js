import React from "react";
import {
  Container,
  Button,
  Description,
  Input,
  InputContainer,
  Title,
} from "./Newsletter.styles";
import SendIcon from "@mui/icons-material/Send";

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely uptades from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
