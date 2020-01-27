import React, { Component } from 'react';
import {Button, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSupport: false
    };

    this.showSupport = this.showSupport.bind(this);
    this.hideSupport = this.hideSupport.bind(this);
  }

  showSupport() {
    this.setState({showSupport: true});
  }
  hideSupport() {
    this.setState({showSupport: false});
  }

  render() {
    let classChoice = this.props.app === "Conversation" ? "DiscussionHeader" : "LetsTalkHeader";

    return (
      <>
        <Navbar className={classChoice} fixed="top" bg="dark" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <Button variant="secondary" onClick={this.showSupport} >Support</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Modal show={this.state.showSupport} onHide={this.hideSupport}>
          <Modal.Header closeButton>
            <Modal.Title>Support</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>We're working hard to keep your conversations lively and entertaining! We'd love to hear feedback from you on how you are using the app!</p>
            <p>If you are experiencing issues with the app, please shoot us an email at <a href="mailto:support@letstalkapp.com">support@letstalkapp.com</a></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideSupport}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>);
  }
}

export default Header;
