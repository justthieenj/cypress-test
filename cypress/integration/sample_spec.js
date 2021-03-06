describe('My First Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('https://www.google.com')

        // Search
        cy.get('input[name=q]')
            .click()
            .type('Foster The People')
            .type('{enter}')

        // Verify the first result title
        cy.xpath("//div[@id='search']/div/div/div[@class='g'][1]//h3")
            .should('have.text', 'Foster the People – Wikipedia tiếng Việt')
    })
})