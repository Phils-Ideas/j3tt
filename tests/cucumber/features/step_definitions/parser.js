/**
 * Created by PhilBeadle on 14/07/2015.
 */
var fs = require('fs');
(function() {
  module.exports = function() {
    this.When(/^Add a heading to the file such as "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Given(/^Create a new markdown file called "([^"]*)" in the folder "([^"]*)"$/, function(fileName, folder, callback) {
      //fs.writeFile(folder + fileName, '', function(err) {
      //  callback();
      //});
      callback();
    });

    this.When(/^Add a description such as "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Talk about how your feature is used and what it's goal is as a second level heading "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^A new "([^"]*)" file will be in the "([^"]*)" folder$/, function(arg1, arg2, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^The file's "([^"]*)" line will be "([^"]*)"$/, function(arg1, arg2, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^The table below will show in the feature file:$/, function (table, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Add each step for how to use the feature with a tab and a \* at the beginning\.$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

  }
})();