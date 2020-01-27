import React, { Component } from 'react';
import './AppDescription.css';

class AppDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: "",
      page: 1
    };
  }

  render() {
    let iTunesUrl = "https://apps.apple.com/us/app/lets-talk/id493255477";
    let logoImgUrl = "/static/images/LetsTalkDecorativeLogo.png";
    let logoAlt="Let's Talk App Logo";
    let grabberId="grabber";
    let grabberTextString="Let’s Talk is an app that provides over 1200 questions to get conversations started. These icebreaker questions help you get to know others better one-on-one or in group settings.";
    if (this.props.app === "Conversation") {
      iTunesUrl = "https://apps.apple.com/us/app/conversation-starters-language-discussion-esl/id1188425405";
      logoImgUrl = "/static/images/DiscussionDecorativeLogo.png";
      logoAlt="Conversation Starters Logo";
      grabberId="grabberDiscussion";
      grabberTextString="Conversation Starters is an app to facilitate discussions in language learning groups. It provides over 1200 questions to get conversations started. These icebreaker questions help you get to know others better one-on-one or in group settings.";
    }

    return (<section className="appDescription">
      <img className="logo" src={logoImgUrl} alt={logoAlt} />
      <h2 id={grabberId}>Never a Dull conversation!</h2>
      <p className="grabberText">{grabberTextString}</p>
      <a id="appStore" href={iTunesUrl}>
        <img src="/static/images/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
      </a>
      <p className="follow">Follow us on
        <a className="twitterIcon" href="https://twitter.com/letstalkapp" target="_blank" rel="noopener noreferrer">twitter</a>  or
        <a className="facebookIcon" target="_blank" rel="noopener noreferrer" href="http://facebook.com/letstalkapp">facebook</a>
      </p>
		</section >);

  }
}

export default AppDescription;
