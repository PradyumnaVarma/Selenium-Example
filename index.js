const {Builder, By, Key, util, WebElement} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
async function deakinLogin() {
    
    // let driver = await new Builder().forBrowser("firefox").build();
    // await driver.manage.deleteAllCookies();
    // Browser Startup
   await driver.get("https://deakin.edu.au");
   
    // driver.findElement(By.id("search-bar_input")).sendKeys("bachelor of arts",Key.RETURN);
    await driver.findElement(By.id("popup-accept")).click();
    // Search bar Input
    await driver.findElement(By.id("search-bar__input")).isDisplayed();
   await driver.findElement(By.id("search-bar__input")).sendKeys("bachelor of arts");
//    await driver.findElement(By.xpath("//*[@id="search-bar__button"]//span")).click();
   await driver.findElement(By.xpath("//*[@id='search-bar__button--submit']//span")).click();
//    Select Course Information
   await driver.findElement(By.xpath("(//span[@class='icon--wrapper']//following-sibling::span[text()='Course information'])[1]")).click();
//   await driver.findElement(By.id("search-bar__toggle")).click();
//   await driver.timeout.implicitlywait(1,Timeunit.SECONDS);
//   await driver.findElement(By.className("icon--wrapper")).click();

 
    
}
deakinLogin();