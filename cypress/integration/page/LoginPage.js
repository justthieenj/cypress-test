class LoginPage {
    fillLoginForm(username, password) {
        cy.get('#mod-login-username').type(username)
        cy.get('#mod-login-password').type(password)
    }

    login(username, password) {
        this.fillLoginForm(username, password)
        cy.get('.login-button').click()
    }
}

export default LoginPage;