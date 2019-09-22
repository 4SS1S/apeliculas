import React from 'react';

import Routes from './routes';

import Navbar from './components/navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			
			<div className="container">
				<Routes />
			</div>
		</div>
	);
}

export default App;
