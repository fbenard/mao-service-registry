// Internal dependencies

const UnregisterServiceCommand = require(`../commands/UnregisterServiceCommand`);
const ServiceNotFoundError = require(`../errors/ServiceNotFoundError`);


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

			await new UnregisterServiceCommand().run
			(
				request.params.serviceCode
			);


			// Send 200 response

			response.statusMessage = `Service unregistered`;
			response.status(204).end();
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
