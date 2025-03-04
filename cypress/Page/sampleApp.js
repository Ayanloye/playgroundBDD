// SampleAppPage.js
class SampleAppPage {
    get sampleAppLink() {
        return 'a[href="/sampleapp"]';
    }

    get usernameField(){
        return "input[name='UserName']"
    }

    get passwordField(){
        return "input[name='Password']"
    }

    get loginButton(){
        return "button#login"
    }

    get loginStatus(){
        return "label#loginstatus"
    }


    clickSampleAppLink() {
        cy.get(this.sampleAppLink).click();
    }

    enterusername(){
        cy.get(this.usernameField).type('Segun')
    }

    enterPassword(){
        cy.get(this.passwordField).type('pwd')
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }

    checkloginStatus(){
        cy.get(this.loginStatus).should('have.text', "Welcome, Segun!");
    }

}

export default SampleAppPage