// Internal dependencies

const RegisterServiceCommand = require(`../commands/RegisterServiceCommand.js`);


/**
 *
 */

class PostServiceAction
{
	/**
	 *
	 */

	async run(request, response, next)
	{
		// Create and run the command

		new RegisterServiceCommand().run
		(
			request.params.serviceCode,
			request.body
		);


		// Send response

		response.statusMessage = `Service registered`;
		response.status(201).end();
	}
}


// Export the class

module.exports = PostServiceAction;
