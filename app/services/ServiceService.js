/**
 *
 */

class ServiceService
{
	/**
	 *
	 */

	getService(serviceCode)
	{
		// Retrieve all services

		let services = global.config.mao.service.registry.services;


		// Check whether service has been registered

		if (services.hasOwnProperty(serviceCode) !== true)
		{
			throw "Service not found";
		}


		// Grab service URL

		let result = services[serviceCode];


		return result;
	}


	/**
	 *
	 */

	registerService(serviceCode, serviceUrl)
	{
		// Retrieve all services

		let services = global.config.mao.service.registry.services;


		// Register the service

		services[serviceCode] = serviceUrl;
	}
}


// Export the class

module.exports = ServiceService;
