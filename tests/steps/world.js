// External dependencies

const { setWorldConstructor } = require(`@cucumber/cucumber`);


// Internal dependencies

const RegistryDriver = require(`../drivers/RegistryDriver`);


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
		this.registryDriver = new RegistryDriver
		(
			global.config.mao.core.server.host,
			global.config.mao.core.server.port
		);
	}
}


// Set the world constructor

setWorldConstructor(World);
