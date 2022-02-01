// External dependencies

const { AfterAll, BeforeAll } = require(`@cucumber/cucumber`);


// Internal dependencies

const app = require(`${process.cwd()}/app/index`);


/**
 *
 */

BeforeAll
(
	function()
	{
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
		await this.app.stop();
	}
);
