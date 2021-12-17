package org.stepdefn;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HotelStep {
	WebDriver driver;
	@Given("User is on the Adactin Hotel page")
	public void user_is_on_the_Adactin_Hotel_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://adactinhotelapp.com/index.php");
		driver.manage().window().maximize();
		
	}

	@When("User is login with valid credentials {string} and {string}")
	public void user_is_login_with_valid_credentials_and(String uname, String pass) {
		WebElement a = driver.findElement(By.id("username"));
		a.sendKeys(uname);
		WebElement b = driver.findElement(By.id("password"));
		b.sendKeys(pass);
		WebElement btn = driver.findElement(By.id("login"));
		btn.click();
		
	}

	@When("User search hotel with these inputs {string},{string},{string},{string},{string},{string},{string},and {string}")
	public void user_search_hotel_with_these_inputs_and(String loc, String hotel, String roomtype, String roomno, String incheck, String outcheck, String adultroom, String childroom) {
		WebElement c = driver.findElement(By.id("location"));
		c.sendKeys(loc);
		WebElement d = driver.findElement(By.id("hotels"));
		d.sendKeys(hotel);
		WebElement e = driver.findElement(By.id("room_type"));
		e.sendKeys(roomtype);
		WebElement f = driver.findElement(By.id("room_nos"));
		f.sendKeys(roomno);
		WebElement g = driver.findElement(By.id("datepick_in"));
		g.sendKeys(incheck);
		WebElement h = driver.findElement(By.id("datepick_out"));
		h.sendKeys(outcheck);
		WebElement i = driver.findElement(By.id("adult_room"));
		i.sendKeys(adultroom);
		WebElement j = driver.findElement(By.id("child_room"));
		j.sendKeys(childroom);
		WebElement k = driver.findElement(By.id("Submit"));
		k.click();
		
	}

	@When("User continue by selecting the appropriate hotel")
	public void user_continue_by_selecting_the_appropriate_hotel() {
		WebElement l = driver.findElement(By.id("radiobutton_0"));
		l.click();
		WebElement m = driver.findElement(By.id("continue"));
		m.click();
	}

	@When("User book hotel with these values {string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_book_hotel_with_these_values_and(String fname, String lname, String addr, String ccno, String cctype, String ccexpmon, String ccexpyear, String ccv) {
		WebElement n = driver.findElement(By.id("first_name"));
		n.sendKeys(fname);
		WebElement o = driver.findElement(By.id("last_name"));
		o.sendKeys(lname);
		WebElement p = driver.findElement(By.id("first_name"));
		p.sendKeys(fname);
		WebElement r = driver.findElement(By.id("address"));
		r.sendKeys(addr);
		WebElement s = driver.findElement(By.id("cc_num"));
		s.sendKeys(ccno);
		WebElement t = driver.findElement(By.id("cc_type"));
		t.sendKeys(cctype);
		WebElement u = driver.findElement(By.id("cc_exp_month"));
		u.sendKeys(ccexpmon);
		WebElement v = driver.findElement(By.id("cc_exp_year"));
		v.sendKeys(ccexpyear);
		WebElement w = driver.findElement(By.id("cc_cvv"));
		w.sendKeys(ccv);
		WebElement x = driver.findElement(By.id("book_now"));
		x.click();
	}

	@Then("User get Order No. for hotel booking confirmation")
	public void user_get_Order_No_for_hotel_booking_confirmation() throws InterruptedException {
		Thread.sleep(8000);
		WebElement z=  driver.findElement(By.id("order_no"));
		String text = z.getAttribute("value");
		System.out.println(text);
		driver.quit();
	}



}
