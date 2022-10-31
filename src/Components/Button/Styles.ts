import styled from 'styled-components';
import Button from "@mui/material/Button";




export const Button_color3 = styled(Button)`

&& {
  background-color: ${(props) => props.theme.color3};
  border-radius: 2px;
  width: 100%;
  &:hover {
    background-color: #105b72c2;
  };
}
`;

export const Deneme1 = styled(Button)`

&& {
  background-color: ${(props) => props.theme.color1};
  border-radius: 12px;
  width: 100%;
  &:hover {
    background-color: pink;
  };
  
`;

export const Button_color3_outlined = styled(Button)`

&& {
  color: ${(props) => props.theme.color3};
  border-radius: 4px;
  border-color: ${(props) => props.theme.color3};
  width: 100%;
  font-size: 10px;
    width: 8rem;
  &:hover {
    background-color: ${(props) => props.theme.color3};
    color: white;
    border-color: ${(props) => props.theme.color3};
  };
  
`;




