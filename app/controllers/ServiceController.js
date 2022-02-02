// External dependencies

const BaseController = require(`mao-core`).BaseController;


// Internal dependencies

const DeleteServiceAction = require(`../actions/DeleteServiceAction`);
const DeleteServicesAction = require(`../actions/DeleteServicesAction`);
const GetServiceAction = require(`../actions/GetServiceAction`);
const PostServiceAction = require(`../actions/PostServiceAction`);


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

		super
		(
			[
				{
					verb: `delete`,
					uri: `/api/service`,
					action: new DeleteServicesAction()
				},
				{
					verb: `delete`,
					uri: `/api/service/:serviceCode`,
					action: new DeleteServiceAction()
				},
				{
					verb: `get`,
					uri: `/api/service/:serviceCode`,
					action: new GetServiceAction()
				},
				{
					verb: `post`,
					uri: `/api/service/:serviceCode`,
					action: new PostServiceAction()
				}
			]
		);
	}
}


// Export the class

module.exports = ServiceController;
