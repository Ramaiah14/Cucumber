Feature: Verifying Adactin Hotel Webpage
Scenario Outline: Verifying Cancelling of OrderNo after booking
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should search by entering "<Location>","<Hotels>","<RoomType>","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>","<ChildrenperRoom>"
And User should select a hotel
And User should book hotel by entering "<FirstName>","<LastName>","<BillingAddress>","<CreditCardNo>","<CreditCardType>","<ExpiryDate>","<ExpiryYear>","<CVVNumber>"
Then User should cancel this order 


Examples:
|Username		|Password		 |Location|Hotels     |RoomType		|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|FirstName|LastName|BillingAddress|CreditCardNo    |CreditCardType|ExpiryDate|ExpiryYear|CVVNumber|
|Balaramaiah|Password@123|London	|Hotel Creek|Standard		|3-Three   		|05/12/2021 |06/12/2021  |3-Three      |2-Two          |Bala		 |V			  |Chennai       |4929345678963456|VISA          |January   |2023     |567      |


#Scenario Outline: Verifying Cancelling of existing OrderNo  
#Given User is in Adactin Hotel page
#When User should login with "<Username>" and "<Password>" 
#And User should cancel OrderNo.
#Then User should verify this msg "The booking has been cancelled."

#Examples: 
#|Username|Password|
#|Balaramaiah|Password@123|
