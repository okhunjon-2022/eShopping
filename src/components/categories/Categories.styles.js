import styled from "styled-components";
import { mobile } from "../../responsive/Responsive";

export const Container = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding:"0px",flexDirection:"column"})}
`;
