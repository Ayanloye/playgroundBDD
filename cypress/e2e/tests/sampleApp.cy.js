import SampleAppPage from '../../Page/sampleApp'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const sampleApp = new SampleAppPage

When ("I click on the Sample app Link",()=>{
    sampleApp.clickSampleAppLink();  
})
Then("I enter the username",()=>{
    sampleApp.enterusername()
})

Then ("I enter the Password",()=>{
    sampleApp.enterPassword()
})

Then ("I click the Login Button",()=>{
    sampleApp.clickLogin()
})

Then("I verify i have login successfully",()=>{
    sampleApp.checkloginStatus()
})
