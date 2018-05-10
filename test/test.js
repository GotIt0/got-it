var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Got It", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to the homepage", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("http://localhost:8080/")
      // Click the add a member button
      .click("#addMember")
      .screenshot("webpage.png")
      .wait(1000)
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // .end()
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Got It!");
        done();
      });
  });

  
});
