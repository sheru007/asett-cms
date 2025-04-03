import React from 'react';
import {
    Header,
	NavMenuButton,
	PrimaryNav,
	Button
} from '@trussworks/react-uswds';
import { useState } from 'react';


function HeaderNavbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const onToggleMobileNav = () => {
		setMobileNavOpen((prevOpen) => !prevOpen);
	};

	const navItems = [
		<a
			key="home"
			className="usa-nav__link"
			href="#"
		>
			<span>Home</span>
		</a>,
		<a
			key="about"
			className="usa-nav__link"
			href="#"
		>
			<span>About ASETT</span>
		</a>,
		<a
			key="contact"
			className="usa-nav__link"
			href="#"
		>
			<span>Contact Us</span>
		</a>,
		<a
			key="support"
			className="usa-nav__link"
			href="#"
		>
			<span>Support</span>
		</a>,
	];

	const renderLogo = () => (
		<div
			className="usa-logo"
			id="basic-logo"
		>
			<em className="usa-logo__text">
				<a
					href="/"
					title="Home"
				>
					ASETT
				</a>
			</em>
		</div>
	);

	return (
		<Header basic>
			<div className="width-full">
				<img
					src="https://asett.cms.gov/resource/1549656663000/Images/all-purpose-banner-v3.jpg"
					alt="CMS Logo"
					style={{ maxHeight: '40px', marginRight: '10px', width: '100%' }}
				/>
			</div>
			<div className="usa-nav-container">
				{renderLogo()}
				<NavMenuButton
					onClick={onToggleMobileNav}
					label="Menu"
				/>
				<PrimaryNav
					items={navItems}
					mobileExpanded={mobileNavOpen}
					onToggleMobileNav={onToggleMobileNav}
				>
					<Button
						type="button"
						outline
					>
						Register
					</Button>
					<Button type="button">Login</Button>
				</PrimaryNav>
			</div>
		</Header>
	);
}

export default HeaderNavbar;
