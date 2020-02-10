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

console.log("Process.env.PUBLIC_URL check");
if (process && process.env ) {
  console.log("Check PUBLIC_URL");
}
if (process && process.env && process.env.PUBLIC_URL) {
  console.log("Process.env.PUBLIC_URL: |" + process.env.PUBLIC_URL + "|");
}
    return (
      <div className="App">
        <BrowserRouter>
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
