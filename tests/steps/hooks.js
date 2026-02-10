// External dependencies

const { After, Before } = require(`@cucumber/cucumber`);
const { setWorldConstructor, World, world } = require(`@cucumber/cucumber`);


// Internal dependencies

const App = require(`${process.cwd()}/node_modules/mao-core/lib/App`);
const RegistryConnector = require(`../connectors/RegistryConnector`);
const ServiceController = require(`../../app/controllers/ServiceController`);


/**
 *
 */

class CustomWorld extends World
{
	/**
	 * 
	 */

	constructor(options)
	{
		// Call parent constructor

		super(options);


		// Create a mao-service-registry instance

		this.app = new App
		(
			[
				new ServiceController()
			]
		)


		// Create a registry connector

		this.registryConnector = new RegistryConnector
		(
			global.config.mao.core.server.host,
			global.config.mao.core.server.port
		);
	}


	/**
	 * 
	 */

	async start()
	{
		await this.app.start();
	}


	/**
	 * 
	 */

	async stop()
	{
		await this.app.stop();
	}
}


// Set the world constructor

setWorldConstructor(CustomWorld);


// Start the registry service before each scenario

Before
(
	async function()
	{
		await this.start();
	}
);


// Stop the registry service after each scenario

After
(
	async function()
	{
		await this.stop();
	}
);
