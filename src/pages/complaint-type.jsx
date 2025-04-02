import React, { useState } from 'react';
import "@trussworks/react-uswds/lib/uswds.css";
import '@trussworks/react-uswds/lib/index.css';
import {
  GovBanner,
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
  GridContainer,
  Button,
  SideNav,
//   SideNavSub,
  Radio,
  Label,
  Footer,
  FooterNav
} from "@trussworks/react-uswds";

function ComplaintType() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

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
        alt="CMS logo" 
        style={{ maxHeight: '40px', marginRight: '10px' }} 
      />
      <em className="usa-logo__text">
        <a href="/" title="Home">ASETT</a>
      </em>
    </div>
  );

  const handleRadioChange = (event) => {
    setSelectedType(event.target.value);
  };

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

      <div className="usa-section">
        <GridContainer>
          <Grid row>
            <Grid col={12}>
              <p className="text-right font-sans-3xs">Form Approved OMB No. 0938-0948</p>
            </Grid>
          </Grid>

          <Grid row>
            <Grid col={12}>
              <div className="usa-step-indicator">
                <div className="usa-step-indicator__segments">
                  <div className="usa-step-indicator__segment usa-step-indicator__segment--current">
                    <span className="usa-step-indicator__segment-label">Complaint Type</span>
                  </div>
                  <div className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label">Complainant Details</span>
                  </div>
                  <div className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label">FAE Details</span>
                  </div>
                  <div className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label">Complaint Details</span>
                  </div>
                  <div className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label">Review Complaint</span>
                  </div>
                  <div className="usa-step-indicator__segment">
                    <span className="usa-step-indicator__segment-label">Submitted</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid row className="margin-top-4">
            <Grid col={12}>
              <h1>Complaint Type</h1>
              <h2>Make a selection below</h2>
            </Grid>
          </Grid>

          <Grid row>
            <Grid col={12}>
              <form className="usa-form">
                <div className="usa-radio">
                  <Radio
                    id="transactions"
                    name="complaintType"
                    value="transactions"
                    label="Transactions"
                    onChange={handleRadioChange}
                    checked={selectedType === "transactions"}
                  />
                  <p className="margin-left-4 margin-top-1 font-sans-sm">
                    Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance 
                    advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of 
                    benefits and premium payment.
                  </p>
                </div>

                <div className="usa-radio margin-top-3">
                  <Radio
                    id="codeSets"
                    name="complaintType"
                    value="codeSets"
                    label="Code Sets"
                    onChange={handleRadioChange}
                    checked={selectedType === "codeSets"}
                  />
                  <p className="margin-left-4 margin-top-1 font-sans-sm">
                    Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians 
                    Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and 
                    NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, 
                    diagnoses, and drugs.
                  </p>
                </div>

                <div className="usa-radio margin-top-3">
                  <Radio
                    id="uniqueIdentifiers"
                    name="complaintType"
                    value="uniqueIdentifiers"
                    label="Unique Identifiers"
                    onChange={handleRadioChange}
                    checked={selectedType === "uniqueIdentifiers"}
                  />
                  <p className="margin-left-4 margin-top-1 font-sans-sm">
                    Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification 
                    Number (EIN).
                  </p>
                </div>

                <div className="usa-radio margin-top-3">
                  <Radio
                    id="operatingRules"
                    name="complaintType"
                    value="operatingRules"
                    label="Operating Rules"
                    onChange={handleRadioChange}
                    checked={selectedType === "operatingRules"}
                  />
                  <p className="margin-left-4 margin-top-1 font-sans-sm">
                    Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds 
                    Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
                  </p>
                </div>
              </form>
            </Grid>
          </Grid>

          <Grid row className="margin-top-5">
            <Grid col={12} className="display-flex flex-justify">
              <Button type="button" outline className="margin-right-2">&lt;Welcome</Button>
              <Button type="button" outline className="margin-right-2">Cancel</Button>
              <Button type="button" disabled={!selectedType}>Complainant Information&gt;</Button>
            </Grid>
          </Grid>
        </GridContainer>
      </div>

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
      />
    </div>
  );
}

export default ComplaintType;