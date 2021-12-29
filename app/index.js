// External dependencies

const App = require(`mao-core`).App;


// Internal dependencies

const ServiceController = require(`./controllers/ServiceController`);


// Create the app

let app = new App
(
	[
		new ServiceController()
	]
);


// Start the app

app.start();
