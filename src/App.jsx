import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import "@trussworks/react-uswds/lib/uswds.css";
// import '@trussworks/react-uswds/lib/index.css';
import {
	GovBanner,
  } from "@trussworks/react-uswds";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<GovBanner/>
			<h1>sheru</h1>
		</div>
	);
}

export default App;
