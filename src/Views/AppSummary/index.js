import React, { Component } from "react";
import "./AppSummary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AppDescription from "../../Components/AppDescription";
import AppFeatureList from "../../Components/AppFeatureList";
import AppScreens from "../../Components/AppScreens";
import AppPrivacyPolicy from "../../Components/AppPrivacyPolicy";
import Phone from "../../Components/Phone";
import Header from "../../Components/Header";
import Helmet from "react-helmet";

export default class AppSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let appTitle = "Let's Talk App";
    let favicon = "/static/images/favicon.ico";
    console.log('1props.app in index render: |' + this.props.app + '|');
    if (this.props.app === "Conversation") {
      appTitle = "Conversation Starters App";
      favicon = "/static/images/faviconDiscussion.ico";
    }

    let container = (
      <Container className="appMain">
        <Row className="appRowMainTop">
          <Col md={6} xs={12}><AppDescription app={this.props.app} /></Col>
          <Col md={6} xs={12}><Phone app={this.props.app} /></Col>
        </Row>
        <Row className="appRowMainBottom">
          <Col md={6} xs={12}><AppFeatureList app={this.props.app} /></Col>
          <Col md={6} xs={12}><AppScreens app={this.props.app} /></Col>
        </Row>
      </Container>
    );

    console.log("mode is |" + this.props.mode + "|");
    // mode is either "summary" or "privacy"
    if (this.props.mode === "privacy") {
      container = (
        <Container className="appMain">
          <Row>
            <Col xs={12}><AppPrivacyPolicy app={this.props.app} appTitle={appTitle}/></Col>
          </Row>
        </Container>
      );

    }

    return (
      <div className="App">
        <Header app={this.props.app} />
        <Helmet>
          <title>{appTitle}</title>
          <link id="favicon" rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>

        {container}
      </div>
    );
  }
}

