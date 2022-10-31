import * as React from 'react';
import HeaderMenu from './HeaderMenu';

import { styled, alpha } from "@mui/material/styles";

import theme from '../../theme/theme';



export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div>
      HEADER
     
      <HeaderMenu></HeaderMenu>
      <MyComponent><p>AYSE!!!!</p></MyComponent>
     
      <MyComponent2>ABUK</MyComponent2>
      <MyComponent><p>Ayse</p></MyComponent>
    </div>
  );
}


const MyComponent = styled('div')({
  color: theme.color6,
  backgroundColor: theme.color2,
  padding: '19px',
  borderRadius: 4,
});

const MyComponent2 = styled('div')({
  color: theme.color3,
  backgroundColor: '#4FD1C5',
  padding: 8,
  borderRadius: 4,
});


