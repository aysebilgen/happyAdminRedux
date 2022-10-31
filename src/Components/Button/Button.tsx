import React from 'react';
import { Button_color3,Button_color3_outlined} from './Styles';
import { Deneme1} from './Styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface myProps {
  name: string;
  clickFunction: () => void;
}



export  function LoginButton (props: { Function: () => void ; ButtonName: string; }){
  //const {Function, ButtonName} = props;
    return(
       
      <Button_color3 variant="contained" onClick={props.Function} >
        {props.ButtonName}
      </Button_color3>
    )

};


export  function UpdateButton (props: { Function: myProps["clickFunction"]; ButtonName: myProps["name"]; }){
  //const {Function, ButtonName} = props;
    return(
       
        <Button_color3 variant="contained" onClick={props.Function} >
        {props.ButtonName}
       </Button_color3>
    )

};

export  function AddButton (props: { Function: any; ButtonName: any; }){
  //const {Function, ButtonName} = props;
    return(
       
      <Stack direction="row" spacing={2}>
      <Button_color3_outlined variant="outlined" onClick={props.Function}>{props.ButtonName} </Button_color3_outlined>
      
    </Stack>
    )

};



