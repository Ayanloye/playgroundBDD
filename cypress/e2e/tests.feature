
Feature: Blusalt Assessment

Background: 
    Given I am on the landing page
    
    Scenario: Checking the Alert
        When I click on the Alert Link
        Then I should be navigated to the Alert Page
        Then I clicked on the Alert button
        Then I click on the OK on the alert prompt
        Then I clicked the confirm Button
        Then I click on the OK on the Confirm alert prompt
    
    Scenario: Sample App
        When I click on the Sample app Link
        Then I enter the username
        Then I enter the Password
        Then I click the Login Button
        Then I verify i have login successfully
    
    Scenario: File Upload using the Browse file button
        When I click on the file upload link
        Then I upload the file clicking the Browse file button
        Then I Verify the file is uploaded successfully
    
    Scenario: File Upload using the Drag and Drop
        When I click on the file upload link
        Then I drag and drop the file
        Then I Verify the file is uploaded successfully using drag and drop
    
    Scenario: Shadow DOM
        When I click on the Shadow DOM link
        Then I click on the Generate Button and Copy to Clipboard
        Then I compare the value of clipboard to the value in the input field
    
    Scenario: Client Side Delay
        When I click on the Client Side Delay
        Then I click on the Button triggering client side logic
        Then I wait for the content to appear
        Then I verify the success message



    
    

            