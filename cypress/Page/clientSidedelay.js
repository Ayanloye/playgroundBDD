class PageObject {

    get clientLink(){
        return 'a[href="/clientdelay"]'
    }
    get button() {
        return '#ajaxButton';
    }

    get spinner() {
        return '#spinner';
    }

    get content() {
        return '#content';
    }

    get successMessage() {
        return '#content p.bg-success';
    }

    clickClientLink(){
        cy.get(this.clientLink).click()
    }

    clickButton() {
        cy.get(this.button).click();
    }

    waitForSpinnerToDisappear() {
        cy.get(this.spinner).should('not.be.visible');
    }

    verifyContentIsVisible() {
        cy.get(this.content).should('be.visible');
    }

    verifySuccessMessage(message) {
        cy.get(this.successMessage).should('have.text', message);
    }
}

export default PageObject;