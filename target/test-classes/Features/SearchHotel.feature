Feature: Verifying Adactin Hotel Webpage
Scenario Outline: Verifying Search Hotel page by entering all fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should search by entering "<Location>","<Hotels>","<RoomType >","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>","<ChildrenperRoom>"
Then User should verify the "Select Hotel"
Examples: 
|username|password|Location|Hotels     |RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|
|Balaramaiah|Password@123|London|Hotel Creek|Double|3-Three        |05/12/2021 |06/12/2021  |3-Three      |2-Two          |

Scenario Outline: Verifying Search Hotel page by entering mandatory fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should search by entering "<Location>","<NumberofRooms>","<CheckInDate>","<CheckOutDate>","<AdultsperRoom>"
Then User should verify this msg "Select Hotel"
Examples: 
|username|password  |Location|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|
|Balaramaiah|Password@123|London  |3-Three        |05/12/2021 |06/12/2021  |3-Three    |

Scenario Outline: Verifying Search Hotel page by entering invalid date fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should enter invalid date "<CheckInDate>","<CheckOutDate>"
Then User should verify this msg "Check-In Date shall be before than Check-Out Date" and "Check-Out Date shall be after than Check-In Date"
Examples: 
|username|password|CheckInDate|CheckOutDate|
|Balaramaiah|Password@123|05/11/2021 |06/11/2021  |

Scenario Outline: Verifying Search Hotel page without entering all fields
Given User is in Adactin Hotel page
When User should login with "<Username>" and "<Password>" 
And User should not enter any inputs
Then User should verify this msg "Please Select a Location"
Examples: 
|username|password|
|Balaramaiah|Password@123|
