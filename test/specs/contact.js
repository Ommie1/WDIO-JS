describe("Home page", () => {
  it("Verify title on home page", async () => {
    // Open browser
    await browser.url(
      "http://localhost/shop/index.php?route=information/contact&language=en-gb"
    );
    // Add name
    await $("#input-name").waitForDisplayed();
    await $("#input-name").addValue("Syed Umair Hassan");
    // Add email
    await $("#input-email").addValue("abc@gmail.com");
    // Add description
    await $("#input-enquiry").addValue(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
    );
    await $('button[type="submit"]').click();
    // Add pause
    await browser.pause(5000);
  });
});
