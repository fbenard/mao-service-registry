Feature: Purge services

	Scenario: Purge services
		Given I have registered the service "service-test-1" with the URL "http://service-test-1"
		And I have registered the service "service-test-2" with the URL "http://service-test-2"
		When I purge services
		Then the service "service-test-1" has been successfully unregistered
		And the service "service-test-2" has been successfully unregistered
