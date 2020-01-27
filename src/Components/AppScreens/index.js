import React, { Component } from 'react';
import './AppScreens.css';
import Carousel from "react-bootstrap/Carousel";

class AppScreens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: "",
      page: 1
    };
  }
  
render() {
    let imageUrls = [];
    let screenPrefix = "LetsTalk";
    if (this.props.app === "Conversation") {
      screenPrefix = "Discussion";
    }
    for (var index=1; index <= 5; index++) {
        imageUrls.push( "/static/images/" + screenPrefix + index + ".png");
    }

    // return ( <section>
    // <h3 className="h3highlights">Screenshots</h3>
    // <img className="phoneScreenshot" alt={this.props.app} src={imageUrl} />
    // </section >);
    return (
      <section>
        <h3 className="h3highlights">Screenshots</h3>
        <Carousel fade={true} interval={2000}>
          {imageUrls.map((url) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={url}
                alt={this.props.app + " screenshot"}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    );
  }


  /***
   * 
   
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


   */
}

export default AppScreens;
