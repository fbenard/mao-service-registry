// External dependencies

const BaseController = require(`mao-core`).BaseController;


// Internal dependencies

const ServiceService = require(`../services/ServiceService.js`);


/**
 *
 */

class ServiceController extends BaseController
{
	/**
	 *
	 */

	constructor()
	{
		// Call parent constructor

		super();


		// Create a service service

		this.serviceService = new ServiceService();
	}


	/**
	 *
	 */

	registerRoutes(router)
	{
		// GET /api/service/:serviceCode

		router.get
		(
			`/api/service/:serviceCode`,
			async (request, response, next) =>
			{
				await this.getService(request, response, next);
			}
		);


		// POST /api/service/:serviceCode

		router.post
		(
			`/api/service/:serviceCode`,
			async (request, response, next) =>
			{
				await this.postService(request, response, next);
			}
		);
	}


	/**
	 *
	 */

	getService(request, response, next)
	{
		try
		{
			// Retrieve the service URL

			let result = this.serviceService.getService
			(
				request.params.serviceCode
			);


			// Send response

			response.setHeader(`content-type`, `text/plain`);
			response.status(200).send(result);
		}
		catch (error)
		{
			// Define status

			let status = 500;

			if (error === "Service not found")
			{
				status = 404;				
			}


			// Send error

			this.sendError
			(
				request, response, next,
				status,
				`Getting service failed`,
				error
			);
		}
	}


	/**
	 *
	 */

	postService(request, response, next)
	{
		try
		{
			// Register the service

			let result = this.serviceService.registerService
			(
				request.params.serviceCode,
				request.body
			);


			// Send response

			response.status(201).send();
		}
		catch (error)
		{
			// Send error
			
			this.sendError
			(
				request, response, next,
				500,
				`Registering service failed`,
				error
			);
		}
	}
}


// Export the class

module.exports = ServiceController;
