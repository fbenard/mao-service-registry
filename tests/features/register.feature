Feature: Register a service

	Scenario: Register a new service
		Given I want to register the service "service-test" with the URL "http://service-test:8080"
		When I register the service
		Then the service has been successfully registered
		And I can successfully get the service URL
