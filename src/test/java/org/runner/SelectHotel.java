package org.runner;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel extends Base{
	public SelectHotel() {
		PageFactory.initElements(driver,this);
	}
	@FindBy(id="radiobutton_0")
	private WebElement sel;
	@FindBy(id="continue")
	private WebElement cont;
	public WebElement getSel() {
		return sel;
	}
	public WebElement getCont() {
		return cont;
	}
	public void selectHotel() {
		click(getSel());
		click(getCont());
	}

}
