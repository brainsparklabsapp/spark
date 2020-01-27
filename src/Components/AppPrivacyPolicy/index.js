import React, { Component } from 'react';
import './AppPrivacyPolicy.css';

class AppPrivacyPolicy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: "",
      page: 1
    };
  }

  render() {
    return (<section>
      <div className="appPrivacyPolicy">
        <h2>Privacy Policy for {this.props.appTitle}</h2>
        <p>
          Brain Spark Labs, LLC. provides the {this.props.appTitle}.
        </p>
        <p>
          This page is used to inform users regarding
          our policies with the collection, use, and
          disclosure of Personal Information for the App.
        </p>
        <p>
          The {this.props.appTitle} does not collect any user information,
          nor does it report back any usage information back to any server.
          Since we do not collect any user information, we will not use or share your
          information with anyone.
         </p>
         <p><strong>Information Collection and Use</strong></p> 
         <p>
          No user information is collected by the {this.props.appTitle}.
         </p> 
         <p>
          The App does use third party services that may collect
          information used to identify you.
         </p>

          <p><strong>Log Data</strong></p> <p>
            The App does not log any user data.
                  </p> <p><strong>Changes to This Privacy Policy</strong></p> <p>
            We may update our Privacy Policy from
            time to time. Thus, you are advised to review this page
            periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy
            on this page. These changes are effective immediately after
            they are posted on this page.
                  </p> <p><strong>Contact Us</strong></p> <p>
            If you have any questions or suggestions about
            our Privacy Policy, do not hesitate to contact
            us at <a href="mailto:support@letstalkapp.com">support@letstalkapp.com</a>.
                  </p>
        </div>
    </section >);
    
    
    
    
    
    
    
    
      }
    }
    
    export default AppPrivacyPolicy;
