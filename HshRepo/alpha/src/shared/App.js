import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Barcode } from "./pages";
import Menu from "../components/Menu";

/**
 * Main Router
 * swich를 할 경우 상위 path가 하단에 가야 하위 path가 나타남
 * (아닐경우 상위path가 나타남)
 * */

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Switch>
          <Route path="/barcode/:name" component={Barcode} />
          <Route path="/barcode" component={Barcode} />
        </Switch>
      </div>
    );
  }
}

export default App;
