// External dependencies

const { Given } = require(`@cucumber/cucumber`);


/**
 *
 */

Given
(
	"I want to register the service {string} with the URL {string}",
	async function(serviceCode, serviceUrl)
	{
		// Store service credentials
		
		this.serviceCode = serviceCode;
		this.serviceUrl = serviceUrl;
	}
);
