// Form styles
export const FORM_STYLES = {
  formSectionStyle: {
    backgroundColor: '#f0f7ff',
    padding: '24px',
    marginBottom: '24px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #dfe1e2'
  },
  
  fieldGroupStyle: {
    backgroundColor: '#fff',
    padding: '16px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #dfe1e2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  
  requiredFieldGroupStyle: {
    backgroundColor: '#fff',
    padding: '16px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #dfe1e2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeft: '4px solid #005ea2'
  },
  
  labelStyle: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#1b1b1b'
  },
  
  radioContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#fff'
  },
  
  radioStyle: {
    marginRight: '24px',
    fontWeight: 'normal',
  },
  
  errorStyle: {
    color: '#b50909',
    fontSize: '14px',
    marginTop: '4px',
    fontWeight: '500'
  },
  
  buttonContainerStyle: {
    backgroundColor: '#f8f9fa',
    padding: '16px 24px',
    borderRadius: '4px',
    marginTop: '24px',
    borderTop: '1px solid #dfe1e2',
    display: 'flex',
    justifyContent: 'space-between'
  },
  
  formHeaderStyle: {
    backgroundColor: '#162e51',
    color: 'white',
    padding: '20px 24px',
    borderRadius: '4px 4px 0 0',
    marginBottom: '0'
  },
  
  formContainerStyle: {
    border: '1px solid #dfe1e2',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '32px'
  },
  
  formBodyStyle: {
    padding: '24px'
  },
  
  requiredFieldMarker: {
    color: '#b50909',
    marginLeft: '4px',
    fontWeight: 'bold'
  }
};

// Form Options
export const FORM_OPTIONS = {
  // Organization Types
  organizationTypes: [
    { value: "", label: "--None--" },
    { value: "provider", label: "Provider" },
    { value: "payer", label: "Payer/Health Plan" },
    { value: "clearinghouse", label: "Clearinghouse" },
    { value: "employer", label: "Employer" },
    { value: "vendor", label: "Vendor" },
    { value: "other", label: "Other" }
  ],
  
  // States
  states: [
    { value: "", label: "--None--" },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District of Columbia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
    { value: "AS", label: "American Samoa" },
    { value: "GU", label: "Guam" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "PR", label: "Puerto Rico" },
    { value: "VI", label: "U.S. Virgin Islands" }
  ],
  
  // Title Options
  titleOptions: [
    { value: "", label: "--None--" },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "ms", label: "Ms." },
    { value: "dr", label: "Dr." }
  ]
};

// Complaint Types
export const COMPLAINT_TYPES = [
  { 
    id: "transactions",
    value: "transactions",
    label: "Transactions",
    description: "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment."
  },
  {
    id: "codeSets",
    value: "codeSets",
    label: "Code Sets",
    description: "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs."
  },
  {
    id: "uniqueIdentifiers",
    value: "uniqueIdentifiers",
    label: "Unique Identifiers",
    description: "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN)."
  },
  {
    id: "operatingRules",
    value: "operatingRules",
    label: "Operating Rules",
    description: "Select if a covered entity is in violation of the Operating Rules relating to eligibility, claim status, electronic funds transfer, remittance advice."
  }
];

// Form steps for Step Indicator
export const FORM_STEPS = [
  {
    label: "Identify the type of HIPAA/ACA complaint",
    path: "/complaint-type"
  },
  {
    label: "Provide your contact information",
    path: "/complainant-details"
  },
  {
    label: "Identify the Filed Against Entity",
    path: "/fae-details"
  },
  {
    label: "Describe the HIPAA/ACA violation",
    path: "/violation-details"
  },
  {
    label: "Review and Submit",
    path: "/review"
  }
];

// Initial form data
export const INITIAL_COMPLAINANT_FORM_DATA = {
  orgName: "",
  orgType: "",
  orgTypeOther: "",
  orgRole: "",
  orgPhone: "",
  title: "",
  firstName: "",
  middleInitial: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  zipExt: "",
  email: "",
  contactPhone: "",
  phoneExt: "",
  cellPhone: ""
};
