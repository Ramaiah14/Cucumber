package org.runner;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Base {
	static WebDriver driver;
	
	public static void getDriver() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}
	public void alertaccept() {
		Alert a = driver.switchTo().alert();
		a.accept();
	}
	public void alertcancel() {
		Alert a = driver.switchTo().alert();
		a.dismiss();
	}
	
	public static void loadUrl(String Url) {
		driver.get(Url);
	}
	
	public void type(WebElement element, String data) {
		element.sendKeys(data);
	}
	
	public void click(WebElement element) {
		element.click();
	}
	
	public String getText(WebElement element) {
		String data1 = element.getText();
		return data1;
	}
	
	public String getAttribute(WebElement element) {
		String name = element.getAttribute("value");
		return name;
	}
	
	public WebElement findElementById(String data) {
		WebElement element = driver.findElement(By.id(data));
		return element;
	}
	
	public WebElement findElementsByXpath(String data) {
		List<WebElement> element = driver.findElements(By.id(data));
		return (WebElement) element;
	}
	
	public WebElement findElementByName(String data) {
		WebElement element = driver.findElement(By.name(data));
		return element;
	}
	
	public WebElement findElementByClassName(String data) {
		WebElement element = driver.findElement(By.className(data));
		return element;
	}
	
	public WebElement findElementByXpath(String data) {
		WebElement element = driver.findElement(By.xpath(data));
		return element;
	}
	
	public static void maximize() {
		driver.manage().window().maximize();
	}
	
	public void switchToAlertOk() {
		Alert al = driver.switchTo().alert();
		al.accept();
	}
	
	public void switchToAlertCancel() {
		Alert al = driver.switchTo().alert();
		al.dismiss();
	}
	
	public static void closeAllWindows() {
		driver.quit();
	}
	
	public static void closeWindow() {
		driver.close();
	}
	
	public String getTitle() {
		String title =driver.getTitle();
		return title;
	}
	
	public String getEnteredUrl() {
		return driver.getCurrentUrl();
	}
	
	public void selectOptionByText(WebElement element, String data) {
		new Select(element).selectByVisibleText(data);
	}
	
	public void screenshot() throws IOException {
		TakesScreenshot ts = (TakesScreenshot)driver;
		File src= ts.getScreenshotAs(OutputType.FILE);
		File dest=new File("C:\\Users\\user\\Desktop\\Screenshot\\test.jpg");
		FileUtils.copyFile(src,dest);
	}
	
	public void selectOptionByValue(WebElement element, String data) {
		new Select(element).selectByValue(data);
	}
	
	public void selectOptionByIndex(WebElement element, int index) {
		new Select(element).selectByIndex(index);
	}
	
	public void typeJs(WebElement element, String data) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','" +data+ "')",element);
	}
	
	public void typejsdown(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true)",element);
	}
	
	public void mouseHover(WebElement element){
		Actions a = new Actions(driver);
		a.moveToElement(element).perform();
	}
	
	public void doubleClick(WebElement element) {
		Actions a = new Actions(driver);
		a.doubleClick(element).perform();
	}
	
	public void dragDrop(WebElement element1, WebElement element2) {
		Actions a = new Actions(driver);
		a.dragAndDrop(element1, element2).perform();
	}
	
	public void rightClick(WebElement element) {
		new Actions(driver).contextClick(element).perform();
	}
	public void keyBoardActions() throws AWTException {
		Robot r =new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
	}
	public Object getAttributejs(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		Object data = js.executeScript("return arguments[0].getAttribute('value')",element);
		return data;
	}
	public void scrollDownjs(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollIntoView(true)",element);
	}
	public void scrollUpjs(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollIntoView(false)",element);
	}
	public void clickjs() {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()");
	}
	public void frameIndex(int index) {
		driver.switchTo().frame(index);
	}
	public void frameId(String data) {
		driver.switchTo().frame(data);
	}
	public void frameName(String data) {
		driver.switchTo().frame(data);
	}
	public void frame(WebElement element) {
		driver.switchTo().frame(element);
	}
	public void navigateFwd() {
		driver.navigate().forward();
	}
	public void navigateBack() {
		driver.navigate().back();
	}
	public void refresh() {
		driver.navigate().refresh();
	}
	public void navigateTo(String url) {
		driver.navigate().to(url);
	}
	public void parentFrame() {
		driver.switchTo().parentFrame();
		driver.switchTo().defaultContent();
	}
	public void winHandleData(String data) {
		driver.switchTo().window(data);
	}
	public void winHandleUrl(String url) {
		driver.switchTo().window(url);
	}
	public void winHandleTitle(String title) {
		driver.switchTo().window(title);
	}
	public void deselectByIndex(WebElement element, int index) {
		Select a = new Select(element);
		a.deselectByIndex(index);
	}
	public void deselectByValue(WebElement element, String data) {
		Select a = new Select(element);
		a.deselectByValue(data);
	}
	public void deselectBytext(WebElement element, String data) {
		Select a = new Select(element);
		a.deselectByVisibleText(data);
	}
	public void deselectAll(WebElement element) {
		Select a = new Select(element);
		a.deselectAll();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
