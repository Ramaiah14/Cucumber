package org.runner;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel extends Base{
	public BookHotel() {
		PageFactory.initElements(driver,this);
	}
	@FindBy(id="first_name")
	private WebElement fname;
	@FindBy(id="last_name")
	private WebElement lname;
	@FindBy(id="address")
	private WebElement add;
	@FindBy(id="cc_num")
	private WebElement ccname;
	@FindBy(id="cc_type")
	private WebElement cctype;
	@FindBy(id="cc_exp_month")
	private WebElement ccexpirymon;
	@FindBy(id="cc_exp_year")
	private WebElement ccexpiryyear;
	@FindBy(id="cc_cvv")
	private WebElement cvvno;
	@FindBy(id="book_now")
	private WebElement btn;
	public WebElement getFname() {
		return fname;
	}
	public WebElement getLname() {
		return lname;
	}
	public WebElement getAdd() {
		return add;
	}
	public WebElement getCcname() {
		return ccname;
	}
	public WebElement getCctype() {
		return cctype;
	}
	public WebElement getCcexpirymon() {
		return ccexpirymon;
	}
	public WebElement getCcexpiryyear() {
		return ccexpiryyear;
	}
	public WebElement getCvvno() {
		return cvvno;
	}
	public WebElement getBtn() {
		return btn;
	}
	public void bookHotel(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryDate,String ExpiryYear, String CVVNumber) throws IOException
	{
		type(getFname(),FirstName);
		type(getLname(),LastName);
		type(getAdd(),BillingAddress);
		type(getCcname(),CreditCardNo);
		type(getCctype(),CreditCardType);
		type(getCcexpirymon(),ExpiryDate);
		type(getCcexpiryyear(),ExpiryYear);
		type(getCvvno(),CVVNumber);
		click(getBtn());
	}
	
	
}
