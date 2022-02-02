// External dependencies

const { Then } = require(`@cucumber/cucumber`);
const chai = require(`chai`);


/**
 *
 */

Then
(
	"the service {string} can be retrieved with the URL {string}",
	async function(serviceCode, serviceUrl)
	{
		// Retrieve the service

		let response = await this.registryDriver.retrieveService
		(
			serviceCode
		);


		// Check whether status code is 200
		// It means the service has been successfully retrieved
		
		chai.assert.equal(response.status, 200);


		// Check whether response data contains the service URL

		chai.assert.equal(response.data, serviceUrl);
	}
);


/**
 *
 */

Then
(
	"the service can not be unregistered",
	async function()
	{
		// Check whether status is 404
		
		chai.assert.equal(this.response.status, 404);
	}
);


/**
 *
 */

Then
(
	"the service can not be retrieved",
	async function()
	{
		// Check whether status is 404
		
		chai.assert.equal(this.response.status, 404);
	}
);


/**
 *
 */

Then
(
	"the service {string} has been successfully unregistered",
	async function(serviceCode)
	{
		try
		{		
			// Retrieve the service

			let response = await this.registryDriver.retrieveService
			(
				serviceCode
			);


			// We should not be there...

			chai.assert.fail();
		}
		catch (error)
		{
			// Check whether service could not be found
			
			chai.assert.equal(error.response.status, 404);
		}
	}
);
