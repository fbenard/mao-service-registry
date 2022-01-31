/**
 *
 */

class ServiceNotFoundError extends Error
{
	/**
	 *
	 */

	constructor(serviceCode, error)
	{
		// Call parent constructor

		super(`Service not found (${serviceCode})`);


		// Record data
		
		this.data =
		{
			serviceCode,
			error
		};
	}
}


// Export the class

module.exports = ServiceNotFoundError;
