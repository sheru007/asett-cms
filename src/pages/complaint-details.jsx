import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	GovBanner,
	Header,
	NavMenuButton,
	PrimaryNav,
	Grid,
	GridContainer,
	Button,
	TextInput,
	Select,
	Label,
	Radio,
	Alert,
	Footer,
	FooterNav,
} from '@trussworks/react-uswds';
import HeaderNavbar from './components/HeaderNavbar'

function ComplainantDetails() {
	const navigate = useNavigate();
	const [isAnonymous, setIsAnonymous] = useState(null);

	const organizationTypes = [
		{ value: '', label: '--None--' },
		{ value: 'provider', label: 'Provider' },
		{ value: 'payer', label: 'Payer/Health Plan' },
		{ value: 'clearinghouse', label: 'Clearinghouse' },
		{ value: 'employer', label: 'Employer' },
		{ value: 'vendor', label: 'Vendor' },
		{ value: 'other', label: 'Other' },
	];

	const states = [
		{ value: '', label: '--None--' },
		{ value: 'AL', label: 'Alabama' },
		{ value: 'AK', label: 'Alaska' },
		// Add all states here
		{ value: 'WY', label: 'Wyoming' },
	];

	const titleOptions = [
		{ value: '', label: '--None--' },
		{ value: 'mr', label: 'Mr.' },
		{ value: 'mrs', label: 'Mrs.' },
		{ value: 'ms', label: 'Ms.' },
		{ value: 'dr', label: 'Dr.' },
	];

	return (
		<div>
			<GovBanner />
			<HeaderNavbar />

			<div className="usa-section">
				<GridContainer>
					<Grid row>
						<Grid
							col={12}
							className="text-right"
						>
							<p className="font-sans-3xs">Form Approved OMB No. 0938-0948</p>
						</Grid>
					</Grid>

					<Grid row>
						<Grid col={12}>
							<div className="usa-step-indicator">
								<div className="usa-step-indicator__segments">
									<div className="usa-step-indicator__segment usa-step-indicator__segment--complete">
										<span className="usa-step-indicator__segment-label">
											Complaint Type
										</span>
									</div>
									<div className="usa-step-indicator__segment usa-step-indicator__segment--current">
										<span className="usa-step-indicator__segment-label">
											Complainant Details
										</span>
									</div>
									<div className="usa-step-indicator__segment">
										<span className="usa-step-indicator__segment-label">
											FAE Details
										</span>
									</div>
									<div className="usa-step-indicator__segment">
										<span className="usa-step-indicator__segment-label">
											Complaint Details
										</span>
									</div>
									<div className="usa-step-indicator__segment">
										<span className="usa-step-indicator__segment-label">
											Review Complaint
										</span>
									</div>
									<div className="usa-step-indicator__segment">
										<span className="usa-step-indicator__segment-label">
											Submitted
										</span>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>

					<Grid
						row
						className="margin-top-4"
					>
						<Grid col={12}>
							<h1>Complainant Details</h1>
							<hr className="usa-divider" />
						</Grid>
					</Grid>

					<Grid
						row
						className="margin-top-2"
					>
						<Grid
							col={12}
							desktop={{ col: 4 }}
						>
							<Label htmlFor="anonymous">
								Do you want to remain anonymous during this process?*
							</Label>
						</Grid>
						<Grid
							col={12}
							desktop={{ col: 8 }}
						>
							<div className="usa-radio__buttons-inline">
								<div className="usa-radio">
									<Radio
										id="anonymous-yes"
										name="anonymous"
										value="yes"
										label="Yes"
										onChange={() => setIsAnonymous(true)}
										checked={isAnonymous === true}
									/>
								</div>
								<div className="usa-radio">
									<Radio
										id="anonymous-no"
										name="anonymous"
										value="no"
										label="No"
										onChange={() => setIsAnonymous(false)}
										checked={isAnonymous === false}
									/>
								</div>
							</div>
						</Grid>
					</Grid>

					{isAnonymous && (
						<Grid
							row
							className="margin-top-2"
						>
							<Grid col={12}>
								<Alert
									type="info"
									slim
								>
									<p className="font-sans-sm margin-y-0">
										<strong>Disclaimer:</strong> If you select yes, CMS will not
										share your information with the Filed Against Entity (FAE)
										during the investigation process. However, information
										provided may still be subject to disclosure rules and
										policies under the Freedom of Information Act (FOIA).
									</p>
								</Alert>
							</Grid>
						</Grid>
					)}

					<form className="usa-form">
						<Grid
							row
							className="margin-top-4"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="org-name"
									requiredMarker
								>
									Complainant Organization Name
								</Label>
								<TextInput
									id="org-name"
									name="org-name"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="org-type"
									requiredMarker
								>
									Complainant Organization Type
								</Label>
								<Select
									id="org-type"
									name="org-type"
									items={organizationTypes}
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label htmlFor="org-type-other">
									Complainant Organization Type (Other)
								</Label>
								<TextInput
									id="org-type-other"
									name="org-type-other"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label htmlFor="org-role">Complainant Organization Role</Label>
								<TextInput
									id="org-role"
									name="org-role"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="org-phone"
									requiredMarker
								>
									Complainant Organization Phone Number
								</Label>
								<TextInput
									id="org-phone"
									name="org-phone"
									type="tel"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									placeholder="(XXX) XXX-XXXX"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="title"
									requiredMarker
								>
									Complainant Title
								</Label>
								<Select
									id="title"
									name="title"
									items={titleOptions}
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="first-name"
									requiredMarker
								>
									Complainant First Name
								</Label>
								<TextInput
									id="first-name"
									name="first-name"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label htmlFor="middle-initial">Complainant MI</Label>
								<TextInput
									id="middle-initial"
									name="middle-initial"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="last-name"
									requiredMarker
								>
									Complainant Last Name
								</Label>
								<TextInput
									id="last-name"
									name="last-name"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="address1"
									requiredMarker
								>
									Complainant Address Line 1
								</Label>
								<TextInput
									id="address1"
									name="address1"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label htmlFor="address2">Complainant Address Line 2</Label>
								<TextInput
									id="address2"
									name="address2"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="city"
									requiredMarker
								>
									Complainant City/Town
								</Label>
								<TextInput
									id="city"
									name="city"
									type="text"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="state"
									requiredMarker
								>
									Complainant State/Territory
								</Label>
								<Select
									id="state"
									name="state"
									items={states}
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="zip"
									requiredMarker
								>
									Complainant Zip Code
								</Label>
								<div className="display-flex">
									<TextInput
										id="zip"
										name="zip"
										type="text"
										className="maxw-card-lg"
										pattern="[0-9]{5}"
										placeholder="55555"
									/>
									<TextInput
										id="zip-ext"
										name="zip-ext"
										type="text"
										className="width-8 margin-left-1"
										pattern="[0-9]{4}"
										placeholder="Ext."
									/>
								</div>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="email"
									requiredMarker
								>
									Complainant Email Address
								</Label>
								<TextInput
									id="email"
									name="email"
									type="email"
									placeholder="example@demo.com"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label
									htmlFor="contact-phone"
									requiredMarker
								>
									Complainant Contact Phone Number
								</Label>
								<div className="display-flex">
									<TextInput
										id="contact-phone"
										name="contact-phone"
										type="tel"
										className="maxw-card-lg"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										placeholder="(XXX) XXX-XXXX"
									/>
									<TextInput
										id="phone-ext"
										name="phone-ext"
										type="text"
										className="width-8 margin-left-1"
										placeholder="Ext."
									/>
								</div>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-2"
						>
							<Grid
								col={12}
								desktop={{ col: 6 }}
							>
								<Label htmlFor="cell-phone">Complainant Cell Phone Number</Label>
								<TextInput
									id="cell-phone"
									name="cell-phone"
									type="tel"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									placeholder="(XXX) XXX-XXXX"
								/>
							</Grid>
						</Grid>

						<Grid
							row
							className="margin-top-5"
						>
							<Grid
								col={12}
								className="display-flex flex-justify"
							>
								<Button
									type="button"
									outline
									className="margin-right-2"
									onClick={() => navigate('/complaint-type')}
								>
									&lt;Specify Complaint Type
								</Button>
								<Button
									type="button"
									outline
									className="margin-right-2"
									onClick={() => navigate('/')}
								>
									Cancel
								</Button>
								<Button
									type="button"
									onClick={() => navigate('/fae-details')}
								>
									Filed Against Entity Information&gt;
								</Button>
							</Grid>
						</Grid>
					</form>
				</GridContainer>
			</div>

			<Footer
				primary={
					<div className="usa-footer__primary-container grid-row padding-x-4">
						<div className="grid-col-12 desktop:grid-col-4">
							<a
								href="#"
								className="usa-footer__primary-link"
							>
								Home
							</a>
						</div>
						<div className="grid-col-12 desktop:grid-col-4">
							<a
								href="#"
								className="usa-footer__primary-link"
							>
								Privacy Policy
							</a>
						</div>
						<div className="grid-col-12 desktop:grid-col-4">
							<a
								href="#"
								className="usa-footer__primary-link"
							>
								Security Policy
							</a>
						</div>
					</div>
				}
			/>
		</div>
	);
}

export default ComplainantDetails;
