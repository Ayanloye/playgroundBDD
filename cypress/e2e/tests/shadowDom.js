import ShadowDOM from '../../Page/shadowDom'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const page = new ShadowDOM

When("I click on the Shadow DOM link",()=>{
    page.clickshadowLink()
})

Then('I click on the Generate Button and Copy to Clipboard',()=>{
    page.clickGenerateButton();
       page.clickCopyButton();
       
    })
Then('I compare the value of clipboard to the value in the input field',()=>{
    page.readClipboard()

})