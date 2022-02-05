// External dependencies

const { AfterAll, BeforeAll } = require(`@cucumber/cucumber`);


// Internal dependencies

const app = require(`${process.cwd()}/app/index`);


/**
 *
 */

BeforeAll
(
	async function()
	{
		// Create the app

		this.app = app;
	}
);


/**
 *
 */

AfterAll
(
	async function()
	{
		// Stop the app
		
		await this.app.stop();
	}
);
