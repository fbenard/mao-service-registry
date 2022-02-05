Feature: Service registration

	Background:
		Given the registry is empty

	Scenario: Register a service
		When I register the service "service-test" with the URL "http://service-test"
		Then the service "service-test" can be retrieved with the URL "http://service-test"

	Scenario: Register a service twice
		Given I have registered the service "service-test" with the URL "http://service-test"
		When I register the service "service-test" with the URL "http://service-test"
		Then the service "service-test" can be retrieved with the URL "http://service-test"

	Scenario: Update the URL of a service already registered
		Given I have registered the service "service-test" with the URL "http://service-test-1"
		When I register the service "service-test" with the URL "http://service-test-2"
		Then the service "service-test" can be retrieved with the URL "http://service-test-2"
