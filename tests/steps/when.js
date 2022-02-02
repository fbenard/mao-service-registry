// External dependencies

const { When } = require(`@cucumber/cucumber`);
const chai = require(`chai`);


/**
 *
 */

When
(
	"I register the service {string} with the URL {string}",
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


/**
 *
 */

When
(
	"I unregister the service {string}",
	async function(serviceCode)
	{
		// Unregister the service

		let response = await this.registryDriver.unregisterService
		(
			serviceCode
		);


		// Check whether status code is 204
		// It means the service has been successfully unregistered
		
		chai.assert.equal(response.status, 204);
	}
);


/**
 *
 */

When
(
	"I try to unregister the service {string}",
	async function(serviceCode)
	{
		try
		{
			// Unregister the service

			this.response = await this.registryDriver.unregisterService
			(
				serviceCode
			);
		}
		catch (error)
		{
			this.response = error.response;
		}
	}
);


/**
 *
 */

When
(
	"I purge services",
	async function()
	{
		// Purge services

		let response = await this.registryDriver.purgeServices();


		// Make sure status code is 204
		// It means services have been purged

		chai.assert.equal(response.status, 204);
	}
);
