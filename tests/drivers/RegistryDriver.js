// External dependencies

const axios = require(`axios`);


/**
 *
 */

class RegistryDriver
{
	/**
	 *
	 */

	constructor(registryHost, registryPort)
	{
		this.url = `http://${registryHost}:${registryPort}`;
	}


	/**
	 * 
	 */

	async purgeServices()
	{
		// Call DELETE /api/delete

		let result = await axios.delete
		(
			`${this.url}/api/service`
		);


		return result;
	}


	/**
	 * 
	 */

	async retrieveService(serviceCode)
	{
		// Call GET /api/service/:serviceCode

		let result = await axios.get
		(
			`${this.url}/api/service/${serviceCode}`
		);


		return result;
	}


	/**
	 * 
	 */

	async registerService(serviceCode, serviceUrl)
	{
		// Call POST /api/service/:serviceCode

		let result = await axios.post
		(
			`${this.url}/api/service/${serviceCode}`,
			serviceUrl,
			{
				headers:
				{
					"content-type": `text/plain`
				}
			}
		);


		return result;
	}


	/**
	 * 
	 */

	async unregisterService(serviceCode)
	{
		// Call POST /api/service/:serviceCode

		let result = await axios.delete
		(
			`${this.url}/api/service/${serviceCode}`
		);


		return result;
	}
}


// Export the class

module.exports = RegistryDriver;
