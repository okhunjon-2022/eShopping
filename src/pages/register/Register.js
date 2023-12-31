import React from "react";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./Register.styles";

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <Agreement>
          By creating an account,Iconsent to the processing of my personal data
          in accordance with th <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
}

export default Register;
