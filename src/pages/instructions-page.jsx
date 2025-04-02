import { useState } from 'react';
// import './App.css';
import "@trussworks/react-uswds/lib/uswds.css";
import '@trussworks/react-uswds/lib/index.css';
import {
  GovBanner,
  Header,
  Title,
  NavMenuButton,
  PrimaryNav,
  Grid,
  GridContainer,
  Alert,
  Button,
  StepIndicator,
  StepIndicatorStep,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Footer,
  Logo,
  FooterNav
} from "@trussworks/react-uswds";

function InstructionsPage() {
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
    <div className="usa-logo" id="basic-logo">
      <img 
        src="/path-to-cms-logo.png" 
        alt="CMS Logo" 
        style={{ maxHeight: '40px', marginRight: '10px' }} 
      />
      <em className="usa-logo__text">
        <a href="/" title="Home">ASETT</a>
      </em>
    </div>
  );

  return (
    <div>
      <GovBanner />
      
      <Header basic>
        <div className="usa-nav-container">
          {renderLogo()}
          <NavMenuButton onClick={onToggleMobileNav} label="Menu" />
          <PrimaryNav
            items={navItems}
            mobileExpanded={mobileNavOpen}
            onToggleMobileNav={onToggleMobileNav}
          >
            <Button type="button" outline>Register</Button>
            <Button type="button">Login</Button>
          </PrimaryNav>
        </div>
      </Header>

      <GridContainer className="usa-section">
        <Grid row>
          <Grid col={12}>
            <h1 className="usa-heading">Administrative Simplification Enforcement and Testing Tool (ASETT)</h1>
            <hr className="usa-divider" />
          </Grid>
        </Grid>

        <Grid row gap>
          <Grid col={12}>
            <Alert type="warning" slim headingLevel="h4">
              <strong>Disclaimer:</strong> If you file a complaint without registration, you will not be able to view your
              complaints, upload supporting documents, correspond electronically, or test transactions.
            </Alert>
          </Grid>
        </Grid>

        <Grid row gap>
          <Grid col={12}>
            <Card>
              <CardBody>
                <p>
                  The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions
                  and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance
                  Privacy complaint, please visit the <Link href="https://www.hhs.gov/ocr">Office for Civil Rights (OCR)</Link> website.
                </p>

                <div className="usa-step-indicator usa-step-indicator--counters-sm">
                  <StepIndicator centered headingLevel="h4">
                    <StepIndicatorStep label="Identify the type of HIPAA/ACA complaint" status="complete" />
                    <StepIndicatorStep label="Provide your contact information" status="current" />
                    <StepIndicatorStep label="Identify the Filed Against Entity" />
                    <StepIndicatorStep label="Describe the HIPAA/ACA violation" />
                    <StepIndicatorStep label="Review and Submit" />
                  </StepIndicator>
                </div>

                <div className="margin-top-4 margin-bottom-4">
                  <p>
                    You can review all information entered before submitting your complaint to CMS. Once the complaint
                    is submitted, CMS will review all information and respond to your complaint.
                  </p>
                  <p>
                    Click the Complaint Type button below to begin filing your complaint.
                  </p>
                </div>

                <div className="display-flex flex-justify-between margin-top-4">
                  <Button outline type="button">Cancel</Button>
                  <Button type="button">Complaint Type &gt;</Button>
                </div>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </GridContainer>

      <Footer
        primary={
          <div className="usa-footer__primary-container grid-row">
            <div className="grid-col-12">
              <FooterNav
                aria-label="Footer navigation"
                size="medium"
                links={[
                  <a key="home" className="usa-footer__primary-link" href="#">Home</a>,
                  <a key="privacy" className="usa-footer__primary-link" href="#">Privacy Policy</a>,
                  <a key="security" className="usa-footer__primary-link" href="#">Security Policy</a>,
                ]}
              />
            </div>
          </div>
        }
        secondary={
          <div className="grid-row">
            <div className="grid-col-12">
              <Logo
                size="medium"
                image={<img src="/path-to-cms-logo.png" alt="CMS Logo" />}
                heading={<>Centers for Medicare &amp; Medicaid Services</>}
              />
              <p className="usa-footer__logo-heading">Administrative Simplification Enforcement and Testing Tool</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default InstructionsPage;