import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<Router>
			<div className='flex'>
				<div className='' style={{ width: "fit-content" }}>
					<Sidebar />
				</div>
				<div className='flex flex-col justify-between h-screen'>
					<Main />
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
