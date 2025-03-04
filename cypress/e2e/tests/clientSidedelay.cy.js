import PageObject from '../../Page/clientSidedelay'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const pageObject = new PageObject

When('I click on the Client Side Delay',()=>{
    pageObject.clickClientLink()
})
Then('I click on the Button triggering client side logic',()=>{
    pageObject.clickButton();
})
Then('I wait for the content to appear',()=>{
cy.get('.bg-success',{ timeout: 20000 }).should('be.visible')
    pageObject.verifyContentIsVisible();
})
Then('I verify the success message',()=>{
    pageObject.verifySuccessMessage('Data calculated on the client side.')
})