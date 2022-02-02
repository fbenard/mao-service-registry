// External dependencies

const { Then } = require(`@cucumber/cucumber`);
const axios = require(`axios`);
const chai = require(`chai`);


/**
 *
 */

Then
(
	"the service has been successfully registered",
	async function()
	{
		// Check whether status code is 201
		// It means the service has been successfully registered
		
		chai.assert.equal(this.response.status, 201);
	}
);


/**
 *
 */

Then
(
	"I can successfully get the service URL",
	async function()
	{
		// Call GET /api/service/:serviceCode

		this.response = await axios.get
		(
			`http://${global.config.mao.core.server.host}:${global.config.mao.core.server.port}/api/service/${this.serviceCode}`
		);


		// Check whether status code is 200
		// It means the service has been successfully retrieved
		
		chai.assert.equal(this.response.status, 200);


		// Check whether response data contains the service URL

		chai.assert.equal(this.response.data, this.serviceUrl);
	}
);
