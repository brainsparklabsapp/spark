import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppSummary from "./Views/AppSummary"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // For deploying to GitHub Pages, need to set basename of BrowserRouter
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/Conversation">
                <AppSummary app={"Conversation"} mode={"summary"} />
              </Route>
              <Route path="/LetsTalk">
                <AppSummary app={"LetsTalk"} mode={"summary"} />
              </Route>
              <Route path="/Privacy">
                <AppSummary app={"LetsTalk"} mode={"privacy"} />
              </Route>
              <Route path="/PrivacyC">
                <AppSummary app={"Conversation"} mode={"privacy"} />
              </Route>
              <Route path="/">
                <AppSummary app={"LetsTalk"} />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
