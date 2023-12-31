import styled from "styled-components";
import { mobile } from "../../responsive/Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/2533311/pexels-photo-2533311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      no-repeat center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  ${mobile({width:"75%"})}

`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;
