import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';
import "@trussworks/react-uswds/lib/uswds.css";
import '@trussworks/react-uswds/lib/index.css';
import {
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import DisclaimerAlert from '../components/DisclaimerAlert';
import InstructionsCard from '../components/InstructionsCard';
import { FORM_STEPS } from '../constants/constants';

function InstructionsPage() {
  const navigate = useNavigate();

  const handleComplaintTypeClick = () => {
    navigate('/complaint-type');
  };
  
  const handleCancel = () => {
    // Handle cancel action (maybe go back to home or clear form)
    navigate('/');
  };

  // Define content as constants that could potentially be moved to constants.js
  const pageTitle = "Administrative Simplification Enforcement and Testing Tool (ASETT)";
  
  const disclaimerMessage = "If you file a complaint without registration, you will not be able to view your " +
    "complaints, upload supporting documents, correspond electronically, or test transactions.";
  
  const introText = "The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions " +
    "and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance " +
    "Privacy complaint, please visit the";
  
  const links = [
    { text: "Office for Civil Rights (OCR)", url: "https://www.hhs.gov/ocr" }
  ];
  
  const extraInfo = [
    "You can review all information entered before submitting your complaint to CMS. Once the complaint " +
    "is submitted, CMS will review all information and respond to your complaint.",
    "Click the Complaint Type button below to begin filing your complaint."
  ];

  return (
    <div className="instructions-page">
      <Header />

      <GridContainer className="usa-section padding-y-1">
        <PageHeader title={pageTitle} />
        
        <DisclaimerAlert message={disclaimerMessage} />
        
        <Grid row gap>
          <Grid col={12}>
            <InstructionsCard 
              steps={FORM_STEPS}
              currentStep={0}
              introText={introText}
              extraInfo={extraInfo}
              links={links}
              primaryAction={handleComplaintTypeClick}
              primaryLabel="Complaint Type"
              secondaryAction={handleCancel}
              secondaryLabel="Cancel"
            />
          </Grid>
        </Grid>
      </GridContainer>

      <Footer />
    </div>
  );
}

export default InstructionsPage;