package org.runner;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;

public class BookingConfirmation_Cancel extends Base{
	public BookingConfirmation_Cancel() {
		PageFactory.initElements(driver,this);
	}
	@FindBy(id="order_no")
	private WebElement orderId;
	@FindBy(id="my_itinerary")
	private WebElement booked;
	@FindBy(id="order_id_text")
	private WebElement srch;
	@FindBy(id="search_hotel_id")
	private WebElement btn;
	@FindBy(xpath="(//input[@type='checkbox'])[1]")
	private WebElement chkbox;
	@FindBy(xpath="(//input[@type='submit'])[1]")
	private WebElement cancel;
	@FindBy(id = "search_result_error")
	private WebElement valid;
	public WebElement getOrderId() {
		return orderId;
	}
	public WebElement getBooked() {
		return booked;
	}
	public WebElement getsrch() {
		return srch;
	}
	public WebElement getbtn() {
		return btn;
	}
	public WebElement getchkbox() {
		return chkbox;
	}
	public WebElement getcancel() {
		return cancel;
	}
	public WebElement getValid() {
		return valid;
	}
	public void bookingConfirm_cancel() throws IOException, InterruptedException
	{
		String data = orderId.getAttribute("value");
		System.out.println(data);
		click(booked);
		type(srch,data);
		click(btn);
		click(chkbox);
		click(cancel);
		//alertaccept();
	}
	

}
