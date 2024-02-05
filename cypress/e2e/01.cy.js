describe('Login', () => {
    it('Fields should be displayed', () => {
        cy.visit('https://github.com/')
        cy.wait(10000)
        cy.get('#user_email').should('be.visible')
        cy.get('.btn-signup-mktg').first().should('be.visible')
   })
})