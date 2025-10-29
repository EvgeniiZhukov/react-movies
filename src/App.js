import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Main} from "./layout/Main";
import React from 'react';
// don't change the Component name "App"
export default class App extends React.Component {
  render() {
    // TODO: implement component
    return <main className="container content">
      <Header/>
      <Main/>
      <Footer/>
    </main>;
  }
}