// Internal dependencies

const PurgeServicesCommand = require(`../commands/PurgeServicesCommand`);


/**
 *
 */

class DeleteServicesAction
{
	/**
	 *
	 */

	async run(request, response, next)
	{
		// Create and run the command

		await new PurgeServicesCommand().run();


		// Send 200 response

		response.statusMessage = `Services purged`;
		response.status(204).end();
	}
}


// Export the class

module.exports = DeleteServicesAction;
