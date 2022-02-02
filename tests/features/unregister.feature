Feature: Service unregistration

	Background:
		Given the registry is empty

	Scenario: Unregister a service
		Given I have registered the service "service-test" with the URL "http://service-test"
		When I unregister the service "service-test"
		Then the service "service-test" has been successfully unregistered

	Scenario: Unregister an unknown service
		When I try to unregister the service "service-test"
		Then the service can not be unregistered
