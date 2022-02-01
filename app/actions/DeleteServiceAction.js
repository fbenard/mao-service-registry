// Internal dependencies

const UnregisterServiceCommand = require(`../commands/UnregisterServiceCommand.js`);
const ServiceNotFoundError = require(`../errors/ServiceNotFoundError.js`);


/**
 *
 */

class DeleteServiceAction
{
	/**
	 *
	 */

	async run(request, response, next)
	{
		try
		{
			// Create and run the command

			new UnregisterServiceCommand().run
			(
				request.params.serviceCode
			);


			// Send 200 response

			response.statusMessage = `Service unregistered`;
			response.status(200).end();
		}
		catch (error)
		{
			if (error instanceof ServiceNotFoundError)
			{
				// Send 404 response

				response.statusMessage = `Service not found`;
				response.status(404).end();
			}
			else
			{
				throw error;
			}
		}
	}
}


// Export the class

module.exports = DeleteServiceAction;
