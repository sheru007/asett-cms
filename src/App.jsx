import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "@trussworks/react-uswds/lib/uswds.css";
import '@trussworks/react-uswds/lib/index.css';
import InstructionsPage from './pages/instructions-page';
import ComplaintType from './pages/complaint-type';
import ComplainantDetails from './pages/complaint-details';

function App() {
	return (
		<Router>
		  <Routes>
			<Route path="/" element={<InstructionsPage />} />
			<Route path="/complaint-type" element={<ComplaintType />} />
			<Route path="/complainant-details" element={<ComplainantDetails />} />
			{/* Add route for FAE details page when created */}
			<Route path="/fae-details" element={<div>FAE Details Page (Coming soon)</div>} />
		  </Routes>
		</Router>
	  );
}

export default App;
