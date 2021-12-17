package org.runner;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookedPage extends Base{
	public BookedPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath= "//a[text()='Booked Itinerary']")
	private WebElement book;

	public WebElement getBook() {
		return book;
	}
	public void bookedPage() {
		click(book);
	}
}
