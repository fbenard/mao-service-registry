/**
 *
 */

class PurgeServicesCommand
{
	/**
	 *
	 */

	async run()
	{
		// Remove all services

		global.config.mao.service.registry.services = {};
	}
}


// Export the class

module.exports = PurgeServicesCommand;
