// Internal dependencies

const GetServiceQuery = require(`../queries/GetServiceQuery.js`);
const ServiceNotFoundError = require(`../errors/ServiceNotFoundError.js`);


/**
 *
 */

class GetServiceAction
{
	/**
	 *
	 */

	run(request, response, next)
	{
		try
		{
			// Create and run the query

			let result = new GetServiceQuery().run
			(
				request.params.serviceCode
			);


			// Send response

			response.setHeader(`content-type`, `text/plain`);
			response.status(200).send(result);
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

module.exports = GetServiceAction;
