import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "@trussworks/react-uswds/lib/uswds.css";
import '@trussworks/react-uswds/lib/index.css';
import {
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepIndicator from '../components/StepIndicator';
import FormApproval from '../components/FormApproval';
import FormHeader from '../components/FormHeader';
import RadioTileGroup from '../components/RadioTileGroup';
import FormNavigation from '../components/FormNavigation';
import { COMPLAINT_TYPES, FORM_STEPS } from '../constants/constants';

function ComplaintType() {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleComplainantDetailsClick = () => {
    navigate('/complainant-details');
  };

  const handleWelcomeClick = () => {
    navigate('/');
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="usa-app">
      <Header />

      <main id="main-content" className="usa-section padding-y-0">
        <GridContainer>
          <FormApproval approvalNumber="0938-0948" />

          <Grid row>
            <Grid desktop={{ col: 12 }}>
              <StepIndicator currentStep={1} />
              
              <Grid row>
                <Grid col={12} className="margin-bottom-4">
                  <div className="usa-prose">
                    <FormHeader 
                      title="Complaint Type" 
                      subtitle="(Make a selection below)" 
                    />
                    
                    <RadioTileGroup 
                      options={COMPLAINT_TYPES}
                      selectedValue={selectedType}
                      onChange={handleRadioChange}
                    />
                  </div>
                </Grid>
              </Grid>

              <FormNavigation 
                backAction={handleWelcomeClick}
                backLabel="Welcome"
                nextAction={handleComplainantDetailsClick}
                nextLabel="Complainant Information"
                cancelAction={handleCancel}
                disableNext={!selectedType}
              />
            </Grid>
          </Grid>
        </GridContainer>
      </main>

      <Footer includeSecondary={false} />
    </div>
  );
}

export default ComplaintType;