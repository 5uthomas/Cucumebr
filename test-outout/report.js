$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/anjut/Desktop/cu/CucumberSeleniumFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM creating a new Deal Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-creating-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "anjuthomas",
        "nvrsynvr"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on new deal",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 15541472000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 17917867,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 327552000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8940042240,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 11974826,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_deals_page()"
});
formatter.result({
  "duration": 5281336747,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.click_on_new_deal(DataTable)"
});
formatter.result({
  "duration": 10084462507,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});