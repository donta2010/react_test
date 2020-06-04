import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, useParams, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Books />
      <Route path="/books/:id" component={Detail} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/" component={Books} />
      <Route path="/:id" children={<Child />} />
      <Route path="*" component={NoMatch} />
      {/* <Route path="*">
            <NoMatch />
          </Route> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
