class NewArticle {

    inputHeader(header, value) {
        var txtHeader = "//div[contains(@class, \'form-inline-header\')]//div[label[contains(.,\'${header}\')]]//following-sibling::div//input"
        cy.xpath(txtHeader)
            .type(value)

    }

    inputFormVertical(header, value) {
        switch (header) {
            case 'Status':
            case 'Category':
            case 'Access':
            case 'Language':
                var cbbFormVertical = "//fieldset//div[contains(.,\'${header}\')]//following-sibling::div/select"
                cy.get(cbbFormVertical)
                    .select(value)
            case 'Featured':
                cy.get('#jform_featured')
                    .select(value)
            default:
                var txtFormVertical = "//div[div[label[normalize-space()=\'${header}\']]]//input"
                cy.get(txtFormVertical)
                    .type(value)
        }
    }

//    const getIframeDocument = () => {
//      return cy.get('#jform_articletext_ifr').its('0.contentDocument').should('exist')
//    }

    getIframeBody() {
      return cy.get('#jform_articletext_ifr')
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }

    inputContent(value) {
        this.getIframeBody().find('[data-id=jform_articletext] p').type(value)
    }

    clickToolbarButton(button) {
        var btnToolbar = "//div[@class='container-fluid']//button[normalize-space()=\'${button}\']"
        cy.get(btnToolbar)
            .click()
    }
}

export default NewArticle;