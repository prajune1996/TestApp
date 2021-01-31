import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Dogs from "./Dogs/Dog";
import Country from "./Country/Countries";
import Timer from "./Timer/List";
import NotFound from "./NotFound";
// import { Thankyou } from "./components/thankyou";

function App() {
  return (
    <Router>
      <body>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/timer" component={Timer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <div class="circle1"></div>
        <div class="circle2"></div>
      </body>
    </Router>
  );
}

export default App;
