import { useState } from 'react';
import {
  Header as USWDSHeader,
  NavMenuButton,
  PrimaryNav,
  Button
} from "@trussworks/react-uswds";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const onToggleMobileNav = () => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  const navItems = [
    <a key="home" className="usa-nav__link" href="#">
      <span>Home</span>
    </a>,
    <a key="about" className="usa-nav__link" href="#">
      <span>About ASETT</span>
    </a>,
    <a key="contact" className="usa-nav__link" href="#">
      <span>Contact Us</span>
    </a>,
    <a key="support" className="usa-nav__link" href="#">
      <span>Support</span>
    </a>,
  ];

  const renderLogo = () => (
    <div id="basic-logo">
      <img 
        src="/src/assets/cms_logo.png"
        alt="CMS Logo" 
        style={{ maxHeight: '50px', marginRight: '10px' }} 
      />
    </div>
  );

  return (
    <USWDSHeader basic>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {renderLogo()}
        <NavMenuButton onClick={onToggleMobileNav} label="Menu" />
        <PrimaryNav
          items={navItems}
          mobileExpanded={mobileNavOpen}
          onToggleMobileNav={onToggleMobileNav}
        >
          <Button type="button" outline className="margin-right-2">Register</Button>
          <Button type="button">Login</Button>
        </PrimaryNav>
      </div>
    </USWDSHeader>
  );
}

export default Header;
