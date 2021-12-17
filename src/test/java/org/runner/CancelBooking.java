package org.runner;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;

public class CancelBooking extends Base{
	public CancelBooking() {
		PageFactory.initElements(driver,this);
	}
	@FindBy(xpath = "//input[@name='btn_id_494188']")
	private WebElement order;
	public WebElement getOrder() {
		return order;
	}
	@FindBy(id = "search_result_error")
	private WebElement del;
	public WebElement getDel() {
		return del;
	}
	public void cancelBooking(String expectedValue) {
		click(order);
		alertaccept();
		String data = getText(getDel());
		Assert.assertEquals("verify cancel", expectedValue, data);
	}

}
