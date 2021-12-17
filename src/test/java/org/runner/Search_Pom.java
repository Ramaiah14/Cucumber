package org.runner;

import java.io.IOException;

import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Pom extends Base{
	public Search_Pom() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement loc;
	@FindBy(id = "hotels")
	private WebElement hotel;
	@FindBy(id="room_type")
	private WebElement roomType;
	@FindBy(id = "room_nos")
	private WebElement roomNos;
	@FindBy(id="datepick_in")
	private WebElement checkin;
	@FindBy(id="datepick_out")
	private WebElement checkout;
	@FindBy(id="adult_room")
	private WebElement adultinRoom;
	@FindBy(id="child_room")
	private WebElement childinRoom;
	@FindBy(id="Submit")
	private WebElement btn;
	public WebElement getLoc() {
		return loc;
	}
	public WebElement getHotel() {
		return hotel;
	}
	public WebElement getRoomType() {
		return roomType;
	}
	public WebElement getRoomNos() {
		return roomNos;
	}
	public WebElement getCheckin() {
		return checkin;
	}
	public WebElement getCheckout() {
		return checkout;
	}
	public WebElement getAdultinRoom() {
		return adultinRoom;
	}
	public WebElement getChildinRoom() {
		return childinRoom;
	}
	public WebElement getBtn() {
		return btn;
	}
	@Test
	public void searchHotel(String Location,String Hotels,String RoomType,String NumberofRooms,String CheckInDate,String CheckOutDate,String AdultsperRoom,String ChildrenperRoom) throws IOException
	{
		type(getLoc(),Location);
		type(getHotel(),Hotels);
		type(getRoomType(),RoomType);
		type(getRoomNos(),NumberofRooms);
		type(getCheckin(),CheckInDate);
		type(getCheckout(),CheckOutDate);
		type(getAdultinRoom(),AdultsperRoom);
		type(getChildinRoom(),ChildrenperRoom);
		click(getBtn());
	}
	
}
