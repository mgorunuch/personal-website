import React from "react";
import './social-links.scss';
import SocialLink from './social-link/social-link';

class SocialLinks extends React.Component {
  render() {
    return (
      <div className="social-links">
        <SocialLink iconName="linkedin" linkUrl="https://www.linkedin.com/in/mgorunuch" text="LinkedIn" />
        <SocialLink iconName="twitter" linkUrl="https://twitter.com/mgorunuch" text="Twitter" />
        <SocialLink iconName="telegram" linkUrl="https://t.me/mgorunuch" text="Telegram" />
        <SocialLink iconName="facebook" linkUrl="https://fb.com/mgorunuch" text="Facebook" />
        <SocialLink iconName="github" linkUrl="https://github.com/Mgorunuch" text="Github" />
        {/*<SocialLink iconName="stackoverflow" linkUrl="https://stackoverflow.com/users/5988531/mgorunuch" text="StackOverflow" />*/}
      </div>
    );
  }
}

export default SocialLinks;
