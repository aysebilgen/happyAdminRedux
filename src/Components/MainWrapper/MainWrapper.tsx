import * as React from 'react';
import  Footer from './Footer';
import Header from './Header';

export interface IAppProps {
}

export default function MainWrapper (props: IAppProps) {
  return (
    <div>
      Wrapper
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
