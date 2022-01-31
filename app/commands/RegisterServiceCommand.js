/**
 *
 */

class RegisterServiceCommand
{
	/**
	 *
	 */

	async run(serviceCode, serviceUrl)
	{
		// Retrieve all services

		let services = global.config.mao.service.registry.services;


		// Add service

		services[serviceCode] = serviceUrl;
	}
}


// Export the class

module.exports = RegisterServiceCommand;
