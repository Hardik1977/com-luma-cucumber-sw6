$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GearTest.feature");
formatter.feature({
  "line": 2,
  "name": "Gear Test",
  "description": "",
  "id": "gear-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5223012300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should be able to Add Product SuccessFully To Shopping Cart",
  "description": "",
  "id": "gear-test;user-should-be-able-to-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Mouse Hover on Gear Menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Bags",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Product Name Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Verifies text Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User changes quantity to 3",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies the text You added Overnight Duffle to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks onShopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verifies Product name",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verifies Product Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Verifies Product price",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User changed quantity from 3 to 5",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User updated Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verifies Product total price",
  "keyword": "Then "
});
formatter.match({
  "location": "MenSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 91092800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 593055300,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnBags()"
});
formatter.result({
  "duration": 943192200,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClickOnProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 1073175300,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesTextOvernightDuffle()"
});
formatter.result({
  "duration": 227712900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "GearSteps.userChangesQuantityTo(int)"
});
formatter.result({
  "duration": 312543000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "duration": 146166900,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesTheTextYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 1403459400,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userClicksOnShoppingCartLink()"
});
formatter.result({
  "duration": 1483866300,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductName()"
});
formatter.result({
  "duration": 158578000,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductQuantity()"
});
formatter.result({
  "duration": 256542900,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductPrice()"
});
formatter.result({
  "duration": 190327600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    },
    {
      "val": "5",
      "offset": 32
    }
  ],
  "location": "GearSteps.userChangedQuantityFromTo(int,int)"
});
formatter.result({
  "duration": 92005200,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userUpdatedShoppingCart()"
});
formatter.result({
  "duration": 127616700,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.userVerifiesProductTotalPrice()"
});
formatter.result({
  "duration": 2843727600,
  "status": "passed"
});
formatter.after({
  "duration": 977728200,
  "status": "passed"
});
formatter.uri("WomenTest.feature");
formatter.feature({
  "line": 2,
  "name": "Women Test",
  "description": "",
  "id": "women-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2851657700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover on Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Mouse Hover on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Click on Jackets",
  "keyword": "And "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 99700,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 629058100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 181626400,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1157491700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify The SortBy Product Name Filter",
  "description": "",
  "id": "women-test;verify-the-sortby-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I Select Sort By filter “Product Name”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be able to Verify the products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 1383384600,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.userShouldBeAbleToVerifyTheProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 530800900,
  "status": "passed"
});
formatter.after({
  "duration": 787046500,
  "status": "passed"
});
formatter.before({
  "duration": 3638030900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Mouse Hover on Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Mouse Hover on Tops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Click on Jackets",
  "keyword": "And "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 718660300,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 164628600,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1536703500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify The SortBy Price Filter",
  "description": "",
  "id": "women-test;verify-the-sortby-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Select Sort By filter “Price”",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be able to Verify the Price displayed in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iSelectSortByFilterPrice()"
});
formatter.result({
  "duration": 1087400000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.userShouldBeAbleToVerifyThePriceDisplayedInLowToHigh()"
});
formatter.result({
  "duration": 645911500,
  "status": "passed"
});
formatter.after({
  "duration": 823999500,
  "status": "passed"
});
});