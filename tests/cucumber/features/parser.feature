@dev
Feature: Parsing a markdown file into a gherkin file.

	Scenario: Create a new markdown file and start the doc with a hash for heading 1
		Given Create a new markdown file called "test.md" in the folder "markdown/test/"
		When Add a heading to the file such as "#This is the feature"
		When Add a description such as "Awesome description of how this feature works."
		When Talk about how your feature is used and what it's goal is as a second level heading "##Descriptive scenario title."
		When Add each step for how to use the feature with a tab and a * at the beginning.
			| Tables        | Are           | Cool  |
			| ------------- |:-------------:| -----:|
			| col 3 is      | right-aligned | $1600 |
			| col 2 is      | centered      |   $12 |
			| zebra stripes | are neat      |    $1 |
		Then A new "test.feature" file will be in the "markdown" folder
		Then The file's "1st" line will be "Feature: This is the feature"
		Then The file's "2nd" line will be "Scenario: Descriptive scenario title."
		Then The table below will show in the feature file:
