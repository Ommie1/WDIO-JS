// title : Your Store

var expect = require("expect");

describe("Home page", () => {
  // Open browser
  it("Verify title", () => {
    browser.url("http://localhost/shop/");
  });
  // Assert title
  expect(browser).toHaveTitle("Your Store");
});
