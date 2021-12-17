Feature: Verifying Adactin Hotel Webpage
Scenario Outline: Verifying Adactin Hotel booking with valid credentials
Given User is on the Adactin Hotel page
When User is login with valid credentials "<username>" and "<password>"
And User search hotel with these inputs "<location>","<hotels>","<roomtype>","<numberofrooms>","<checkindate>","<checkoutdate>","<adultsperroom>",and "<childrenperroom>"
And User continue by selecting the appropriate hotel
And User book hotel with these values "<firstname>","<lastname>","<billingaddress>","<creditcardno>","<creditcardtype>","<expirydatemonth>","<expirydateyear>" and "<cvvnumber>"
Then User get Order No. for hotel booking confirmation

Examples:
|username   |password    |location		|hotels				|roomtype|numberofrooms|checkindate|checkoutdate|adultsperroom|childrenperroom|firstname|lastname|billingaddress                   |creditcardno    |creditcardtype|expirydatemonth|expirydateyear|cvvnumber|
|Balaramaiah|Password@123|Sydney  		|HotelSunshine|Standard|1					   |05/12/2021 |05/13/2021  |0					  |2							|Akash    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Paris   		|HotelSunshine|Standard|2					   |05/12/2021 |05/13/2021  |2					  |2							|Balan    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|LosAngels   |HotelSunshine|Standard|3					   |05/12/2021 |05/13/2021  |2					  |2							|chand    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|NewYork     |HotelSunshine|Standard|4				  	 |05/12/2021 |05/13/2021  |2					  |2							|deend    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Adelaide 		|HotelSunshine|Standard|5					   |05/12/2021 |05/13/2021  |2					  |2							|elege    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Sydney 		  |HotelSunshine|Standard|6					   |05/12/2021 |05/13/2021  |2					  |2							|juicy    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Sydney 		  |HotelSunshine|Standard|7					   |05/12/2021 |05/13/2021  |2					  |2							|green    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Sydney 		  |HotelSunshine|Standard|8				  	 |05/12/2021 |05/13/2021  |2					  |2							|johny    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Sydney  		|HotelSunshine|Standard|9				  	 |05/12/2021 |05/13/2021  |2					  |2							|icyne    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |
|Balaramaiah|Password@123|Sydney 		  |HotelSunshine|Standard|10					 |05/12/2021 |05/13/2021  |2					  |2							|ponde    |B       |No.47,Thiruvallur Nagar,Koyambedu|1234567891234567|Visa          |April          |2022					|321      |