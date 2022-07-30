// addValue will add input text
// setValue will clear first then add text
// Chaining with elements like $().$$()
// addValue will add input text
// setValue will clear first then add text
// WDIO built in assertion has wait and retries capablities by default
// We can alter WDIO assertions from config file
// Element matcher assertions like toBEDisplayed, toBePresent,
// Betwork matcher assertions use for mocking data
// Browser matcher like toHaveUrl, toHaveUrlContaining('webdriver')
// Jest/Jasmine assertions use for non webdriverio element like array, string
// Pause() - Pause in execution. It uses for debugging purpose
// Wait for displayed, clickable, enable, exist (DOM)
// We can configure waif for commands from config.js
// wait untill return boolean
// Browser.debug

describe("Home page", () => {
  it("Verify title on home page", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=common/home&language=en-gb"
    );
    // Assert title
    await expect(browser).toHaveTitle("Your Store");
  });

  it("Verify title on contact us page", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Assert title
    await expect(browser).toHaveUrl(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
  });

  it("Verify title on contact us page", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Click on checkout link
    await $(
      "#top > div.container > div.nav.float-end > ul > li:nth-child(5) > a > span"
    ).click();
    // Assert url
    await expect(browser).toHaveUrlContaining("checkout");
  });

  it("Verify title on contact us page", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Click on checkout link
    await $(
      "#top > div.container > div.nav.float-end > ul > li:nth-child(5) > a > span"
    ).click();
    // Assert url
    await expect(browser).not.toHaveUrlContaining("common");
  });

  it.only("Get the element text", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Click on checkout link
    await $(
      "#top > div.container > div.nav.float-end > ul > li:nth-child(5) > a > span"
    ).click();
    // Get Text
    const elementTxt = await $("#content > h1").getText();
    console.log(elementTxt);

    // // waituntill
    // await browser.waitUntil(async function () {
    //   const elementTxt = await $("#content > h1").getText();
    //   console.log(elementTxt);
    // Text Assertion
    // });
    await expect(elementTxt).toEqual("Shopping Cart");
  });

  it("Handle multiple elements", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Actual nav link array
    const actualLinks = [];
    // Navigation links
    const navLinks = await $(
      "#top > div.container > div.nav.float-end > ul"
    ).$$("#top > div.container > div.nav.float-end > ul");
    for (const links of navLinks) {
      actualLinks.push(await links.getText());
    }
    console.log(actualLinks);
  });
});
