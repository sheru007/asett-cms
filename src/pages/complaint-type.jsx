import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();


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

  const handleComplainantDetailsClick = () => {
    navigate('/complainant-details');
  };

  return (
    <div className="usa-app">
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

      <main id="main-content" className="usa-section padding-y-4">
        <GridContainer>
          <Grid row>
            <Grid col={12}>
              <p className="text-right font-sans-3xs text-base-dark">Form Approved OMB No. 0938-0948</p>
            </Grid>
          </Grid>

          <Grid row>
            <Grid desktop={{ col: 12 }}>
              <Grid row className="margin-bottom-4">
                <Grid col={12}>
                  <div className="usa-step-indicator usa-step-indicator--counters-sm" aria-label="Form progress">
                    <ol className="usa-step-indicator__segments">
                      <li className="usa-step-indicator__segment usa-step-indicator__segment--current">
                        <span className="usa-step-indicator__segment-label">Complaint Type <span className="usa-sr-only">completed</span></span>
                      </li>
                      <li className="usa-step-indicator__segment">
                        <span className="usa-step-indicator__segment-label">Complainant Details <span className="usa-sr-only">not completed</span></span>
                      </li>
                      <li className="usa-step-indicator__segment">
                        <span className="usa-step-indicator__segment-label">FAE Details <span className="usa-sr-only">not completed</span></span>
                      </li>
                      <li className="usa-step-indicator__segment">
                        <span className="usa-step-indicator__segment-label">Complaint Details <span className="usa-sr-only">not completed</span></span>
                      </li>
                      <li className="usa-step-indicator__segment">
                        <span className="usa-step-indicator__segment-label">Review Complaint <span className="usa-sr-only">not completed</span></span>
                      </li>
                      <li className="usa-step-indicator__segment">
                        <span className="usa-step-indicator__segment-label">Submitted <span className="usa-sr-only">not completed</span></span>
                      </li>
                    </ol>
                  </div>
                </Grid>
              </Grid>

              <Grid row>
                <Grid col={12} className="margin-bottom-4">
                  <div 
                  className="usa-prose"
                  >
                    <h1 className="font-heading-lg margin-top-0 margin-bottom-1">Complaint Type</h1>
                    <h2 className="font-heading-sm margin-top-0 margin-bottom-4 text-base-dark font-weight-normal">Make a selection below</h2>
                    <form 
                    // className="usa-form width-full"
                    >
                      <fieldset 
                    //   className="usa-fieldset"
                      >
                        <legend className="usa-legend margin-bottom-2">Select a complaint type</legend>
                        
                        <div className="usa-radio usa-radio--tile margin-bottom-3 border-1px border-base-lighter">
                          <Radio
                            id="transactions"
                            name="complaintType"
                            value="transactions"
                            label="Transactions"
                            onChange={handleRadioChange}
                            checked={selectedType === "transactions"}
                            tile
                          />
                          <p className="margin-left-4 margin-top-1 font-sans-sm text-base-dark margin-bottom-0">
                            Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance 
                            advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of 
                            benefits and premium payment.
                          </p>
                        </div>

                        <div className="usa-radio usa-radio--tile margin-bottom-3 border-1px border-base-lighter">
                          <Radio
                            id="codeSets"
                            name="complaintType"
                            value="codeSets"
                            label="Code Sets"
                            onChange={handleRadioChange}
                            checked={selectedType === "codeSets"}
                            tile
                          />
                          <p className="margin-left-4 margin-top-1 font-sans-sm text-base-dark margin-bottom-0">
                            Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians 
                            Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and 
                            NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, 
                            diagnoses, and drugs.
                          </p>
                        </div>

                        <div className="usa-radio usa-radio--tile margin-bottom-3 border-1px border-base-lighter">
                          <Radio
                            id="uniqueIdentifiers"
                            name="complaintType"
                            value="uniqueIdentifiers"
                            label="Unique Identifiers"
                            onChange={handleRadioChange}
                            checked={selectedType === "uniqueIdentifiers"}
                            tile
                          />
                          <p className="margin-left-4 margin-top-1 font-sans-sm text-base-dark margin-bottom-0">
                            Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification 
                            Number (EIN).
                          </p>
                        </div>

                        <div className="usa-radio usa-radio--tile margin-bottom-3 border-1px border-base-lighter">
                          <Radio
                            id="operatingRules"
                            name="complaintType"
                            value="operatingRules"
                            label="Operating Rules"
                            onChange={handleRadioChange}
                            checked={selectedType === "operatingRules"}
                            tile
                          />
                          <p className="margin-left-4 margin-top-1 font-sans-sm text-base-dark margin-bottom-0">
                            Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds 
                            Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
                          </p>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </Grid>
              </Grid>
              
              <Grid row className="margin-top-3">
                <Grid col={12} className="display-flex flex-justify">
                  <Button type="button" outline className="margin-right-2">
                    <span className="usa-button__text">&lt; Welcome</span>
                  </Button>
                  <Button type="button" outline secondary className="margin-right-2">
                    <span className="usa-button__text">Cancel</span>
                  </Button>
                  <Button type="button" disabled={!selectedType} onClick={handleComplainantDetailsClick}>
                    <span className="usa-button__text">
                    Complainant Information
                        </span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            
            {/* <Grid desktop={{ col: 3 }} className="padding-left-4">
              <div className="border-1px border-base-lighter padding-3 bg-white sticky-top">
                <h3 className="font-heading-sm margin-top-0 margin-bottom-2">Need Help?</h3>
                <p className="text-base-dark font-sans-sm margin-bottom-2">
                  If you need assistance with selecting a complaint type, please contact our support team.
                </p>
                <a href="#" className="usa-link">Learn more about complaint types</a>
              </div>
            </Grid> */}
          </Grid>
        </GridContainer>
      </main>

      <Footer
        returnToTop
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
                  <a key="accessibility" className="usa-footer__primary-link" href="#">Accessibility</a>,
                ]}
              />
            </div>
          </div>
        }
        secondary={
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div className="mobile-lg:grid-col-auto">
                <img src="/path-to-cms-logo.png" alt="CMS logo" />
              </div>
              <div className="mobile-lg:grid-col-auto">
                <h3 className="usa-footer__logo-heading">Administrative Simplification Enforcement Testing Tool (ASETT)</h3>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <h3 className="usa-footer__contact-heading">Contact Us</h3>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:1-800-123-4567">1-800-123-4567</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:info@asett.gov">info@asett.gov</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default ComplaintType;