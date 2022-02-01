// External dependencies

const { When } = require(`@cucumber/cucumber`);
const axios = require(`axios`);


/**
 *
 */

When
(
	"I register the service",
	async function()
	{
		// Call POST /api/service/:serviceCode

		this.response = await axios.post
		(
			`${global.config.mao.core.server.scheme}://${global.config.mao.core.server.host}:${global.config.mao.core.server.port}/api/service/${this.serviceCode}`,
			this.serviceUrl,
			{
				headers:
				{
					"content-type": `text/plain`
				}
			}
		);
	}
);
