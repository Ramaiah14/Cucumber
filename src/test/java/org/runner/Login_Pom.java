package org.runner;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Pom extends Base{
	public Login_Pom() {
		PageFactory.initElements(driver,this);
	}
	@FindBy(id="username")
	private WebElement uname;
	@FindBy(id="password")
	private WebElement pwd;
	@FindBy(id="login")
	private WebElement btn;
	public WebElement getUname() {
		return uname;
	}
	public WebElement getPwd() {
		return pwd;
	}
	public WebElement getBtn() {
		return btn;
	}
	public void login_Pom(String Username, String Password) throws IOException {
		type(uname,Username);
		type(pwd,Password);
		click(btn);
		
	}

}
