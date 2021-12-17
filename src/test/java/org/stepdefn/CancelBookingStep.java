/*package org.stepdefn;

import java.io.IOException;

import org.runner.Login_Pom;
import org.runner.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CancelBookingStep extends Base {
	
	@Given("User is in Adactin Hotel page")
	public void a() {
		getDriver();
		loadUrl("https://adactinhotelapp.com/");
		maximize();
		
	}

	@When("User should login with {string} and {string}")
	public void b(String Username, String Password) throws IOException {
		Login_Pom l = new Login_Pom();
		l.login_Pom(Username,Password);
	    
	}
	
	@When("User should cancel OrderNo.")
	public void user_should_cancel_OrderNo() {
		BookedPage bp = new BookedPage();
				bp.bookedPage();
		
	}
	
	@Then("User should verify this msg {string}")
	public void c(String expectedValue) {
		CancelBooking cb = new CancelBooking();
		cb.cancelBooking(expectedValue);
		closeAllWindows();
		
		
	}
	

}*/
