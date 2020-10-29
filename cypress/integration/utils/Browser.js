class Browser {
    navigateURL(url) {
        cy.visit(url)
    }
}

export default Browser;