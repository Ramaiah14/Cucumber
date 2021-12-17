package org.stepdefn;
import java.io.IOException;

import org.runner.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HotelPOMStep extends Base{
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
	
	@When("User should search by entering {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_search_by_entering(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) throws IOException, InterruptedException {
		Search_Pom s = new Search_Pom();
		Thread.sleep(3000);
		s.searchHotel(Location,Hotels,RoomType,NumberofRooms,CheckInDate,CheckOutDate,AdultsperRoom,ChildrenperRoom);
	}
	
	@When("User should select a hotel")
	public void c() {
		SelectHotel sh = new SelectHotel();
		sh.selectHotel();
	}
	
	@When("User should book hotel by entering {string},{string},{string},{string},{string},{string},{string},{string}")
	public void d(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryDate,String ExpiryYear, String CVVNumber) throws IOException {
		BookHotel bh = new BookHotel();
		bh.bookHotel(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryDate, ExpiryYear, CVVNumber);
	}

	@Then("User should cancel this order")
	public void e() throws IOException, InterruptedException {
		Thread.sleep(8000);
		BookingConfirmation_Cancel bc = new BookingConfirmation_Cancel();
		bc.bookingConfirm_cancel();
//		bc.VerifyCancel(expectedValue);
		closeAllWindows();
	
	}
}
