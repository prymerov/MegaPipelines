describe('Login', () => {
    const email = `aqa_ui_${Date.now()}@gmail.com`
    it('User should be able to go click on "SignUp" button', () => {
        cy.visit('https://github.com/')
        cy.get('#user_email').type(email)
        cy.get('.btn-signup-mktg').first().click()
        cy.wait(6000)

       cy.url().should('contain', 'https://github.com/signup?user_email=')
       cy.get('[data-continue-to="password-container"]').should('be.visible')
   })
})