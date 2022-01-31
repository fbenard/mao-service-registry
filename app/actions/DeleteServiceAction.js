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


			// Send response

			response.status(200).send();
		}
		catch (error)
		{
			if (error instanceof ServiceNotFoundError)
			{
				// Send 404 response

				response.setHeader(`content-type`, `text/plain`);
				response.status(404).send(`Service not found`);
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
