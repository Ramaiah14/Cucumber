Feature: Verifying Adactin Hotel Webpage
Scenario Outline: Verifying Booking Hotel page by entering all fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should search by entering "<Location>","<Hotels>","<RoomType >","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>","<ChildrenperRoom>"
And User should select a hotel
And User should book hotel by entering "<FirstName>","<LastName>","<BillingAddress>","<CreditCardNo.>","<CreditCardType>","<ExpiryDate>","<CVVNumber>"
Then User should verify this msg "Booking Confirmation"

Examples:
|username|password|Location|Hotels     |RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|FirstName|LastName|BillingAddress|CreditCardNo    |CreditCardType|ExpiryDate|Expiryear|CVVNumber|
|Balaramaiah|Password@123|London|Hotel Creek|Double|3-Three        |05/12/2021 |06/12/2021  |3-Three      |2-Two          |Akash|T |Chennai       |4929345678963456|VISA          |January   |2023     |567      |



Scenario Outline: Verifying Booking Hotel page without entering all fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should search by entering "<Location>","<Hotels>","<RoomType >","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>","<ChildrenperRoom>"
And User should select a hotel
And User should book hotel without entering any inputs
Then User should verify these msg "Please Enter your First Name" , "Please Enter you Last Name","Please Enter your Address","Please Enter your 16 Digit Credit Card Number","Please Select your Credit Card Type","Please Select your Credit Card Expiry Month","Please Enter your Credit Card CVV Number"

Examples:
|username|password|Location|Hotels     |RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|
|Balaramaiah|Password@123|London|Hotel Creek|Double|3-Three        |05/12/2021 |06/12/2021  |3-Three      |2-Two          |
