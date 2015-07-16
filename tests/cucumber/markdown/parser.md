#Parsing a markdown file into a gherkin file.
Using a file watcher on the markdown files the feature files are kept up to date with a simple parser.  Velocity then runs the
features as per usual and we have instant use of markdown to write up how the product works.  

##Create a new markdown file and start the doc with a hash for heading 1
This is the main scenario where a new markdown file is created using IntelliJ with the Meteor site running as per normal development.
Write your descriptions and general writing style write to engage your end customer.  What you write here should be able to be used as 
training materials.

![alt text](http://localhost:3000/images/markdownDescription.png "Example markdown")

1. Create a new markdown file called "test.md" in the folder "markdown/test/"
  * In your project use the same folder structure you want the feature files to be kept.
2. Add a heading to the file such as "#This is the feature"
2. Add a description such as "Awesome description of how this feature works."
2. Talk about how your feature is used and what it's goal is as a second level heading "##Descriptive scenario title."
2. Add each step for how to use the feature with a tab and a * at the beginning.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
3. A new "test.feature" file will be in the "markdown" folder
3. The file's "1st" line will be "Feature: This is the feature"
3. The file's "2nd" line will be "Scenario: Descriptive scenario title."
3. Hi Sam
3. The table below will show in the feature file:





