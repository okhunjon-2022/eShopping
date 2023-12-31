import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./Login.styles";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="password" />
          <Input placeholder="username" />
          <Button>CREATE</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
