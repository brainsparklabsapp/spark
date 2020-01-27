import React, { Component } from 'react';
import './AppFeatureList.css';

class AppFeatureList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: "",
      page: 1
    };
  }

  render() {
    let spanClass="";
    let ulContrib = (<ul>
						<li><p><span className={spanClass}>Over 1200 questions</span> to break the ice in small groups or stimulate conversation one-on-one.</p></li>
						<li><p><span className={spanClass}>Allows you to ask questions</span> you wouldn’t ordinarily think to ask.</p></li>
						<li><p><span className={spanClass}>Find out more about people</span> in a simple, non-threatening format.</p></li>
						<li><p><span className={spanClass}>Easily store your favorites</span> for quick referral when the time is right.</p></li>
						<li><p><span className={spanClass}>Nine categories of questions</span> for any kind of group.</p></li>
						<li><p><span className={spanClass}>Easy to read</span> question format.</p></li>
					</ul>);
    if (this.props.app === "Conversation") {
      spanClass="discussionSpan";
      ulContrib = (<ul>
						<li><p><span className={spanClass}>Over 1200 questions</span> to get conversation started.</p></li>
						<li><p><span className={spanClass}>Allows you to practice</span> both speaking and listening skills for the language you are learning.</p></li>
						<li><p><span className={spanClass}>Allows you to ask questions</span> you wouldn't ordinarily think to ask.</p></li>
						<li><p><span className={spanClass}>Find out more about people</span> in a simple, non-threatening format.</p></li>
						<li><p><span className={spanClass}>Easily store your favorites</span> for quick referral when the time is right.</p></li>
						<li><p><span className={spanClass}>Fourteen categories of questions</span> for any kind of group.</p></li>
						<li><p><span className={spanClass}>Easy to read</span> question format.</p></li>
					</ul>);
    }

    return ( <section className="left">
					<h3 className="h3highlights">Highlights</h3>
          {ulContrib}
				</section >);








  }
}

export default AppFeatureList;
