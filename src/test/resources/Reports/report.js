$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Hotel.feature");
formatter.feature({
  "name": "Verifying Adactin Hotel Webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "User is login with valid credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User search hotel with these inputs \"\u003clocation\u003e\",\"\u003chotels\u003e\",\"\u003croomtype\u003e\",\"\u003cnumberofrooms\u003e\",\"\u003ccheckindate\u003e\",\"\u003ccheckoutdate\u003e\",\"\u003cadultsperroom\u003e\",and \"\u003cchildrenperroom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.step({
  "name": "User book hotel with these values \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cbillingaddress\u003e\",\"\u003ccreditcardno\u003e\",\"\u003ccreditcardtype\u003e\",\"\u003cexpirydatemonth\u003e\",\"\u003cexpirydateyear\u003e\" and \"\u003ccvvnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "numberofrooms",
        "checkindate",
        "checkoutdate",
        "adultsperroom",
        "childrenperroom",
        "firstname",
        "lastname",
        "billingaddress",
        "creditcardno",
        "creditcardtype",
        "expirydatemonth",
        "expirydateyear",
        "cvvnumber"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "1",
        "05/12/2021",
        "05/13/2021",
        "0",
        "2",
        "Akash",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Paris",
        "HotelSunshine",
        "Standard",
        "2",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "Balan",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "LosAngels",
        "HotelSunshine",
        "Standard",
        "3",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "chand",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "NewYork",
        "HotelSunshine",
        "Standard",
        "4",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "deend",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Adelaide",
        "HotelSunshine",
        "Standard",
        "5",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "elege",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "6",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "juicy",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "7",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "green",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "8",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "johny",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "9",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "icyne",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    },
    {
      "cells": [
        "deepthy",
        "deepu@1",
        "Sydney",
        "HotelSunshine",
        "Standard",
        "10",
        "05/12/2021",
        "05/13/2021",
        "2",
        "2",
        "ponde",
        "B",
        "No.47,Thiruvallur Nagar,Koyambedu",
        "1234567891234567",
        "Visa",
        "April",
        "2022",
        "321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"1\",\"05/12/2021\",\"05/13/2021\",\"0\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"Akash\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Paris\",\"HotelSunshine\",\"Standard\",\"2\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"Balan\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"LosAngels\",\"HotelSunshine\",\"Standard\",\"3\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"chand\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"NewYork\",\"HotelSunshine\",\"Standard\",\"4\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"deend\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Adelaide\",\"HotelSunshine\",\"Standard\",\"5\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"elege\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"6\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"juicy\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"7\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"green\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"8\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"johny\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"9\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"icyne\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifying Adactin Hotel booking with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin Hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelStep.user_is_on_the_Adactin_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is login with valid credentials \"deepthy\" and \"deepu@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "HotelStep.user_is_login_with_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User search hotel with these inputs \"Sydney\",\"HotelSunshine\",\"Standard\",\"10\",\"05/12/2021\",\"05/13/2021\",\"2\",and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_search_hotel_with_these_inputs_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continue by selecting the appropriate hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_continue_by_selecting_the_appropriate_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User book hotel with these values \"ponde\",\"B\",\"No.47,Thiruvallur Nagar,Koyambedu\",\"1234567891234567\",\"Visa\",\"April\",\"2022\" and \"321\"",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStep.user_book_hotel_with_these_values_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Order No. for hotel booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStep.user_get_Order_No_for_hotel_booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
});