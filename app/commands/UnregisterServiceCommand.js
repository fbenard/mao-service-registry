// Internal dependencies

const ServiceNotFoundError = require(`../errors/ServiceNotFoundError.js`);


/**
 *
 */

class UnregisterServiceCommand
{
	/**
	 *
	 */

	async run(serviceCode)
	{
		// Retrieve all services

		let services = global.config.mao.service.registry.services;


		// Check whether service has been registered

		if (services.hasOwnProperty(serviceCode) !== true)
		{
			throw new ServiceNotFoundError(serviceCode);
		}


		// Remove service

		delete services[serviceCode];
	}
}


// Export the class

module.exports = UnregisterServiceCommand;
