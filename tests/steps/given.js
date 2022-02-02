// External dependencies

const { Given } = require(`@cucumber/cucumber`);
const chai = require(`chai`);


/**
 *
 */

Given
(
	"the registry is empty",
	async function()
	{
		// Purge services

		let response = await this.registryDriver.purgeServices();


		// Make sure status code is 204
		// It means services have been purged

		chai.assert.equal(response.status, 204);
	}
);


/**
 *
 */

Given
(
	"I have registered the service {string} with the URL {string}",
	async function(serviceCode, serviceUrl)
	{
		// Register the service

		let response = await this.registryDriver.registerService
		(
			serviceCode,
			serviceUrl
		);


		// Check whether status code is 201
		// It means the service has been successfully registered
		
		chai.assert.equal(response.status, 201);
	}
);
