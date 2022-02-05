Feature: Service retrieval

	Background:
		Given the registry is empty

	Scenario: Retrieve a service
		Given I have registered the service "service-test" with the URL "http://service-test"
		When I retrieve the service "service-test"
		Then the service "service-test" can be retrieved with the URL "http://service-test"

	Scenario: Retrieve an unknown service
		When I try to retrieve the service "service-test"
		Then the service can not be retrieved
