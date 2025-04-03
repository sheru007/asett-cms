import { Footer as USWDSFooter, FooterNav } from "@trussworks/react-uswds";

function Footer({ includeSecondary = false }) {
  return (
    <USWDSFooter
      returnToTop={includeSecondary}
      primary={
        <div className="usa-footer__primary-container grid-row padding-x-4">
          <div className="grid-col-12">
            <FooterNav
            style={{display:'flex',justifyContent:'space-around'}}
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
      secondary={includeSecondary ? 
        <div className="grid-row grid-gap">
          <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <div className="mobile-lg:grid-col-auto">
              <img src="/src/assets/cms_logo.png" alt="CMS logo" />
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
        : null
      }
    />
  );
}

export default Footer; 