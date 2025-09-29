// External dependencies

const { setWorldConstructor } = require(`@cucumber/cucumber`);


// Internal dependencies

const RegistryConnector = require(`../connectors/RegistryConnector`);


/**
 *
 */

class World
{
	/**
	 * 
	 */

	constructor()
	{
		this.registryConnector = new RegistryConnector
		(
			global.config.mao.core.server.host,
			global.config.mao.core.server.port
		);
	}
}


// Set the world constructor

setWorldConstructor(World);
