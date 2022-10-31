import React from 'react';
import logo from './logo.svg';
import { Counter} from './features/counter/Counter';
import './App.css';
import Deneme from './features/counter/Deneme';
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme"
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MyRouter from './MyRouter';
import {happyTheme} from './theme/happyTheme'



function App() {
  return (
    <div className="App">
       <ThemeProvider theme={Theme}>
       <Provider store={store}>

        <MyRouter>

        </MyRouter>
     
        <Counter />
      <Deneme></Deneme>


      </Provider>

      </ThemeProvider>
    </div>
  );
}

export default App;
