// External dependencies

const { World } = require(`@cucumber/cucumber`);


// Internal dependencies

const RegistryConnector = require(`../connectors/RegistryConnector`);


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


		// Create a registry connector

		this.registryConnector = new RegistryConnector
		(
			global.config.mao.core.server.host,
			global.config.mao.core.server.port
		);
	}
}


// Export the class

module.exports = CustomWorld;
