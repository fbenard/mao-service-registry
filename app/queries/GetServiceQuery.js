// Internal dependencies

const ServiceNotFoundError = require(`../errors/ServiceNotFoundError`);


/**
 *
 */

class GetServiceQuery
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


		// Grab service URL

		let result = services[serviceCode];


		return result;
	}
}


// Export the class

module.exports = GetServiceQuery;
