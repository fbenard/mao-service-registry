// External dependencies

const { AfterAll, BeforeAll } = require(`@cucumber/cucumber`);


// Internal dependencies

const App = require(`../../node_modules/mao-core/lib/App`);
const ServiceController = require(`../../app/controllers/ServiceController`);


// Create a mao-service-registry instance

global.app = new App
(
	[
		new ServiceController()
	]
);


// Start the registry service before any scenario

BeforeAll
(
	async function()
	{
		// Start the app

		await global.app.start();
	}
);


// Stop the registry service after every scenario

AfterAll
(
	async function()
	{
		// Stop the app

		await global.app.stop();
	}
);
