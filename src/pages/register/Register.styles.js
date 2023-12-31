import styled from "styled-components";
import { mobile } from "../../responsive/Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/953862/pexels-photo-953862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      no-repeat center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  ${mobile({width:"75%"})}
  
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;
