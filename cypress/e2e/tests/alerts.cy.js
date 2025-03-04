import AlertsPage from '../../Page/alerts'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const alertsPage = new AlertsPage

When ("I click on the Alert Link",()=>{
    alertsPage.clickAlertsLink();
    
})
Then ("I should be navigated to the Alert Page",()=>{
    cy.url().should('include', '/alerts');
})

Then ('I clicked on the Alert button', () => {
    alertsPage.clickAlertButton();
    
    
});
Then ('I click on the OK on the alert prompt',()=>{
    alertsPage.verifyalert()
})
    

Then ('I clicked the confirm Button',()=>{
    alertsPage.clickConfirmButton()
    
})
Then('I click on the OK on the Confirm alert prompt',()=>{
    alertsPage.verifyConfirm()  
})
   

