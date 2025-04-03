import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import {
	GovBanner,
	Grid,
	GridContainer,
	Alert,
	Button,
	StepIndicator,
	StepIndicatorStep,
	Link,
	Card,
	CardBody,
	Footer,
	Logo,
	FooterNav,
} from '@trussworks/react-uswds';
import HeaderNavbar from './components/HeaderNavbar';


function InstructionsPage() {
	const navigate = useNavigate();

	const handleComplaintTypeClick = () => {
		navigate('/complaint-type');
	};

	return (
		<div className="instructions-page">
			<GovBanner />

			<HeaderNavbar />

			<GridContainer className="usa-section padding-y-8">
				<Grid row>
					<Grid col={12}>
						<h1 className="usa-heading margin-bottom-4">
							Administrative Simplification Enforcement and Testing Tool (ASETT)
						</h1>
						<hr className="usa-divider margin-bottom-5" />
					</Grid>
				</Grid>

				<Grid
					row
					gap
					className="margin-bottom-5"
				>
					<Grid col={12}>
						<Alert
							type="warning"
							slim
							headingLevel="h4"
						>
							<strong>Disclaimer:</strong> If you file a complaint without
							registration, you will not be able to view your complaints, upload
							supporting documents, correspond electronically, or test transactions.
						</Alert>
					</Grid>
				</Grid>

				<Grid
					row
					gap
				>
					<Grid
						col={12}
						//   desktop={{ col: 10 }}
						className="margin-x-auto"
					>
						<Card
						// className="padding-3"
						>
							<CardBody className="padding-y-4 padding-x-3">
								<p className="margin-bottom-5">
									The following is the list of steps you will take in order to
									file a complaint regarding HIPAA Transactions and Code Sets,
									Unique Identifiers, and/or Operating Rules. If you wish to file
									a Health Insurance Privacy complaint, please visit the{' '}
									<Link href="https://www.hhs.gov/ocr">
										Office for Civil Rights (OCR)
									</Link>{' '}
									website.
								</p>

								<div className="usa-step-indicator usa-step-indicator--counters-sm margin-top-6 margin-bottom-6 padding-x-2">
									<StepIndicator
										centered
										headingLevel="h4"
									>
										<StepIndicatorStep
											label="Identify the type of HIPAA/ACA complaint"
											status="current"
										/>
										<StepIndicatorStep
											label="Provide your contact information"
											// status="current"
										/>
										<StepIndicatorStep label="Identify the Filed Against Entity" />
										<StepIndicatorStep label="Describe the HIPAA/ACA violation" />
										<StepIndicatorStep label="Review and Submit" />
									</StepIndicator>
								</div>

								<div className="margin-top-6 margin-bottom-6">
									<p className="margin-bottom-3">
										You can review all information entered before submitting
										your complaint to CMS. Once the complaint is submitted, CMS
										will review all information and respond to your complaint.
									</p>
									<p>
										Click the Complaint Type button below to begin filing your
										complaint.
									</p>
								</div>

								<div className="display-flex flex-justify-end margin-top-6">
									<Button
										outline
										type="button"
										className="margin-right-2"
									>
										Cancel
									</Button>
									<Button
										type="button"
										onClick={handleComplaintTypeClick}
									>
										Complaint Type
									</Button>
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
									<a
										key="home"
										className="usa-footer__primary-link"
										href="#"
									>
										Home
									</a>,
									<a
										key="privacy"
										className="usa-footer__primary-link"
										href="#"
									>
										Privacy Policy
									</a>,
									<a
										key="security"
										className="usa-footer__primary-link"
										href="#"
									>
										Security Policy
									</a>,
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
								image={
									<img
										src="/path-to-cms-logo.png"
										alt="CMS Logo"
									/>
								}
								heading={<>Centers for Medicare &amp; Medicaid Services</>}
							/>
							<p className="usa-footer__logo-heading">
								Administrative Simplification Enforcement and Testing Tool
							</p>
						</div>
					</div>
				}
			/>
		</div>
	);
}

export default InstructionsPage;
