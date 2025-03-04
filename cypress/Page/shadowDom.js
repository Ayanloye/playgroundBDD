class ShadowDOM{
    get shadowdomlink() {
        return 'a[href="/shadowdom"]'
    }
    get shadowHost() {
        return 'guid-generator';
    }

    get generateButton() {
        return "#buttonGenerate";
    }

    get copyButton() {
        return '#buttonCopy';
    }

    get guidInput() {
        return 'input[id="guid"]';
    }

    clickshadowLink(){
        cy.get(this.shadowdomlink).click()
    }

    clickGenerateButton() {
        cy.get(this.shadowHost).shadow().find(this.generateButton).click();
    }

    clickCopyButton() {
        cy.get(this.shadowHost).shadow().find(this.copyButton).click();
    }

    getGuidValue() {
        return cy.get(this.shadowHost).shadow().find(this.guidInput).invoke('val');
    }

    copyToClipboard() {
        cy.get(this.guidInput).invoke('val').then((guid) => {
            cy.window().then((win) => {
                win.navigator.clipboard.writeText(guid);
            });
        });
    }

    readClipboard() {
        return cy.window().then((win) => {
            return win.navigator.clipboard.readText();
        });
    }


}
export default ShadowDOM