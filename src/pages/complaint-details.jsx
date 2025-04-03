import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import {
  Grid,
  GridContainer,
} from "@trussworks/react-uswds";
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepIndicator from '../components/StepIndicator';
import FormContainer from '../components/FormContainer';
import ErrorSummary from '../components/ErrorSummary';
import FormSection from '../components/FormSection';
import AnonymousSection from '../components/AnonymousSection';
import FormFieldGroup from '../components/FormFieldGroup';
import FormNavigation from '../components/FormNavigation';
import FormApproval from '../components/FormApproval';
import { FORM_STYLES, FORM_OPTIONS, FORM_STEPS, INITIAL_COMPLAINANT_FORM_DATA } from '../constants/constants';

function ComplainantDetails() {
  const navigate = useNavigate();
  const [isAnonymous, setIsAnonymous] = useState(null);
  const [formData, setFormData] = useState(INITIAL_COMPLAINANT_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const { 
    formSectionStyle,
    fieldGroupStyle,
    requiredFieldGroupStyle,
    labelStyle,
    radioContainerStyle,
    radioStyle,
    errorStyle,
    buttonContainerStyle,
    formHeaderStyle,
    formContainerStyle,
    formBodyStyle,
    requiredFieldMarker
  } = FORM_STYLES;

  const { organizationTypes, states, titleOptions } = FORM_OPTIONS;
  
  // Group styles for FormFieldGroup
  const groupStyles = {
    default: fieldGroupStyle,
    required: requiredFieldGroupStyle
  };

  useEffect(() => {
    if (showErrors) {
      const newErrors = {};
      
      if (isAnonymous === null) {
        newErrors.anonymous = "Please select whether you want to remain anonymous";
      }
      
      if (!formData.orgName) {
        newErrors.orgName = "Organization name is required";
      }
      
      if (!formData.orgPhone) {
        newErrors.orgPhone = "Organization phone number is required";
      }
      
      if (!formData.title) {
        newErrors.title = "Title is required";
      }
      
      if (!formData.firstName) {
        newErrors.firstName = "First name is required";
      }
      
      if (!formData.lastName) {
        newErrors.lastName = "Last name is required";
      }
      
      if (!formData.address1) {
        newErrors.address1 = "Address is required";
      }
      
      if (!formData.city) {
        newErrors.city = "City is required";
      }
      
      if (!formData.state) {
        newErrors.state = "State is required";
      }
      
      if (!formData.zip) {
        newErrors.zip = "Zip code is required";
      }
      
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      
      if (!formData.contactPhone) {
        newErrors.contactPhone = "Contact phone number is required";
      }
      
      setErrors(newErrors);
    }
  }, [formData, isAnonymous, showErrors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleAnonymousChange = (value) => {
    setIsAnonymous(value);
    
    if (errors.anonymous) {
      setErrors({
        ...errors,
        anonymous: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Check required fields
    if (isAnonymous === null) {
      newErrors.anonymous = "Please select whether you want to remain anonymous";
    }
    
    if (!formData.orgName) {
      newErrors.orgName = "Organization name is required";
    }
    
    if (!formData.orgPhone) {
      newErrors.orgPhone = "Organization phone number is required";
    }
    
    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.address1) {
      newErrors.address1 = "Address is required";
    }
    
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    
    if (!formData.zip) {
      newErrors.zip = "Zip code is required";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.contactPhone) {
      newErrors.contactPhone = "Contact phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateForm();
    
    if (isValid) {
      navigate('/fae-details');
    } else {
      setShowErrors(true);
      window.scrollTo(0, 0);
    }
  };
  
  const handleBack = () => {
    navigate('/complaint-type');
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="usa-app">
      <Header />

      <main id="main-content">
        <GridContainer>
          <FormApproval approvalNumber="0938-0948" />

          <StepIndicator currentStep={2} />

          <Grid row className="margin-top-0">
            <Grid col={12}>
              <FormContainer 
                containerStyle={formContainerStyle}
                headerStyle={formHeaderStyle}
                bodyStyle={formBodyStyle}
                headerContent={<h2 className="margin-0">Complainant Details</h2>}
              >
                {/* <ErrorSummary errors={errors} show={showErrors} /> */}
                
                <form>
                  <AnonymousSection 
                    isAnonymous={isAnonymous}
                    onChange={handleAnonymousChange}
                    error={errors.anonymous}
                    showError={showErrors}
                    labelStyle={labelStyle}
                    radioContainerStyle={radioContainerStyle}
                    radioStyle={radioStyle}
                    errorStyle={errorStyle}
                    requiredMarker={requiredFieldMarker}
                    formSectionStyle={formSectionStyle}
                  />

                  <FormSection title="Organization Information">
                    <FormFieldGroup
                      id="orgName"
                      name="orgName"
                      label="Complainant Organization Name"
                      value={formData.orgName}
                      onChange={handleInputChange}
                      required={true}
                      error={errors.orgName}
                      // showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />
                    
                    <FormFieldGroup
                      id="orgType"
                      name="orgType"
                      label="Complainant Organization Type"
                      type="select"
                      value={formData.orgType}
                      onChange={handleInputChange}
                      options={organizationTypes}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                    />
                    
                    <FormFieldGroup
                      id="orgTypeOther"
                      name="orgTypeOther"
                      label="Complainant Organization Type (Other)"
                      type="text"
                      value={formData.orgTypeOther}
                      onChange={handleInputChange}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                    />
                    
                    <FormFieldGroup
                      id="orgRole"
                      name="orgRole"
                      label="Complainant Organization Role"
                      type="text"
                      value={formData.orgRole}
                      onChange={handleInputChange}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                    />
                  </FormSection>

                  <FormSection title="Contact Information">
                    <FormFieldGroup
                      id="orgPhone"
                      name="orgPhone"
                      label="Complainant Organization Phone Number"
                      type="tel"
                      value={formData.orgPhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="(XXX) XXX-XXXX"
                      required={true}
                      error={errors.orgPhone}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="title"
                      name="title"
                      label="Complainant Title"
                      type="select"
                      value={formData.title}
                      onChange={handleInputChange}
                      options={titleOptions}
                      required={true}
                      error={errors.title}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="firstName"
                      name="firstName"
                      label="Complainant First Name"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={true}
                      error={errors.firstName}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="middleInitial"
                      name="middleInitial"
                      label="Complainant MI"
                      type="text"
                      value={formData.middleInitial}
                      onChange={handleInputChange}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                    />

                    <FormFieldGroup
                      id="lastName"
                      name="lastName"
                      label="Complainant Last Name"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={true}
                      error={errors.lastName}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="email"
                      name="email"
                      label="Complainant Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required={true}
                      error={errors.email}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="contactPhone"
                      name="contactPhone"
                      label="Complainant Contact Phone Number"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="(XXX) XXX-XXXX"
                      required={true}
                      error={errors.contactPhone}
                      showError={showErrors}
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                      errorStyle={errorStyle}
                      requiredMarker={requiredFieldMarker}
                    />

                    <FormFieldGroup
                      id="cellPhone"
                      name="cellPhone"
                      label="Complainant Cell Phone Number"
                      type="tel"
                      value={formData.cellPhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="(XXX) XXX-XXXX"
                      groupStyle={groupStyles}
                      labelStyle={labelStyle}
                    />
                  </FormSection>

                <FormSection title="Address Information">
                  <FormFieldGroup
                    id="address1"
                    name="address1"
                    label="Complainant Address Line 1"
                    type="text"
                    value={formData.address1}
                    onChange={handleInputChange}
                    required={true}
                    error={errors.address1}
                    showError={showErrors}
                    groupStyle={groupStyles}
                    labelStyle={labelStyle}
                    errorStyle={errorStyle}
                    requiredMarker={requiredFieldMarker}
                  />
                  
                  <FormFieldGroup
                    id="address2"
                    name="address2"
                    label="Complainant Address Line 2"
                    type="text"
                    value={formData.address2}
                    onChange={handleInputChange}
                    groupStyle={groupStyles}
                    labelStyle={labelStyle}
                  />
                  
                  <FormFieldGroup
                    id="city"
                    name="city"
                    label="Complainant City/Town"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    required={true}
                    error={errors.city}
                    showError={showErrors}
                    groupStyle={groupStyles}
                    labelStyle={labelStyle}
                    errorStyle={errorStyle}
                    requiredMarker={requiredFieldMarker}
                  />
                  
                  <FormFieldGroup
                    id="state"
                    name="state"
                    label="Complainant State/Territory"
                    type="select"
                    value={formData.state}
                    onChange={handleInputChange}
                    options={states}
                    required={true}
                    error={errors.state}
                    showError={showErrors}
                    groupStyle={groupStyles}
                    labelStyle={labelStyle}
                    errorStyle={errorStyle}
                    requiredMarker={requiredFieldMarker}
                  />
                  
                  <FormFieldGroup
                    id="zip"
                    name="zip"
                    label="Complainant Zip Code"
                    type="text"
                    value={formData.zip}
                    onChange={handleInputChange}
                    pattern="[0-9]{5}"
                    placeholder="55555"
                    required={true}
                    error={errors.zip}
                    showError={showErrors}
                    groupStyle={groupStyles}
                    labelStyle={labelStyle}
                    errorStyle={errorStyle}
                    requiredMarker={requiredFieldMarker}
                  />
                </FormSection>

                <div style={buttonContainerStyle}>
                  <FormNavigation 
                    backAction={handleBack}
                    backLabel="Specify Complaint Type"
                    nextAction={handleNext}
                    nextLabel="Filed Against Entity Information >"
                    cancelAction={handleCancel}
                  />
                </div>
              </form>
            </FormContainer>
          </Grid>
          </Grid>
        </GridContainer>
      </main>

      <Footer />
    </div>
  );
}

export default ComplainantDetails;